import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";

const UserUpdateModel = ({
  isModalOpen,
  handleOk,      
  handleCancel,  
  initialValues, 
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (isModalOpen) {
      form.setFieldsValue({
        name: initialValues.name,
        phone:initialValues.phone,
        email:initialValues.email,
        website:initialValues.website
        
      });
    }
  }, [isModalOpen, initialValues, form]);

  const onFinish = (values) => {
    
    
    
    handleOk?.(values);
  };

  const onFinishFailed = (errorInfo) => {
   
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Update User"
      open={isModalOpen}
      onCancel={handleCancel}
      onOk={() => form.submit()} // trigger form submit when clicking OK
      closeIcon={<span aria-label="Close">✕</span>} // accessible custom close icon
      maskClosable={false}
      destroyOnHidden
    >
      <Form
        form={form}
        name="userUpdate"
        layout="vertical"              // nicer inside a modal
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input placeholder="Enter Name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input placeholder="Enter phone" />
        </Form.Item>

        <Form.Item
          label="Websites"
          name="website"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input placeholder="Enter website" />
        </Form.Item>
        

      
      </Form>
    </Modal>
  );
};

export default UserUpdateModel;
