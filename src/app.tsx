import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RunTimeLayoutConfig } from 'umi';
// import {history, Link} from 'umi';
import { history } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
// import {BookOutlined, LinkOutlined} from '@ant-design/icons';

// const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  userToken?: string;
  fetchUserInfo?: (token: string) => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async (token: string) => {
    console.log('conme herew <<<<<<<<<11111');
    try {
      // @ts-ignore
      // const {bak} =localStorage.getItem('token')
      // if (token == ""){
      //   token
      // }
      const msg = await queryCurrentUser(token);
      console.log('here return');
      return msg.data;
    } catch (error) {
      console.log('conme herew <<<<<<<<<22222222');
      window.location.href =
        'http://www.bytegopher.com:7001/login/oauth/authorize?client_id=59a6ca303be1d881a7fc&response_type=code&redirect_uri=http://localhost:8001/user/login&scope=read&state=echo-bio-cloud';
      // history.push('http://www.bytegopher.com:7001/login/oauth/authorize?client_id=59a6ca303be1d881a7fc&response_type=code&redirect_uri=http://localhost:8001/user/login&scope=read&state=echo-bio-cloud');
    }
    return undefined;
  };
  // 如果是登录页面，不执行
  if (history.location.pathname !== loginPath) {
    // @ts-ignore
    const { token } = localStorage.getItem('token');
    const currentUser = await fetchUserInfo(token);
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }
  return {
    fetchUserInfo,
    settings: {},
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      // const {location} = history;
      // 如果没有登录，重定向到 login
      // if (!initialState?.currentUser && location.pathname !== loginPath) {
      //   history.push(loginPath);
      // }
    },
    // links: isDev
    //   ? [
    //     <Link to="/umi/plugin/openapi" target="_blank">
    //       <LinkOutlined/>
    //       <span>OpenAPI 文档</span>
    //     </Link>,
    //     <Link to="/~docs">
    //       <BookOutlined/>
    //       <span>业务组件文档</span>
    //     </Link>,
    //   ]
    //   : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
