import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserDate from './components/UserDate.jsx'
import { Row, Col, Spin, Alert } from 'antd'

const App = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
      } catch (err) {
        setError(err.message || 'Failed to fetch users')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <Spin size="large" />
      </div>
    )
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon className="m-4" />
  }

  return (
    <section className="p-4 sm:p-6">
      <Row gutter={[24, 16]}>
        {users.map((user) => (
          <Col key={user.id} xs={24} sm={24} md={8} lg={6} xl={6}>
            <UserDate user={user} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default App
