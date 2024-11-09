import { Compass, Twitter } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = ({ isDark, setIsDark }) => {
  return (
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
  );
};

export default Header; 