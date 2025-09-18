import React from "react";

import { Avatar, Card } from "antd";
import {
  DeleteFilled,
  EditOutlined,
  EllipsisOutlined,
  GlobalOutlined,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
const UserDate = ({ user }) => {
  return (
    <Card
      style={{ width: "100%", borderRadius: 0,borderWidth:1  , overflow:"hidden" ,actions: { backgroundColor: 'red' }}}
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
        <span
          key="like"
          className="text-pink-600 text-xl hover:text-orange-400 transition-colors"
        >
          <HeartOutlined />
        </span>,
        <span
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
 

      <h1 className="font-bold">{user.name}</h1>
      <p className="text-md">
        {" "}
        <MailOutlined /> <span>{user.email}</span>
      </p>
      <p>
        {" "}
        <PhoneOutlined /> <span>{user.phone}</span>
      </p>
      <p>
        {" "}
        <GlobalOutlined /> <span>{user.website}</span>
      </p>
    </Card>
  );
};

export default UserDate;
