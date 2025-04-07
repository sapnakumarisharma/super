import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from "antd";




const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="mt-[77px]">
        <h1 className="text-[2rem] text-center">Login Here</h1>
        <Form
          name="basic"
          className='border border-white m-auto bg-gray-400 p-2 flex flex-col  justify-center'
         
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 300,
            minHeight:300,
           
          
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username" name="username" rules={[{ required: true, message: "Please input your username!",}, ]}>
            <Input /> </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null} >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Link to={"/superhero"}>
              
              <Button type="primary" htmlType="submit"  className='ms-[90px]'>
                Submit
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Login
