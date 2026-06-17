export interface Tool {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  url: string;
}

export const tools: Tool[] = [
  // AI Chat
  {
    id: '1',
    name: 'ChatGPT',
    icon: '/logos/ChatGPT_logo.svg',
    category: 'AI聊天',
    description: 'OpenAI 出品的 AI 对话助手',
    url: 'https://chat.openai.com',
  },
  {
    id: '2',
    name: 'Claude',
    icon: '/logos/Claude_logo.ico',
    category: 'AI聊天',
    description: 'Anthropic 出品的 AI 助手，更擅长学术和分析',
    url: 'https://claude.ai',
  },
  {
    id: '3',
    name: '文心一言',
    icon: '/logos/tongyi_logo.svg',
    category: 'AI聊天',
    description: '百度出品的AI助手，中文体验好，响应快',
    url: 'https://yiyan.baidu.com',
  },
  {
    id: '4',
    name: 'Kimi',
    icon: '/placeholder.svg',
    category: 'AI聊天',
    description: '稳定流畅的AI助手，中文对话自然',
    url: 'https://kimi.moonshot.cn',
  },

  // AI Writing
  {
    id: '5',
    name: 'Grammarly',
    icon: '/placeholder.svg',
    category: 'AI写作',
    description: '专业的语法检查和写作优化工具',
    url: 'https://www.grammarly.com',
  },
  {
    id: '6',
    name: '秘塔写作猫',
    icon: '/placeholder.svg',
    category: 'AI写作',
    description: '专业学术写作助手，支持多种论文格式规范',
    url: 'https://xiezuocat.com/',
  },

  // AI Search
  {
    id: '7',
    name: 'Perplexity',
    icon: '/placeholder.svg',
    category: 'AI搜索',
    description: '实时AI搜索引擎，引用准确度高',
    url: 'https://www.perplexity.ai',
  },
  {
    id: '8',
    name: '秘塔搜索',
    icon: '/placeholder.svg',
    category: 'AI搜索',
    description: '专业的学术搜索引擎，检索能力强',
    url: 'https://metaso.cn',
  },

  // AI Presentation
  {
    id: '9',
    name: 'Gamma',
    icon: '/placeholder.svg',
    category: 'AI演示',
    description: '一键生成精美PPT，支持多语言',
    url: 'https://gamma.app',
  },
  {
    id: '10',
    name: 'AIPPT',
    icon: '/placeholder.svg',
    category: 'AI演示',
    description: '模板丰富的PPT生成工具，中文友好',
    url: 'https://aippt.wps.cn',
  },

  // AI Art
  {
    id: '11',
    name: 'Midjourney',
    icon: '/placeholder.svg',
    category: 'AI艺术',
    description: '专业的AI绘画工具，画质精美',
    url: 'https://www.midjourney.com',
  },
  {
    id: '12',
    name: '通义万相',
    icon: '/placeholder.svg',
    category: 'AI艺术',
    description: '阿里出品的AI绘画工具，功能全面，适合设计',
    url: 'https://tongyi.aliyun.com/wanxiang',
  },

  // AI Video
  {
    id: '13',
    name: 'Runway',
    icon: '/placeholder.svg',
    category: 'AI视频',
    description: '专业级AI视频编辑工具，特效丰富',
    url: 'https://runway.ml',
  },
  {
    id: '14',
    name: '智影',
    icon: '/placeholder.svg',
    category: 'AI视频',
    description: '专业的数字人视频制作工具，场景丰富',
    url: 'https://zenvideo.qq.com',
  },

  // AI Audio
  {
    id: '15',
    name: 'ElevenLabs',
    icon: '/placeholder.svg',
    category: 'AI音频',
    description: '专业的AI配音工具，音色自然',
    url: 'https://elevenlabs.io',
  },
  {
    id: '16',
    name: '通义听悟',
    icon: '/placeholder.svg',
    category: 'AI音频',
    description: '阿里出品的语音合成工具，支持多语言',
    url: 'https://tingwu.aliyun.com',
  },

  // AI Code
  {
    id: '17',
    name: 'GitHub Copilot',
    icon: '/logos/copilot.png',
    category: 'AI编程',
    description: '强大的AI代码辅助工具，支持多种编程语言',
    url: 'https://github.com/features/copilot',
  },
  {
    id: '18',
    name: 'Cursor',
    icon: '/logos/cursor_logo.jpeg',
    category: 'AI编程',
    description: '智能的AI编程助手，提高编码效率',
    url: 'https://cursor.sh',
  },
  {
    id: '19',
    name: '通义灵码',
    icon: '/placeholder.svg',
    category: 'AI编程',
    description: '阿里出品的AI编程助手，适合国内开发场景',
    url: 'https://tongyi.aliyun.com/lingma',
  },

  // AI Note
  {
    id: '20',
    name: 'Notion',
    icon: '/placeholder.svg',
    category: 'AI笔记',
    description: 'AI驱动的全能笔记工具，团队协作首选',
    url: 'https://www.notion.so',
  },
  {
    id: '21',
    name: '飞书文档',
    icon: '/placeholder.svg',
    category: 'AI笔记',
    description: '字节跳动出品的企业级协作平台，AI助手加持',
    url: 'https://www.feishu.cn',
  },
  {
    id: '24',
    name: 'Remio',
    icon: '/placeholder.svg',
    category: 'AI笔记',
    description: '本地优先的 AI 记忆与知识库，可索引文件、网页、录音、邮件和笔记',
    url: 'https://remio.ai/',
  },

  // AI Design
  {
    id: '22',
    name: 'Canva',
    icon: '/placeholder.svg',
    category: 'AI设计',
    description: '智能设计平台，模板丰富，操作简单',
    url: 'https://www.canva.com',
  },
  {
    id: '23',
    name: '稿定设计',
    icon: '/placeholder.svg',
    category: 'AI设计',
    description: '一站式AI设计工具，智能创作功能强大',
    url: 'https://www.gaoding.com',
  },
];

export const categories = [
  '全部',
  'AI聊天',
  'AI写作',
  'AI搜索',
  'AI演示',
  'AI艺术',
  'AI视频',
  'AI音频',
  'AI编程',
  'AI笔记',
  'AI设计',
];
