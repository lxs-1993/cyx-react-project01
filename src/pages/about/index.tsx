const H1Style = {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#555555'
};

const pStyle ={
  fontSize: 15,
  color: '#7c7c7e',
};

export default () => {
  return (
    <div style={{ padding: '40px 720px 0 480px' }}>
      <div style={pStyle}>
        <h1 style={H1Style}>优图必U4SKY概述</h1>
        <p>欢迎来到专业3D模型源在线交易平台优图必U4SKY。</p>
        <p>
          优图必U4SKY模型源为各地的游戏开发商,新闻机构,建筑师、室内设计师、视觉效果工作室、广告商和创意专业人士所使用。
          无论你是不是3D艺术家，你可能并没有发现优图必U4SKY的存在，但这对我们来说是好的！因为你最终还是来了。
        </p>
        <p>我们的目标是要让艺术家们创造更多的原创高品质模型，从而对相关领域的应用能够更加完善。</p>
        <p>我们的客户告诉我们，他们每购买一个产品可以节省27个小时，这是一个非常有效率和品质的工作方式。</p>
        <p>
          U4SKY将逐步集中世界各地的艺术家，并通过他们的创造力,不断改进我们的模型库,
          同时帮助提供这些模型的艺术家建立一个专业的3D建模师的职业生涯。
        </p>
        <p>优图必U4SKY位于中国深圳，隶属于前海优世科技。</p>
      </div>
      <div style={{ marginTop: 100 }}>
        <h1 style={H1Style}>优图必U4SKY联系方式</h1>
        <div style={{ ...H1Style, fontSize: 20 }}>
          <span>中国深圳</span>
          <br/>
          <p>南山区前海深港合作区前湾一路1号A栋201室</p>
        </div>
        <div style={pStyle}>
          <p>商务QQ： 394094289</p>
          <p>新闻联系人：<span style={{ color: '#5d98b3' }}>press@u4sky.com</span></p>
          <p>营销联系：<span style={{ color: '#5d98b3' }}>marketing@u4sky.com</span></p>
          <p>版权代理：<span style={{ color: '#5d98b3' }}>agent@u4sky.com</span></p>
          <p>销售联系人：<span style={{ color: '#5d98b3' }}>sales@u4sky.com</span></p>
        </div>
      </div>
    </div>
  );
};
