import RenderAuthorized from 'ant-design-pro/lib/Authorized';

// const user_author = [];

const Authorized = props => {
  const Authorized = RenderAuthorized('admin');
  //   const authority = [JSON.parse(localStorage.getItem('userinfo')).role];
  //   console.log('authority', authority);
  const noMatch = <h1>无权限访问</h1>;
  return (
    <Authorized authority={props.authority} noMatch={noMatch}>
      31{props.chidlren}12
    </Authorized>
  );
};

export default Authorized;
