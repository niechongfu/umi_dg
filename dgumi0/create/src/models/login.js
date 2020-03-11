import axios from 'axios';
import router from 'umi/router';

const userinfo = JSON.parse(localStorage.getItem('userinfo')) || {
  token: '',
  role: '',
  username: '',
  balance: 0,
};

function login(payload) {
  return axios.post('/api/login', payload);
}

export default {
  namespace: 'login',
  state: userinfo,
  effects: {
    *login({ payload }, { call, put }) {
      const {
        data: { code, data: userinfo },
      } = yield call(login, payload);
      if (code === 0) {
        //登录成功，保存localstorge
        localStorage.setItem('userinfo', JSON.stringify(userinfo));
        yield put({ type: 'init', payload: userinfo });
        router.push('/');
      }
    },
  },
  reducers: {
    init: (state, { payload }) => {
      return payload;
    },
  },
};
