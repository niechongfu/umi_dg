// import RenderAuthorized from 'ant-design-pro/lib/Authorized';
// import { getRouteAuthority } from '@/utils/utils';

import styles from './index.css';

export default function(props) {
  // const Authorized = RenderAuthorized('12');
  // console.log(getRouteAuthority(props.location.pathname));
  // console.log(props.route.routes);
  return (
    <div className={styles.normal}>
      {/* <Authorized authority={['112', '12']}>
      </Authorized> */}
      <h1>Page index</h1>
    </div>
  );
}
