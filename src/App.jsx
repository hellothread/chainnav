import { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("cex");
  
  // 检测是否为移动设备
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const [isSidebarOpen, setSidebarOpen] = useState(!isMobile());

  useEffect(() => {
    // 设置初始状态
    setSidebarOpen(!isMobile());

    // 监听窗口大小变化事件
    const handleResize = () => {
      setSidebarOpen(!isMobile());
    };

    window.addEventListener('resize', handleResize);

    // 清理事件监听器
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className={`min-h-screen transition-colors duration-200 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
          : 'bg-white text-gray-900'
      }`}
    >
      <Header isDark={isDark} setIsDark={setIsDark} />
      
      <MainContent 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isDark={isDark}
      />

      <Footer isSidebarOpen={isSidebarOpen} isDark={isDark} />
    </div>
  );
}

export default App; 