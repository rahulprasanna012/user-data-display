import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import UserDate from './components/UserDate.jsx'
import { Row, Col, Spin, Alert, Skeleton } from 'antd'

const App = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [firstLoad, setFirstLoad] = useState(true)
  const [error, setError] = useState(null)
  const [likedUserList, setLikedUserList] = useState([])

  const addAndRemoveLike = useCallback((id) => {
    setLikedUserList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
    } catch (err) {
      setError(err.message || 'Failed to fetch users')
    } finally {
      setLoading(false)
      setFirstLoad(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (firstLoad && loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" tip="Loading users..." />
      </div>
    )
  }

  if (error) {
    return (
      <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
        className="m-4"
      />
    )
  }

  return (
    <section className="p-4">
      <Row gutter={[28, 28]}>
        {loading
          ? 
            Array.from({ length: 6 }).map((_, idx) => (
              <Col key={idx} xs={24} sm={24} md={8} lg={6} xl={6}>
                <Skeleton active avatar paragraph={{ rows: 3 }} />
              </Col>
            ))
          : 
            users.map((user) => (
              <Col key={user.id} xs={24} sm={24} md={8} lg={6} xl={6}>
                <UserDate
                setUsers={setUsers}
                  user={user}
                  addAndRemoveLike={addAndRemoveLike}
                  isLiked={likedUserList.includes(user.id)}
                />
              </Col>
            ))}
      </Row>
    </section>
  )
}

export default App
