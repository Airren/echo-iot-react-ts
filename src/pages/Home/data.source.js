import React from 'react';
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children: './big-logo.jpg',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '/',
          children: [{ children: '首页', name: 'text' }],
        },
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '/dashboard/dashboardmonitor',
          children: [{ children: '物联云', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: '技术支持', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '/contact',
          children: [{ children: '联系我们', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: 'Trusted Industrial IoT Integrated Solution Provider',
      },
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: '可信工业物联网一体解决方案提供商',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: '探索极致用户体验与最佳工程实践探索',
      },
      {
        name: 'time',
        className: 'banner3-time',
        children: '亿氪信息 / 中国·上海',
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '亿氪物联云提供专业的服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '基于云原生强大的基础资源',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '企业资源管理' },
          content: {
            className: 'content3-content',
            children: '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云安全' },
          content: {
            className: 'content3-content',
            children: '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云监控' },
          content: {
            className: 'content3-content',
            children: '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '移动' },
          content: {
            className: 'content3-content',
            children: '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '分布式中间件' },
          content: {
            className: 'content3-content',
            children:
              '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '大数据' },
          content: {
            className: 'content3-content',
            children: '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
          },
        },
      },
    ],
  },
};
export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children: 'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '合作伙伴', className: 'title-h1' },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: 'https://www.usr.cn/Public/Usrcn2017/img/logo-lanse.png',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: 'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: 'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg',
          },
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children: 'Echo IoT',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: 'Trusted Industrial IoT Integrated Solution Provider.',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '产品' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: '产品更新记录' },
            { name: 'link1', href: '#', children: 'API文档' },
            { name: 'link2', href: '#', children: '快速入门' },
            { name: 'link3', href: '#', children: '参考指南' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'FAQ' },
            { href: '#', name: 'link1', children: '联系我们' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '资源' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Ant Design' },
            { href: '#', name: 'link1', children: 'Ant Motion' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2021 by <a href="https://www.bytegopher.com">上海亿氪信息技术有限公司</a> All Rights
        Reserved
      </span>
    ),
  },
};

export const Teams30DataSource = {
  wrapper: { className: 'home-page-wrapper teams3-wrapper' },
  page: { className: 'home-page teams3' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '团队成员' }],
  },
  blockTop: {
    className: 'block-top-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            {
              name: 'title',
              className: 'teams3-top-title',
              children: '叶秀英',
            },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children:
                'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
            },
            { name: 'title', className: 'teams3-top-title', children: '任强' },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: 'CEO & CTO',
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children:
                '曾就职与字节跳动，从事微服务大规模时序数据监测与报警相关工作。之后就职于Intel，从事Cloud Native周边开发工作。',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            {
              name: 'title',
              className: 'teams3-top-title',
              children: '叶秀英',
            },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children:
                'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
            },
          ],
        },
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    gutter: 72,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '韩勇' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: '语雀是一款优雅高效的在线文档编辑与协同工具。',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '联系方式' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            // {
            //   name: 'image',
            //   className: 'content0-block-icon',
            //   children:
            //     '/big-logo.jpg',
            // },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '邮件',
            },
            { name: 'content', children: 'echo@outxxok.com' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            // {
            //   name: 'image',
            //   className: 'content0-block-icon',
            //   children:
            //     '',
            // },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '电话',
            },
            {
              name: 'content',
              children: '021-6345xxxx',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            // {
            //   name: 'image',
            //   className: 'content0-block-icon',
            //   children:
            //     '',
            // },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '公司地址',
            },
            {
              name: 'content',
              children: '上海市闵行区莲花南路3999号',
            },
          ],
        },
      },
    ],
  },
};
export const Contact00DataSource = {
  wrapper: { className: 'home-page-wrapper content10-wrapper' },
  Content: {
    className: 'icon-wrapper',
    children: {
      icon: {
        className: 'icon',
        children: 'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
        name: '主要图标',
      },
      iconShadow: {
        className: 'icon-shadow',
        children: 'https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg',
        name: '图标影阴',
      },
      url: { children: 'https://gaode.com/place/B0FFF01W5I', name: '跳转地址' },
      title: { children: '公司地址', name: '弹框标题' },
      content: {
        children: '上海亿氪信息技术有限公司 \n 上海市闵行区莲花南路3999号',
        name: '弹框内容',
      },
    },
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018 <a href="https://motion.ant.design">Ant Motion</a> All Rights Reserved
      </span>
    ),
  },
};
