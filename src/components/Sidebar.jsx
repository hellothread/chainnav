import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = ({ 
  categories, 
  activeSection, 
  setActiveSection, 
  isOpen,
  setIsOpen,
  isDark
}) => {
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] transition-all duration-300 ${
      isDark 
        ? 'bg-gray-800/50 backdrop-blur-sm' 
        : 'bg-white/50 backdrop-blur-sm border-r border-gray-200'
    } ${isOpen ? 'w-64' : 'w-16'}`}>
      <nav className="pl-2 relative h-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute -right-3 bottom-10 p-1.5 rounded-full transition-colors duration-200 ${
            isDark 
              ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
              : 'bg-white hover:bg-gray-100 text-gray-600 shadow-md'
          }`}
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        <div className="h-[calc(100vh-5rem)] overflow-y-auto"
             style={{
               scrollbarWidth: 'thin',
               scrollbarColor: isDark 
                 ? '#4B5563 rgba(31, 41, 55, 0.5)' 
                 : '#E5E7EB #FFFFFF',
               '--scrollbar-track': isDark ? 'rgba(31, 41, 55, 0.5)' : '#FFFFFF',
               '--scrollbar-thumb': isDark ? '#4B5563' : '#E5E7EB'
             }}>
          <ul className="space-y-1 pb-16">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => scrollToSection(category.id)}
                  className={`w-full rounded-lg transition-all duration-200 ${
                    isOpen 
                      ? 'px-4 py-2.5 text-left flex items-center gap-3' 
                      : 'p-2.5 flex justify-center items-center'
                  } ${
                    activeSection === category.id
                      ? isDark
                        ? 'text-blue-400'
                        : 'text-blue-600'
                      : isDark
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                  title={!isOpen ? category.title : undefined}
                >
                  <div className={`rounded-lg transition-colors duration-200 ${
                    isOpen ? 'p-2' : 'p-1.5'
                  } ${
                    activeSection === category.id
                      ? isDark
                        ? 'bg-blue-500/20'
                        : 'bg-blue-50'
                      : isDark
                        ? 'bg-gray-700/50'
                        : 'bg-gray-100'
                  }`}>
                    {React.cloneElement(category.icon, {
                      size: isOpen ? 20 : 18
                    })}
                  </div>
                  {isOpen && <span>{category.title}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;