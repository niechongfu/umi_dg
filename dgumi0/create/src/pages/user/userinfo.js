import React from 'react';
import { Descriptions } from 'antd';

const Userinfo = props => {
  return (
    <div>
      <Descriptions title="用户信息" bordered>
        <Descriptions.Item label="姓名" span={1}>
          钟某某
        </Descriptions.Item>
        <Descriptions.Item label="用户名" span={1}>
          dgyc
        </Descriptions.Item>
        <Descriptions.Item label="手机号码" span={1}>
          18956898855
        </Descriptions.Item>
        <Descriptions.Item label="部门" span={2}>
          经济信息中心
        </Descriptions.Item>
        <Descriptions.Item label="邮箱" span={2}>
          1368251598@qq.com
        </Descriptions.Item>
        <Descriptions.Item label="创建时间" span={2}>
          2018-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="更新时间" span={2}>
          2019-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="其他信息" span={3}>
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default Userinfo;
