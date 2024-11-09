import { Compass, Twitter, Search, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useState, useMemo } from 'react';
import { categories } from '../data/dataLink';

const Header = ({ isDark, setIsDark }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 搜索逻辑
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const results = [];
    categories.forEach(category => {
      const matchedLinks = category.link.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (matchedLinks.length > 0) {
        results.push({
          category: category.title,
          links: matchedLinks
        });
      }
    });

    return results;
  }, [searchQuery]);

  // 搜索结果组件
  const SearchResults = ({ isMobile = false }) => (
    <div 
      className={`${
        isMobile 
          ? '' 
          : 'absolute top-full left-0 right-0 mt-2'
      } py-2 rounded-lg shadow-lg ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } ${!isMobile ? 'max-h-[60vh] overflow-y-auto custom-scrollbar' : ''}`}
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: isDark 
          ? '#4B5563 rgba(31, 41, 55, 0.5)' 
          : '#E5E7EB #FFFFFF',
        '--scrollbar-track': isDark ? 'rgba(31, 41, 55, 0.5)' : '#FFFFFF',
        '--scrollbar-thumb': isDark ? '#4B5563' : '#E5E7EB'
      }}
    >
      {searchQuery.trim() ? (
        searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <div key={index} className="px-4 py-2">
              <div className={`text-xs font-medium mb-2 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {result.category}
              </div>
              {result.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-2 py-1.5 rounded hover:bg-opacity-50 ${
                    isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => isMobile && setIsMobileSearchVisible(false)}
                >
                  <div className="font-medium">{link.name}</div>
                  <div className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {link.description}
                  </div>
                </a>
              ))}
            </div>
          ))
        ) : (
          <div className={`px-4 py-2 text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            未找到相关结果
          </div>
        )
      ) : (
        <div className={`px-4 py-2 text-sm ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          输入关键词开始搜索...
        </div>
      )}
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 transition-colors duration-200 ${
      isDark ? 'bg-gray-900/90' : 'bg-white/90'
    } backdrop-blur-sm`}>
      <div className="mx-auto px-7 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Compass className="w-8 h-8 text-blue-500 mr-3" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              ChainNav
            </h1>
          </div>

          {/* 桌面端搜索框 */}
          <div className="hidden md:flex flex-1 justify-center max-w-xl">
            <div className="relative w-full">
              <div className={`flex items-center ${
                isDark ? 'bg-gray-800' : 'bg-gray-100'
              } rounded-lg px-3 py-1.5 w-full`}>
                <Search size={18} className={`${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                } flex-shrink-0`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索..."
                  className={`ml-2 w-full bg-transparent outline-none ${
                    isDark ? 'text-white placeholder:text-gray-400' : 'text-gray-900 placeholder:text-gray-500'
                  }`}
                  onFocus={() => setIsSearchOpen(true)}
                  onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                />
              </div>
              {isSearchOpen && <SearchResults />}
            </div>
          </div>

          {/* 右侧按钮 */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* 移动端搜索按钮 */}
            <button
              onClick={() => setIsMobileSearchVisible(true)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
            >
              <Search size={20} />
            </button>

            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
            <a
              href="https://x.com/mthread_"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* 移动端搜索框 */}
      {isMobileSearchVisible && (
        <div className={`fixed inset-0 z-50 ${
          isDark ? 'bg-gray-900' : 'bg-white'
        }`}>
          <div className="flex flex-col h-screen">
            {/* 顶部搜索栏 */}
            <div className={`flex-shrink-0 p-4 border-b ${
              isDark ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`flex-1 flex items-center ${
                  isDark ? 'bg-gray-800' : 'bg-gray-100'
                } rounded-lg px-3 py-1.5`}>
                  <Search size={18} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜索..."
                    autoFocus
                    className={`ml-2 w-full bg-transparent outline-none ${
                      isDark ? 'text-white placeholder:text-gray-400' : 'text-gray-900 placeholder:text-gray-500'
                    }`}
                  />
                </div>
                <button
                  onClick={() => {
                    setIsMobileSearchVisible(false);
                    setSearchQuery('');
                  }}
                  className={`p-2 rounded-lg ${
                    isDark ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* 搜索结果区域 */}
            <div className="flex-1 overflow-y-auto">
              {searchResults.length > 0 ? (
                <div className="max-h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar">
                  <SearchResults isMobile={true} />
                </div>
              ) : searchQuery.trim() ? (
                <div className={`p-4 text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  未找到相关结果
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 