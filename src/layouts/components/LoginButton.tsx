import Dialog from 'rc-dialog';
import { useState } from 'react';
import 'rc-dialog/assets/index.css';
import './dialog.less';
import styles from './dialog.less';

interface LoginButtonProps {}

export const LoginButton = (props: LoginButtonProps) => {
  const [loginVisible, setLoginVisible] = useState<boolean>(false);
  const [createVisible, setCreateVisible] = useState<boolean>(false);
  const [resetVisible, setResetVisible] = useState<boolean>(false);
  const [memberVisible, setMemberVisible] = useState<boolean>(false);

  /** 点击登录 / 注册 */
  const handleClick = () => {
    setLoginVisible(true);
  };

  /** 点击忘记密码或会员名 */
  const handleResetPassword = () => {
    setLoginVisible(false);
    // setResetVisible(true);
    setMemberVisible(true);
  };

  /** 点击加入U4SKY */
  const handleAddClick = () => {
    setLoginVisible(false);
    setCreateVisible(true);
  };

  /** 点击现在登录 */
  const handleNowLogin = () => {
    setCreateVisible(false);
    setLoginVisible(true);
  };

  /** 点击回到登录 */
  const handleBackLogin = () => {
    setMemberVisible(false);
    setLoginVisible(true);
  };

  return (
    <span>
      <a onClick={handleClick} style={{ color: '#2DBAB8' }}>登录 / 注册</a>
      <Dialog
        width={550}
        visible={loginVisible}
        bodyStyle={{ padding: 0, height: 410 }}
        onClose={() => setLoginVisible(false)}
      >
        <div className={styles.login}>
          <div className={styles.login_left}>
            <span style={{ color: '#191919', fontSize: 22 }}>
              U4SKY优图必 登录
            </span>
            <div style={{ color: '#9A9A9A' }}>
              <span>通过使用登录访问我的账户，我承认我已阅读并</span>
              <br />
              同意使用<span style={{ color: '#006B9C' }}>条款</span>。
            </div>
            <div className={styles.login_button1}>
              <span>登录</span>
            </div>
            <a style={{ color: '#006B9C' }} onClick={handleResetPassword}>
              忘记密码或会员名？
            </a>
          </div>
          <div className={styles.login_right}>
            <span style={{ color: '#9A9A9A', fontSize: 16 }}>需要一个账户</span>
            <br />
            <a
              style={{ color: '#006B9C', fontSize: 20 }}
              onClick={handleAddClick}
            >
              加入U4SKY！
            </a>
          </div>
        </div>
      </Dialog>
      <Dialog
        width={550}
        visible={createVisible}
        bodyStyle={{ padding: 0, height: 490 }}
        onClose={() => setCreateVisible(false)}
      >
        <div className={styles.login}>
          <div className={styles.login_left}>
            <span style={{ color: '#191919', fontSize: 22 }}>
              加入U4SKY优图必！
            </span>
            <div style={{ color: '#9A9A9A' }}>
              <span>通过创建一个账户，我承认我已阅读并同意使用</span>
              <br />
              <span style={{ color: '#006B9C' }}>条款</span>。
            </div>
            <div className={styles.login_button1}>
              <span>创建账号</span>
            </div>
          </div>
          <div className={styles.login_right}>
            <span style={{ color: '#9A9A9A', fontSize: 16 }}>有一个账户？</span>
            <br />
            <a
              style={{ color: '#006B9C', fontSize: 20 }}
              onClick={handleNowLogin}
            >
              现在登录！
            </a>
          </div>
        </div>
      </Dialog>
      <Dialog
        width={550}
        visible={resetVisible}
        bodyStyle={{ padding: 0, height: 220 }}
        onClose={() => setResetVisible(false)}
      >
        <div className={styles.login}>
          <div className={styles.login_left}>
            <span style={{ color: '#191919', fontSize: 22 }}>密码重置</span>
            <div className={styles.login_button1}>
              <span>更新</span>
            </div>
          </div>
          <div className={styles.login_password_reset}>
            <span>通过使用登录访问我的账户，</span>
            <br />
            我承认我已阅读并同意使用
            <span style={{ color: '#006B9C' }}>条款</span>
          </div>
        </div>
      </Dialog>
      <Dialog
        width={550}
        visible={memberVisible}
        bodyStyle={{ padding: 0, height: 280 }}
        onClose={() => setMemberVisible(false)}
      >
        <div className={styles.login}>
          <div className={styles.login_left}>
            <span style={{ color: '#191919', fontSize: 22 }}>忘记登录信息</span>
            <div className={styles.login_button1}>
              <span>检索登录信息</span>
            </div>
          </div>
          <div className={styles.login_right}>
            <a
              style={{ color: '#006B9C', fontSize: 20 }}
              onClick={handleBackLogin}
            >
              回到登录
            </a>
          </div>
        </div>
      </Dialog>
    </span>
  );
};
