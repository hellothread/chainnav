import React from 'react';
import { ArrowLeftRight, Rocket, Banknote, FileText, Hammer} from 'lucide-react';

export const categories = [
  {
    id: 'CEX',
    title: 'CEX',
    icon: <ArrowLeftRight size={24} />,
    links: [
      { 
        name: 'Binance',
        url: 'https://www.binance.com/activity/referral-entry/CPA/together-v4?hl=zh-CN&ref=CPA_000FKNTBB4',
        description: '全球领先的加密货币交易所'
      },
      { 
        name: 'OKX',
        url: 'https://okx.com/join/4408262',
        description: '专业的数字资产交易平台'
      },
      { 
        name: 'Bitget',
        url: 'https://share.glassgs.com/u/FUPF8NB3',
        description: '创新的加密货币交易平台'
      },
      { 
        name: 'Gateio',
        url: 'https://www.gateio24.com/ref/BlJDBlo?ref_type=102',
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
        description: '支持地址分析，查看MEME的聪明钱等'
      },
      { 
        name: 'dexx',
        url: 'https://dexx.ai/refer?inviteCode=NYU7VB',
        description: '支持地址分析，提供通用的 Smart Wallet 列表'
      },
       { 
        name: 'pump',
        url: 'https://pump.fun/board',
        description: 'Sol链meme币发币平台'
      },
      { 
        name: 'pepeboost',
        url: 'https://linktr.ee/pepeboost',
        description: '最受欢迎的TG交易机器人之一'
      },
      { 
        name: 'Move pump',
        url: 'https://movepump.com',
        description: 'Sui、Aptos上的Pump平台'
      },
       { 
        name: 'Sun pump',
        url: 'https://sunpump.meme',
        description: 'TRX上的Pump发射平台'
      },
      { 
        name: 'DEX Screener',
        url: 'https://dexscreener.com',
        description: 'DEX 数据分析工具'
      },
      { 
        name: 'Avedex',
        url: 'https://avedex.cc',
        description: 'Avalanche 上的DEX'
      },
      { 
        name: 'Dextools',
        url: 'https://www.dextools.io/app/',
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
        description: 'Solana 上的边缘计算的开放层'
      },
      { 
        name: 'Dawn',
        url: 'https://chromewebstore.google.com/detail/dawn-validator-chrome-ext/fpdkjdnhkakefebpekbdhillbhonfjjp?authuser=0&hl=en',
        description: '提供互联网服务的去中心化无线网络'
      },
      { 
        name: 'NodePay',
        url: 'https://app.nodepay.ai/register?ref=5HiDyu509yMCg14',
        description: '人工智能训练提供去中心化带宽的网络基础设施'
      },{ 
        name: 'BlockMesh',
        url: 'https://app.blockmesh.xyz/register?invite_code=ffd9a0fe-d223-4a27-b41c-cd05f617dfc4',
        description: 'Depin带宽挖矿，Solana黑客松DePIN赛道第一名'
      },
      { 
        name: 'Nexus',
        url: 'https://beta.nexus.xyz/',
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
        description: '融资查询'
      },
      { 
        name: 'Chainbroker',
        url: 'https://chainbroker.io/',
        description: '融资查询'
      },
      { 
        name: 'Crunchbase',
        url: 'https://www.crunchbase.com',
        description: '融资查询'
      },
      { 
        name: 'Crypto-Fundraising',
        url: 'https://crypto-fundraising.info/deal-flow/',
        description: '融资查询'
      },
      { 
        name: 'Cryptorank',
        url: 'https://cryptorank.io',
        description: '融资查询，IDO，IEO信息'
      },
      { 
        name: 'Cypherhunter',
        url: 'http://cypherhunter.com/en',
        description: 'Launchpad平台'
      },
      { 
        name: 'Daomaker',
        url: 'https://daomaker.com/',
        description: '融资查询'
      },
      { 
        name: 'Dovemetrics',
        url: 'https://www.dovemetrics.com',
        description: '融资查询'
      },
      { 
        name: 'Icoanalytics',
        url: 'https://icoanalytics.org/',
        description: 'ICO日历'
      },
      { 
        name: 'Icodrops',
        url: 'https://icodrops.com/',
        description: 'IDO、IEO信息'
      },
      
      { 
        name: 'Rugdoc',
        url: 'https://rugdoc.io/',
        description: 'IDO、IEO信息'
      },
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
        description: '链上地址分析'
      },
      { 
        name: '巨鲸排行榜',
        url: 'https://bitinfocharts.com/',
        description: '巨鲸地址排行榜 分析'
      },
      { 
        name: 'CoinMarketCap',
        url: 'https://coinmarketcap.com/',
        description: '行情综合数据'
      },{ 
        name: '交易所数据分析',
        url: 'https://cryptoquant.com/asset/btc/summary',
        description: '交易所数据分析'
      },
      { 
        name: 'Dune',
        url: 'https://dune.com/discover/content/trending',
        description: '综合数据分析'
      }
    ]
  },
];