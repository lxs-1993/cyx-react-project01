import { useState } from 'react';
import styles from './index.less';
import Figure from '@/images/index/figure.jpg';
import Collection from '@/images/index/collection.png';
import Download from '@/images/index/download.png';
import ArrowRight from '@/images/list/arrow_right.png';
import ArrowBottom from '@/images/list/arrow_bottom.png';
import { useHistory } from 'umi';

const listData = {
  name: '单体模型',
  category: [
    '家具',
    '灯具',
    '装饰',
    '餐厨',
    '卫浴',
    '植物',
    '科技',
    '人物动物',
    '构件',
    '工业机械',
  ],
};

const ImgData = [
  { id: 0, img: Figure, flag: false },
  { id: 1, img: Figure, flag: false },
  { id: 2, img: Figure, flag: false },
  { id: 3, img: Figure, flag: false },
  { id: 4, img: Figure, flag: false },
  { id: 5, img: Figure, flag: false },
  { id: 6, img: Figure, flag: false },
  { id: 7, img: Figure, flag: false },
  { id: 8, img: Figure, flag: false },
  { id: 9, img: Figure, flag: false },
  { id: 10, img: Figure, flag: false },
  { id: 11, img: Figure, flag: false },
  { id: 12, img: Figure, flag: false },
  { id: 13, img: Figure, flag: false },
  { id: 14, img: Figure, flag: false },
  { id: 15, img: Figure, flag: false },
  { id: 16, img: Figure, flag: false },
  { id: 17, img: Figure, flag: false },
  { id: 18, img: Figure, flag: false },
  { id: 19, img: Figure, flag: false },
  { id: 20, img: Figure, flag: false },
];

export default () => {
  const route = useHistory();
  const [list] = useState<{ name: string; category: string[] }>(listData);
  const [imgList, setImgList] = useState<
    { id: number; img: string; flag: boolean }[]
  >(ImgData);

  /** 鼠标移入 */
  const handleIn = (e: any, index: any) => {
    e.preventDefault();
    let lists = [...imgList];
    imgList[index].flag = true;
    setImgList(lists);
  };

  /** 鼠标移出 */
  const handleleave = (e: any, index: any) => {
    e.preventDefault();
    let lists = [...imgList];
    imgList[index].flag = false;
    setImgList(lists);
  };

  return (
    <div style={{ padding: '0 70px' }}>
      <div style={{ margin: '19px 0 0 10px' }}>
        {list.name}
        <img
          src={ArrowRight}
          alt="arrow_right"
          style={{ margin: '-1px 14px 0 5px' }}
        />
        {list.category.map((item, index) => {
          return (
            <span key={index} style={{ marginRight: 10 }}>
              {item}
            </span>
          );
        })}
      </div>
      <div className={styles.result}>
        <div>
          <span className={styles.span1}>{list.name}</span>
          3342 个结果：第 1 页
        </div>
        <div>
          排序：
          <span style={{ color: '#000000' }}>发布时间</span>
          <img src={ArrowBottom} alt="arrow_bottom" style={{ marginLeft: 7 }} />
        </div>
      </div>
      <div className={styles.box}>
        <ul>
          {imgList.map((item, index) => {
            return (
              <li
                key={index}
                onMouseEnter={(e) => handleIn(e, index)}
                onMouseLeave={(e) => handleleave(e, index)}
              >
                <img src={item.img} alt="item" style={{ borderRadius: 8 }} />
                <div
                  className={styles.active}
                  style={{ display: item.flag ? 'block' : 'none' }}
                >
                  <div className={styles.text}>
                    <span>双人床</span>
                    <span style={{ float: 'right' }}>
                      <img
                        src={Collection}
                        alt="collection"
                        style={{ marginRight: 16 }}
                      />
                      <img 
                        src={Download} 
                        alt="download" 
                        onClick={() =>
                          route.push(`/main/model/download/${item.id}`)
                        }
                      />
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
