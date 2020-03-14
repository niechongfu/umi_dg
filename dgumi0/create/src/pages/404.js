import React from 'react';
import Exception from 'ant-design-pro/lib/Exception';
import { Button } from 'antd';
import router from 'umi/router';

export default function index() {
  const actions = (
    <div>
      <Button
        type="primary"
        onClick={() => {
          router.push('/');
        }}
      >
        首页
      </Button>
      <Button
        onClick={() => {
          router.goBack();
        }}
      >
        返回
      </Button>
    </div>
  );
  return (
    <div>
      <Exception type="403" actions={actions} desc="你访问的页面不存在！" title="出错啦~~" />
    </div>
  );
}
