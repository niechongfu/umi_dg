export default {
  'post /api/login'(req, res, next) {
    const { username, password } = req.body;
    console.log(username, password);
    if (username == 'dgyc' && password == '123') {
      return res.json({
        code: 0,
        data: {
          token: 'dgyc@2020@nie',
          role: 'admin',
          balance: 1000,
          username: 'dgyc',
        },
      });
    }
    if (username == 'nie' && password == '123') {
      return res.json({
        code: 0,
        data: {
          token: 'nie@2020@dgyc',
          role: 'user',
          balance: 100,
          username: 'nie',
        },
      });
    }
    return res.status(401).json({
      code: -1,
      msg: '密码错误',
    });
  },
};
