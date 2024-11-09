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
  }, []);

  return (
    <div className="pt-16 flex">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isOpen={isSidebarOpen}
        setIsOpen={setSidebarOpen}
        isDark={isDark}
      />

      <main className={`flex-1 p-6 transition-all duration-200 ${
        isDeviceMobile ? '' : (isSidebarOpen ? 'ml-64' : 'ml-16')
      }`}>
        <MainContainer isDark={isDark} />
      </main>
    </div>
  );
};

export default MainContent; 