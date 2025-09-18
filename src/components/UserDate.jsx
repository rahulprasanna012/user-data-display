import React, { useMemo, useState } from "react";

import { Avatar, Card } from "antd";
import {
  DeleteFilled,
  EditOutlined,
  EllipsisOutlined,
  GlobalOutlined,
  HeartFilled,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import UserUpdateModel from "./UserUpdateModel.jsx";
const UserDate = ({ user, addAndRemoveLike, isLiked, setUsers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (values) => {
  

    setUsers((prev) =>
      prev.map((u) =>
        u.id === user.id
          ? {
              ...u,
              name: values.name,
              email: values.email,
              website: values.website,
              phone: values.phone,
            }
          : u
      )
    );

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const likeTonggle = isLiked ? (
    <span
      key="like"
      className="text-red-600 text-xl transition-colors"
      onClick={() => addAndRemoveLike(user.id)}
    >
      <HeartFilled />
    </span>
  ) : (
    <span
      key="like"
      className="text-red-600 text-xl  transition-colors"
      onClick={() => addAndRemoveLike(user.id)}
    >
      <HeartOutlined />
    </span>
  );

  return (
    <Card
      style={{
        width: "100%",
        borderRadius: 0,
        borderWidth: 1,
        overflow: "hidden",
        actions: { backgroundColor: "red" },
      }}
      cover={
        <div className=" flex  bg-[#f5f5f5] justify-center  h-48 ">
          <img
            draggable={false}
            alt="example"
            className="   h-full  mx-auto object-contain "
            src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
          />
        </div>
      }
      actions={[
        likeTonggle,
        <span
          onClick={showModal}
          key="edit"
          className="text-gray-500 text-xl hover:text-blue-400 transition-colors"
        >
          <EditOutlined />
        </span>,
        <span
          key="delete"
          className="text-gray-500 text-xl hover:text-blue-400 transition-colors"
        >
          <DeleteFilled />
        </span>,
      ]}
    >
      <h1 className="font-semibold  text-[16px]">{user.name}</h1>
      <p className="text-lg text-gray-500">
        {" "}
        <MailOutlined /> <span className="ml-1 text-sm">{user.email}</span>
      </p>
      <p className="text-lg text-gray-500">
        {" "}
        <PhoneOutlined />{" "}
        <span className="ml-1 my-1 text-sm">{user.phone}</span>
      </p>
      <p className="text-lg text-gray-500">
        {" "}
        <GlobalOutlined />{" "}
        <span className="ml-1 text-sm">http://{user.website}</span>
      </p>
      <UserUpdateModel
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
        initialValues={user}
      />
    </Card>
  );
};

export default UserDate;
