const checkLogin = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log('22222222');
      const tmp = Math.random() * 10 + 1;
      const isLogin = tmp % 2 === 0;
      resolve({ data: isLogin });
    }, 1000)
  );

export default {
  checkLogin,
};
