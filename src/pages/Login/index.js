import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './login.css';
import HeaderTop from '../../components/Header/HeaderTop';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { actUserLogin } from '../../actions';
import { Link } from 'react-router-dom';


const openWarning = () => {
  notification.warning({
    message: 'Thông Báo :',
    description:
      'Tài khoản không tồn tại. Vui lòng đăng nhập lại !',
  });
};

const openSuccess = () => {
  notification.success({
    message: 'Thông Báo :',
    description:
      'Đăng nhập thành công !',
  });
};


function Login(props) {

  const history = useHistory();
  const dispatch = useDispatch()
  const users = useSelector(state => state.register)


  const onFinish = (values) => {

    if (users.length > 0) {

      var checkEmail = users.find(x => x.email === values.email);
      var checkPass = users.find(x => x.password === values.password);

      if (checkEmail && checkPass) {
        openSuccess();

        const action = actUserLogin(values);
        dispatch(action);
        history.push("/")
      } else {
        openWarning();
      }
    }
  };

  return (
    <div className="login-woody container">
      <HeaderTop></HeaderTop>
      <div className="login-woody__header">
        <h3>Login - Woody </h3>
      </div>
      <div className="login-woody__form">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" autoComplete="off" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to="/register"><a href="">register now!</a></Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}


export default Login;