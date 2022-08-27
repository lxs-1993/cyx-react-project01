import { IRouteComponentProps, Link, history } from 'umi';
import { LoginButton } from './components/LoginButton';
import styles from './layouts.less';
import Logo from '@/images/index/logo.png';
import { useEffect, useState } from 'react';

const NameListData = [
  { id: 0, name: '单体模型' },
  { id: 1, name: '空间场景' },
  { id: 2, name: 'VR触屏影像' },
  { id: 3, name: '精品专辑' },
  { id: 4, name: '图集灵感' },
];

export default (props: IRouteComponentProps) => {
  const [footerVisible, setFooterVisible] = useState<boolean>(true);
  const [nameList] = useState<{ id: number; name: string }[]>(NameListData);

  useEffect(() => {
    const pathname = history.location.pathname;
    if (pathname === '/main/terms' || pathname === '/main/about') {
      setFooterVisible(false);
    } else {
      setFooterVisible(true);
    }
  }, [history.location.pathname])

  return (
    <div>
      <div className={styles.header}>
        <Link to="/">
          <img src={Logo} alt="logo" style={{ marginRight: 142 }} />
        </Link>
        {nameList.map((item) => {
          return (
            <Link key={item.id} to={`/main/model/${item.id}`} className={styles.header_navLink}>
              {item.name}
            </Link>
          );
        })}
        <div className={styles.header_right}>
          <a>上传产品</a>
          <a>充值</a>
          <LoginButton />
        </div>
      </div>
      {footerVisible && (
        <div className={styles.header_notice}>
          如下载后, 没有显示压缩包文件, 请自行更改文件名后缀____.rar
        </div>
      )}
      <div className={styles.content}>{props.children}</div>
      {footerVisible && (
        <div className={styles.footer}>
          <Link to="/main/terms">条款协议</Link>
          <Link to="/main/about">关于我们</Link>
          <span>&copy;2022 u4sky</span>
        </div>
      )}
    </div>
  );
};
