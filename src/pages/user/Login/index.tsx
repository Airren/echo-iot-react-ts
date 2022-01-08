import React, { useState } from 'react';
import { history, useModel, useRequest } from 'umi';
import Footer from '@/components/Footer';
import { getToken } from '@/services/ant-design-pro/api';
import styles from './index.less';
import { message } from 'antd';

// const LoginMessage: React.FC<{
//   content: string;
// }> = ({content}) => (
//   <Alert
//     style={{
//       marginBottom: 24,
//     }}
//     message={content}
//     type="error"
//     showIcon
//   />
// );

const Login: React.FC = () => {
  // const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

  const fetchUserInfo = async (token: string) => {
    const userInfo = await initialState?.fetchUserInfo?.(token);

    if (userInfo) {
      await setInitialState((s) => ({ ...s, currentUser: userInfo }));
    }
  };

  // Login in to get the Token
  useRequest<API.Token>(async () => {
    try {
      if (!history) return;
      const { query } = history.location;
      const { code } = query as {
        code: string;
      };

      if (code == null) {
        console.log('code>>>>>', code);
        return;
      }
      console.log('code>>>>>', code);
      console.log('only need once <<<<<<<<');

      const msg = await getToken({ code, type });

      if (msg.access_token != '') {
        const defaultLoginSuccessMessage = '登录成功！';
        message.success(defaultLoginSuccessMessage);
        localStorage.setItem('token', msg.access_token);

        console.log('token write');

        await fetchUserInfo(msg.access_token);
        /** 此方法会跳转到 redirect 参数所在的位置 */
        if (!history) return;
        history.push('/welcome');
        // const {redirect} = query as {
        //   redirect: string;
        // };
        console.log('welcome');

        return;
      }

      console.log(msg); // 如果失败去设置用户错误信息
      // setUserLoginState(msg);
    } catch (error) {
      console.log('login err>>>>>>>');
      const defaultLoginFailureMessage = '登录失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  });

  return (
    <div className={styles.container}>
      <Footer />
    </div>
  );
};

export default Login;
