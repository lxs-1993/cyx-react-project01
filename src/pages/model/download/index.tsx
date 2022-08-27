import styles from '../index.less';
import picture from '@/images/download/picture.jpg';
import insets from '@/images/download/insets.png';
import arrow from '@/images/download/arrow.png';
import avater from '@/images/download/avater.png';
import zhifubao from '@/images/confirm/zhifubao.png';
import view from '@/images/download/view.jpg';
import view1 from '@/images/download/view1.jpg';
import view2 from '@/images/download/view2.jpg';
import view3 from '@/images/download/view3.jpg';
import view4 from '@/images/download/view4.jpg';
import { useRef, useState } from 'react';
import { Avatar, Button, Card, Carousel, Divider } from 'antd';
import { ModalForm } from '@ant-design/pro-form';

interface listItem {
  item: string;
  name: string;
  money: number;
  number: number;
  time: any;
  scenario: string;
  software: any;
  format: any;
  plugIn: any;
  nickname: string;
  content: string;
}
export default () => {
  const inset = [insets];
  const [modelItem, setModelItem] = useState(false);
  const [index, setIndex] = useState(0);
  const [imgData, setImgData] = useState<any[]>([
    { id: 1, img: picture },
    { id: 2, img: zhifubao },
    { id: 3, img: view },
    { id: 4, img: view1 },
    { id: 5, img: view2 },
    { id: 6, img: view3 },
    { id: 7, img: view4 },
    { id: 8, img: picture },
    { id: 9, img: zhifubao },
    { id: 10, img: view },
    { id: 11, img: view1 },
    { id: 12, img: view2 },
    { id: 13, img: view3 },
    { id: 14, img: view4 },
  ]);

  const [listItemData, setListItemData] = useState<listItem>();

  const handleNext = () => {
    //
  };

  const handleDownload = () => {
    //
  };

  return (
    <div style={{ marginLeft: 70, display: 'flex' }}>
      <div className={styles.left}>
        <img
          src={imgData[index].img}
          style={{ width: 1000, height: 697, marginRight: 41 }}
        />
        <div style={{ display: 'flex', marginTop: 26, width: 1000 }}>
          {imgData?.map((item, index) => {
            return (
              <div key={item.id} style={{ overflow: 'hidden' }}>
                <img
                  src={item.img}
                  className={styles.imgs}
                  onClick={() => setIndex(index)}
                />
              </div>
            );
          })}
          {imgData.length > 13 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img src={arrow} onClick={() => handleNext()}></img>
            </div>
          )}
        </div>
      </div>
      <div style={{ marginTop: 45 }}>
        <div className={styles.right}>
          <div>
            <div style={{ color: '#1111' }}>
              <p className={styles.item}>3D现代浴室{listItemData?.item}</p>
              <p className={styles.name}>由66发布者发布{listItemData?.name}</p>
              <span className={styles.card1}>
                <a className={styles.money}>￥100{listItemData?.money}</a>
                <button
                  className={styles.button}
                  onClick={() => setModelItem(true)}
                >
                  下载3D模型
                </button>
                <ModalForm
                  visible={modelItem}
                  title="确认下载信息"
                  submitter={false}
                  onVisibleChange={setModelItem}
                >
                  <div style={{ display: 'flex' }}>
                    <div>
                      <img
                        src="http://101.132.78.184:7050/user/twoStepQRcode?ts=1631864031724&x-api-token=NDItYjUwM2JhZjc5NTk5MWVmMzQzMmE0MmI4NGQ3MjlkNTg%3D"
                        style={{
                          width: 173,
                          height: 174,
                          marginTop: 30,
                          marginLeft: 108,
                          marginRight: 82,
                        }}
                      />
                      <p style={{ display: 'flex', marginTop: 16 }}>
                        <img
                          src={zhifubao}
                          style={{
                            width: 26,
                            height: 26,
                            marginRight: 15,
                            marginLeft: 123,
                          }}
                        />
                        <p>支付宝扫描支付</p>
                      </p>
                    </div>
                    <div style={{ marginTop: 66 }}>
                      <div
                        style={{
                          border: '1px dashed #ccc',
                          borderLeft: 'none',
                          borderRight: 'none',
                          // width: 172,
                          // height: 73,
                          marginBottom: 75,
                          paddingLeft: 22,
                        }}
                      >
                        <p style={{ marginTop: 14 }}>产品编号：123456</p>
                        <p>产品价格：10</p>
                      </div>
                      <div>
                        <button
                          className={styles.downloadButt}
                          onClick={handleDownload}
                        >
                          下载
                        </button>
                      </div>
                    </div>
                  </div>
                </ModalForm>
              </span>
            </div>
            <div>
              <Card
                style={{ width: 460, margin: '20px 0px', height: 300 }}
                title="产品信息"
              >
                <span className={styles.info}>
                  <p>产品编号：1111{listItemData?.number}</p>
                  <p>发布时间：2222{listItemData?.time}</p>
                  <p>灯光场景：3333{listItemData?.scenario}</p>
                  <p>制作软件：4444{listItemData?.software}</p>
                  <p>文件格式：5555{listItemData?.format}</p>
                  <p>渲染插件：6666{listItemData?.plugIn}</p>
                </span>
              </Card>
            </div>
            <div>
              <Card style={{ width: 460, height: 150 }} title="艺术家">
                <div style={{ display: 'flex' }}>
                  <Avatar src={avater} style={{ marginRight: 21 }} />
                  <span>
                    <p>设计者名字{listItemData?.nickname}</p>
                    <p>
                      TurbSquid会员自2007年12月以来目前销售46个产品
                      {listItemData?.content}
                    </p>
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
