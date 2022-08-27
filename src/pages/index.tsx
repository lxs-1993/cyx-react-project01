import { DownloadOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { routes } from 'config/routes';
import { useState } from 'react';
import picture from '@/images/download/picture.jpg';
import zhifubao from '@/images/confirm/zhifubao.png';
import view from '@/images/download/view.jpg';
import view1 from '@/images/download/view1.jpg';
import view2 from '@/images/download/view2.jpg';
import view3 from '@/images/download/view3.jpg';
import view4 from '@/images/download/view4.jpg';
import { Link, Route, useHistory } from 'umi';
import { CarouselImage } from './components/CarouselImage';
import styles from './index.less';

export default () => {
  const route = useHistory();
  const [list, setList] = useState([
    {
      id: 1,
      img: picture,
      flag: false,
    },
  ]);

  const handleIn = (e: any, index: any) => {
    console.log(index);
    e.preventDefault();
    let lists = [...list];
    list[index].flag = true;
    setList(lists);
  };

  const handleleave = (e: any, index: any) => {
    e.preventDefault();
    let lists = [...list];
    list[index].flag = false;
    setList(lists);
  };

  return (
    <div>
      <CarouselImage />
      <div className={styles.product}>新产品</div>
      <div className={styles.productImg}>
        <ul style={{ listStyle: 'none' }}>
          {list.map((item, index) => {
            return (
              <div
                key={index}
                onMouseEnter={(e) => handleIn(e, index)}
                onMouseLeave={(e) => handleleave(e, index)}
              >
                <img src={item.img} className={styles.img} />
                <div
                  style={{
                    display: item.flag ? 'block' : 'none',
                  }}
                  className={styles.flag}
                >
                  <div className={styles.mask}>
                    <a style={{ color: '#666666', marginLeft: 12 }}>产品描述</a>
                    <div style={{ float: 'right', marginRight: 14 }}>
                      <Rate style={{ marginRight: 15 }} allowClear count={1} />
                      <DownloadOutlined
                        onClick={() =>
                          route.push(`/main/model/download/${item.id}`)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
