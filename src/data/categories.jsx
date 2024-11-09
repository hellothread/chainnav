import React from 'react';
import { 
  ArrowLeftRight, Rocket, Banknote, Music, Camera, 
  Github, FileCode, Book, 
  Figma, Paintbrush, PenTool,
  FileText, School, Brain,
  Music2, Film, Youtube,
  Image, Instagram, Aperture,
  PanelsTopLeft, BarChart2, Hammer, TrendingUp,
  LineChart, Coins, Search, Database, DollarSign, PieChart, Activity, Building, Shield, BarChart
} from 'lucide-react';
import {BnbCircleColorful, OkxWalletColorful, BgbColorful} from '@ant-design/web3-icons'

export const categories = [
  {
    id: 'CEX',
    title: 'CEX',
    icon: <ArrowLeftRight size={24} />,
    links: [
      { 
        name: 'Binance',
        url: 'https://www.binance.com/activity/referral-entry/CPA/together-v4?hl=zh-CN&ref=CPA_000FKNTBB4',
        icon: <BnbCircleColorful style={{fontSize: 20}}/>,
        description: '全球领先的加密货币交易所'
      },
      { 
        name: 'OKX',
        url: 'https://okx.com/join/4408262',
        icon: <OkxWalletColorful style={{fontSize: 20}}/>,
        description: '专业的数字资产交易平台'
      },
      { 
        name: 'Bitget',
        url: 'https://share.glassgs.com/u/FUPF8NB3',
        icon: <BgbColorful style={{fontSize: 20}}/>,
        description: '创新的加密货币交易平台'
      },
      { 
        name: 'Gateio',
        url: 'https://www.gateio24.com/ref/BlJDBlo?ref_type=102',
        icon: <TrendingUp size={20}/>,
        description: '安全可靠的数字资产交易所'
      }
    ]
  },
  {
    id: 'Memecoin',
    title: 'Memecoin',
    icon: <Rocket size={24} />,
    links: [
      { 
        name: 'gmgn',
        url: 'https://gmgn.ai/?ref=3xgCWnx9',
        icon: <PanelsTopLeft size={20} />,
        description: '支持地址分析，查看MEME的聪明钱等'
      },
      { 
        name: 'dexx',
        url: 'https://dexx.ai/refer?inviteCode=NYU7VB',
        icon: <PanelsTopLeft size={20} />,
        description: '支持地址分析，提供通用的 Smart Wallet 列表'
      },
       { 
        name: 'pump',
        url: 'https://pump.fun/board',
        icon: <PanelsTopLeft size={20} />,
        description: 'Sol链meme币发币平台'
      },
      { 
        name: 'pepeboost',
        url: 'https://linktr.ee/pepeboost',
        icon: <PanelsTopLeft size={20} />,
        description: '最受欢迎的TG交易机器人之一'
      },
      { 
        name: 'Move pump',
        url: 'https://movepump.com',
        icon: <PanelsTopLeft size={20} />,
        description: 'Sui、Aptos上的Pump平台'
      },
       { 
        name: 'Sun pump',
        url: 'https://sunpump.meme',
        icon: <PanelsTopLeft size={20} />,
        description: 'TRX上的Pump发射平台'
      },
      { 
        name: 'DEX Screener',
        url: 'https://dexscreener.com',
        icon: <PanelsTopLeft size={20} />,
        description: 'DEX 数据分析工具'
      },
      { 
        name: 'Avedex',
        url: 'https://avedex.cc',
        icon: <PanelsTopLeft size={20} />,
        description: 'Avalanche 上的DEX'
      },
      { 
        name: 'Dextools',
        url: 'https://www.dextools.io/app/',
        icon: <PanelsTopLeft size={20} />,
        description: 'DEX 数据分析工具'
      },
  
    ]
  }, 
   {
    id: 'Depin',
    title: 'DePIN',
    icon: <Hammer size={24} />,
    links: [
      { 
        name: 'Gradient',
        url: 'https://app.gradient.network/signup?code=IGZOBB',
        icon: <Music2 size={20} />,
        description: 'Solana 上的边缘计算的开放层'
      },
      { 
        name: 'Dawn',
        url: 'https://chromewebstore.google.com/detail/dawn-validator-chrome-ext/fpdkjdnhkakefebpekbdhillbhonfjjp?authuser=0&hl=en',
        icon: <Film size={20} />,
        description: '提供互联网服务的去中心化无线网络'
      },
      { 
        name: 'NodePay',
        url: 'https://app.nodepay.ai/register?ref=5HiDyu509yMCg14',
        icon: <Youtube size={20} />,
        description: '人工智能训练提供去中心化带宽的网络基础设施'
      },{ 
        name: 'BlockMesh',
        url: 'https://app.blockmesh.xyz/register?invite_code=ffd9a0fe-d223-4a27-b41c-cd05f617dfc4',
        icon: <Music2 size={20} />,
        description: 'Depin带宽挖矿，Solana黑客松DePIN赛道第一名'
      },
      { 
        name: 'Nexus',
        url: 'https://beta.nexus.xyz/',
        icon: <Film size={20} />,
        description: '大规模并行化的证明挖矿网络'
      },
    ]
  },
  {
    id: 'investment',
    title: '融资',
    icon: <Banknote size={24} />,
    links: [
      { 
        name: 'Rootdata',
        url: 'https://www.rootdata.com',
        icon: <Database size={20} />,
        description: '融资查询'
      },
      { 
        name: 'Chainbroker',
        url: 'https://chainbroker.io/',
        icon: <LineChart size={20} />,
        description: '融资查询'
      },
      { 
        name: 'Coinlist',
        url: 'https://coinlist.co/',
        icon: <Coins size={20} />,
        description: 'Launchpad 平台'
      },
      { 
        name: 'Coinowl',
        url: 'https://coinowl.io/homeScreen',
        icon: <Search size={20} />,
        description: 'IDO，IEO信息'
      },
      { 
        name: 'Crunchbase',
        url: 'https://www.crunchbase.com',
        icon: <Database size={20} />,
        description: '融资查询'
      },
      { 
        name: 'Crypto-Fundraising',
        url: 'https://crypto-fundraising.info/deal-flow/',
        icon: <DollarSign size={20} />,
        description: '融资查询'
      },
      { 
        name: 'Cryptorank',
        url: 'https://cryptorank.io',
        icon: <BarChart2 size={20} />,
        description: '融资查询，IDO，IEO信息'
      },
      { 
        name: 'Cypherhunter',
        url: 'http://cypherhunter.com/en',
        icon: <Search size={20} />,
        description: 'Launchpad平台'
      },
      { 
        name: 'Daomaker',
        url: 'https://daomaker.com/',
        icon: <Building size={20} />,
        description: '融资查询'
      },
      { 
        name: 'Dovemetrics',
        url: 'https://www.dovemetrics.com',
        icon: <TrendingUp size={20} />,
        description: '融资查询'
      },
      { 
        name: 'Icoanalytics',
        url: 'https://icoanalytics.org/',
        icon: <PieChart size={20} />,
        description: 'ICO日历'
      },
      { 
        name: 'Icodrops',
        url: 'https://icodrops.com/',
        icon: <Activity size={20} />,
        description: 'IDO、IEO信息'
      },
      
      { 
        name: 'Rugdoc',
        url: 'https://rugdoc.io/',
        icon: <Shield size={20} />,
        description: 'IDO、IEO信息'
      },
      { 
        name: 'Messari',
        url: 'https://messari.io/fundraising-data',
        icon: <BarChart size={20} />,
        description: '融资查询'
      }
    ]
  }, 
  {
    id: 'data',
    title: '综合数据',
    icon: <FileText size={24} />,
    links: [
      { 
        name: 'Arkham Intelligence',
        url: 'https://www.arkhamintelligence.com/',
        icon: <Image size={20} />,
        description: '链上地址分析'
      },
      { 
        name: '巨鲸排行榜',
        url: 'https://bitinfocharts.com/',
        icon: <Instagram size={20} />,
        description: '巨鲸地址排行榜 分析'
      },
      { 
        name: 'CoinMarketCap',
        url: 'https://coinmarketcap.com/',
        icon: <Aperture size={20} />,
        description: '行情综合数据'
      },{ 
        name: '交易所数据分析',
        url: 'https://cryptoquant.com/asset/btc/summary',
        icon: <Image size={20} />,
        description: '交易所数据分析'
      },
      { 
        name: 'Dune',
        url: 'https://dune.com/discover/content/trending',
        icon: <Instagram size={20} />,
        description: '综合数据分析'
      }
    ]
  },
];