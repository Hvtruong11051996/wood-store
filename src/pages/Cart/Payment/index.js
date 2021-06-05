import { UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { actPayDeleteCart, actPayment } from '../../../actions';
import './payment.css';

const { Option } = Select;


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function Payment({ test }) {


  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const carts = useSelector(state => state.carts)

  const [payCart, setPayCart] = useState([]);
  console.log(payCart);


  const onFinish = (values) => {
    console.log(values)
    setPayCart(carts);

    const action = actPayDeleteCart([]);
    dispatch(action)

    history.push("/comeback")
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="container cart-info">
      <div className="cart-info__header">
        <h2><UserOutlined /> Thông Tin Khách Hàng</h2>
      </div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '84',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="nickname"
          label="FullName"
          tooltip="What do you want others to call you?"
          rules={[{ required: true, message: 'Please input your Name!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="address"
          label="Address"
          tooltip="What do you want others to call you?"
          rules={[{ required: true, message: 'Please input your Address!', whitespace: true }]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Payment
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Payment;