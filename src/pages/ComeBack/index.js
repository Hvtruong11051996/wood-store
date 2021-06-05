import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

function ComeBack(props) {
  return (
    <div style={{ marginTop: 150 }}>
      <Result
        status="success"
        title="Bạn đặt hàng thành công !"
        subTitle="Cảm ơn bạn đã mua hàng bên Woody !"
        extra={[
          <Button type="primary" key="console">
            <Link to="/">Go Home</Link>
          </Button>,
          <Button key="buy"><Link to="/products">Buy Again</Link></Button>,
        ]}
      />
    </div>
  );
}

export default ComeBack;