import React, { useState, useEffect } from 'react';
import { Compass, Heart, Github, Twitter } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ContentSection from './components/ContentSection';
import ThemeToggle from './components/ThemeToggle';
import { categories } from './data/categories';

function App() {
    const [activeSection, setActiveSection] = useState(categories[0].id);
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isDark, setIsDark] = useState(false);
  
    // 监听主题变化并设置 HTML 元素的 data-theme
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);
  
    return (
        <div 
            className={`min-h-screen transition-colors duration-200 ${
                isDark 
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
                    : 'bg-white text-gray-900'
            }`}
        >
            <header className={`fixed top-0 left-0 right-0 z-10 transition-colors duration-200 ${
                isDark ? 'bg-gray-900/90' : 'bg-white/90'
            } backdrop-blur-sm`}>
                <div className="mx-auto px-7 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Compass className="w-8 h-8 text-blue-500 mr-3" />
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                ChainNav
                            </h1>
                        </div>
  
                        <div className="flex items-center gap-4">
                            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
                            <div className="flex items-center gap-2">
                                {/* <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 rounded-lg transition-colors duration-200 ${
                                        isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                                    }`}
                                >
                                    <Github size={20} />
                                </a> */}
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
                </div>
            </header>
  
            <div className="pt-16 flex">
                <Sidebar 
                    categories={categories} 
                    activeSection={activeSection} 
                    setActiveSection={setActiveSection}
                    isOpen={isSidebarOpen}
                    setIsOpen={setSidebarOpen}
                    isDark={isDark}
                />
  
                <main className={`flex-1 p-6 transition-all duration-200 ${
                    isSidebarOpen ? 'ml-64' : 'ml-16'
                }`}>
                    <div className="space-y-12">
                        {categories.map((category) => (
                            <ContentSection key={category.id} category={category} isDark={isDark} />
                        ))}
                    </div>
                </main>
            </div>
  
            <footer className={`transition-all duration-200 ${
                isSidebarOpen ? 'ml-64' : 'ml-16'
            } px-4 py-6 text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <p>Made with <Heart className="inline-block w-4 h-4 text-red-400" /> by Thread</p>
            </footer>
        </div>
    );
}

export default App; 