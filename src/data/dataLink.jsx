import React from 'react';
import { Building2, Rocket, Hammer, Banknote, FileText, Wallet, Gift, Newspaper, ArrowLeftRight, Link } from 'lucide-react';

//撸毛必备
const airdropTools = [
  {
    name:"Ads指纹浏览器",
    url:"https://share.adspower.net/z75oPhFmQfkdXtT",
    description:"Ads指纹浏览器"
  },
  {
    name:"HubStudio",
    url:"http://suo.im/a28Vk",
    description:"HUB指纹浏览器"
  },
  {
    name:"ip代理",
    url:"https://www.webshare.io/?referral_code=1vdc4cnb52dl",
    description:"ip代理,最便宜的ip代理"
  },
  { 
    name: '5sim',
    url: 'https://5sim.net/zh',
    description: '接码平台'
  },
  { 
    name: 'Earni',
    url: 'https://earni.fi/login',
    description: '空投查询'
  }
]

//cex link
export const cex = [
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
  },
  {
    name:"火币",
    url:"https://www.htx.com/zh-cn/",
    description:"火币交易所"
  }
]

// DEX 去中心化交易所
export const dexLinks = [
  {
    name: 'Uniswap',
    url: 'https://app.uniswap.org/#/swap',
    description: 'ETH 去中心化交易所'
  },
  {
    name: 'Odos',
    url: 'https://app.odos.xyz/',
    description: '去中心化交易所'
  },
  {
    name: 'PancakeSwap',
    url: 'https://pancakeswap.finance',
    description: 'BSC 去中心化交易所'
  },
  {
    name: 'Jupiter',
    url: 'https://jup.ag/swap',
    description: 'SOL 去中心化交易所'
  }
];
//跨链
export const crossChain = [
  {
    name: 'wormhole',
    url: 'https://wormhole.com',
    description: '跨链桥'
  },
  {
    name: 'bungee',
    url: 'https://www.bungee.exchange/?intro=true',
    description: 'bungee跨链'
  },
  {
    name: 'stargate',
    url: 'https://stargate.finance/bridge',
    description: 'stargate跨链'
  },
  {
    name: 'orbiter',
    url: 'https://www.orbiter.finance/',
    description: 'orbiter跨链'
  },
  {
    name: 'CoreDAO',
    url: 'https://bridge.coredao.org/bridge',
    description: 'CoreDAO跨链'
  },
  {
    name: 'jumper',
    url: 'https://jumper.exchange/zh/',
    description: 'jumper跨链'
  },
  {
    name: 'squidrouter',
    url: 'https://app.squidrouter.com/',
    description: 'squidrouter跨链'
  },
  {
    name: 'relay',
    url: 'https://relay.link/bridge',
    description: 'relay跨链'
  }
]

