// import { Cascader, Form, Button, Input, Row, Col } from 'antd';
import { useState } from 'react';
import Modifyuser from './modifyuser';
import Userinfo from './userinfo';
import styles from './about.css';
import { Button } from 'antd';

const Userabout = () => {
  const [disabled, setDisabled] = useState(false);

  const onSubmit = e => {
    setDisabled(!disabled);
    console.log(e);
    if (e) {
      //返回成功后处理逻辑
      console.log('检验成功，返回数据', e);
    }
  };
  const onModify = () => {
    setDisabled(!disabled);
  };
  return (
    <div>
      <div className={styles.header}>
        {disabled ? null : (
          // <Button onClick={onSubmit}>用户信息提交</Button>
          <Button onClick={onModify} type="primary" ghost>
            用户信息修改
          </Button>
        )}
      </div>
      {disabled ? <Modifyuser onSubmit={onSubmit}></Modifyuser> : <Userinfo></Userinfo>}
    </div>
  );
};

export default Userabout;
