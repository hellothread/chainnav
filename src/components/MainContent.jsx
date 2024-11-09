import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

const MainContent = ({ 
  activeSection, 
  setActiveSection, 
  isSidebarOpen, 
  setSidebarOpen, 
  isDark 
}) => {
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const [isDeviceMobile, setIsDeviceMobile] = useState(false);

  useEffect(() => {
    setIsDeviceMobile(isMobile());
    if (isMobile()) {
      setSidebarOpen(false);
    }
  }, []);

  return (
    <div className="relative min-h-screen pt-16">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isOpen={isSidebarOpen}
        setIsOpen={setSidebarOpen}
        isDark={isDark}
      />

      <main 
        className={`
          min-h-[calc(100vh-4rem)] 
          transition-all 
          duration-300 
          ${isDeviceMobile 
            ? 'px-4 py-6 ml-16'  
            : `${isSidebarOpen ? 'ml-64' : 'ml-16'} p-6`
          }
        `}
      >
        <MainContainer isDark={isDark} />
      </main>

      {isDeviceMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default MainContent; 