//memecoin link
export const memecoin = [
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
    name: 'pepe boost',
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
    name: 'Ave Dex',
    url: 'https://avedex.cc',
    description: '看k线'
  },
  { 
    name: 'DEXTools',
    url: 'https://www.dextools.io/app/',
    description: 'DEX 数据分析工具'
  },
  { 
    name: 'Tokensniffer',
    url: 'https://tokensniffer.com',
    description: '合约安全性检测'
  },
  { 
    name: 'Honeypot',
    url: 'https://honeypot.is',
    description: '貔貅检测'
  },
  { 
    name: 'Revoke.cash',
    url: 'http://revoke.cash',
    description: '取消授权'
  },
]
//depin link
export const depin = [
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
//investment link
export const investment = [
  { 
    name: 'RootData',
    url: 'https://www.rootdata.com',
    description: '融资查询'
  },
  { 
    name: 'Chain Broker',
    url: 'https://chainbroker.io/',
    description: '融资查询'
  },
  { 
    name: 'crunchbase',
    url: 'https://www.crunchbase.com',
    description: '融资查询'
  },
  { 
    name: 'Crypto-Fundraising',
    url: 'https://crypto-fundraising.info/deal-flow/',
    description: '融资查询'
  },
  { 
    name: 'Crypto Rank',
    url: 'https://cryptorank.io',
    description: '融资查询，IDO，IEO信息'
  },
  { 
    name: 'Cypher Hunter',
    url: 'http://cypherhunter.com/en',
    description: 'Launchpad平台'
  },
  { 
    name: 'Daomaker',
    url: 'https://daomaker.com/',
    description: '融资查询'
  },
  { 
    name: 'Dove Metrics',
    url: 'https://www.dovemetrics.com',
    description: '融资查询'
  },
  { 
    name: 'ICO Analytics',
    url: 'https://icoanalytics.org/',
    description: 'ICO日历'
  },
  { 
    name: 'ICO Drops',
    url: 'https://icodrops.com/',
    description: 'IDO、IEO信息'
  },
  
  { 
    name: 'RugDoc',
    url: 'https://rugdoc.io/',
    description: 'IDO、IEO信息'
  },
]
//data link
export const analytics = [
  { 
    name: 'Arkham Intelligence',
    url: 'https://www.arkhamintelligence.com/',
    description: '链上地址分析'
  },
  {
    name:"Alternative",
    url:"https://alternative.me/crypto/fear-and-greed-index/",
    description:"加密货币市场情绪指数,贪婪恐惧指数"
  },
  { 
    name: 'BitinfoCharts',
    url: 'https://bitinfocharts.com/',
    description: 'btc、eth、doge等价格、挖矿数据、市值和区块信息等核心指标。'
  },
  { 
    name: 'CoinMarketCap',
    url: 'https://coinmarketcap.com/',
    description: '免费提供比特币和众多代币的实时及历史数据。'
  },{ 
    name: 'CryptoQuant',
    url: 'https://cryptoquant.com/asset/btc/summary',
    description: '比特币在交易所钱包之间的资金流向分析，用于评估投资者行为。'
  },
  { 
    name: 'Dune',
    url: 'https://dune.com/discover/content/trending',
    description: '综合数据分析'
  }
]
//新闻
const news = [
  {
    name:"金十",
    url:"https://www.jin10.com/",
    description:"金十,财经新闻"
  },
  {
    name:"Foresight",
    url:"https://foresightnews.pro/",
    description:"加密货币新闻资讯"
  },
  {
    name:"律动",
    url:"https://www.theblockbeats.info/",
    description:"加密货币新闻资讯"
  }, 
  {
    name:"PANews",
    url:"https://www.panewslab.com/zh/index.html",
    description:"加密货币新闻资讯"
  },
  {
    name:"链捕手",
    url:"https://www.chaincatcher.com/",
    description:"加密货币新闻资讯"
  },
  {
    name:"Odaily",
    url:"https://www.odaily.news/",
    description:"加密货币新闻资讯"
  },
  {
    name:"CoinDesk",
    url:"https://www.coindesk.com/",
    description:"加密货币新闻资讯"
  },
  {
    name:"SmartLiquidity",
    url:"https://smartliquidity.info/",
    description:"加密货币新闻资讯"
  },
 
]


//钱包
export const wallet = [
  { 
    name: 'MetaMask',
    url: 'https://metamask.io/',
    description: '常用的小狐狸'
  },
  { 
    name: 'OKX的web3钱包',
    url: 'https://www.okx.com/cn/web3',
    description: 'OK的web3钱包,支持多链'
  },
   { 
    name: 'Phantom',
    url: 'https://phantom.app/',
    description: 'sol链钱包'
  },
  {
    name: 'Unisat',
    url: 'https://unisat.io/',
    description: 'Btc钱包'
  },{
    name: 'Xverse',
    url: 'https://xverse.app/',
    description: 'Btc钱包'
  },
  { 
    name: 'Keplr',
    url: 'https://www.keplr.app/',
    description: 'cosmos生态的钱包'
  },
 
];

// 分类
export const categories = [
  {
    id: 'airdropTools',
    title: '撸毛必备',
    icon: <Gift size={24} />,
    link: airdropTools
  },
 {
    id: 'wallet',
    title: '钱包',
    icon: <Wallet size={24} />,
    link: wallet
  },
  {
    id: 'cex',
    title: '交易所',
    icon: <Building2 size={24} />,
    link: cex
  },
  {
    id: 'memecoin',
    title: 'MemeCoin',
    icon: <Rocket size={24} />,
    link: memecoin
  }, 
  {
    id: 'dexLinks',
    title: 'Swap',
    icon: <ArrowLeftRight size={24} />,
    link: dexLinks
  },
  {
    id: 'crossChain',
    title: '跨链',
    icon: <Link size={24} />,
    link: crossChain
  },
  {
    id: 'depin',
    title: 'Depin',
    icon: <Hammer size={24} />,
    link: depin
  },

  {
    id: 'investment',
    title: '融资',
    icon: <Banknote size={24} />,
    link: investment
  },
  {
    id: 'analytics',
    title: '数据分析',
    icon: <FileText size={24} />,
    link: analytics
  },
  
  {
    id: 'news',
    title: '新闻资讯',
    icon: <Newspaper size={24} />,
    link: news
  },

]
