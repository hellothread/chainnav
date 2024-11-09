import React from 'react';
import { ExternalLink } from 'lucide-react';
import Bnb from 'cryptocurrency-icons/svg/color/bnb.svg';





const ContentSection = ({ category, isDark }) => {


  const IconRenderer = ({ icon, size = 20 }) => {
    return <img src={Bnb} width={size} height={size} alt={`${icon} icon`} />;
  };


  return (
    <section id={category.id} className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-lg ${
          isDark ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          {category.icon}
        </div>
        <h2 className="text-2xl font-bold">{category.title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-8 4xl:grid-cols-10 gap-4">
        {category.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
              isDark 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-white hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark 
                  ? 'bg-gray-700 group-hover:bg-gray-600' 
                  : 'bg-gray-100 group-hover:bg-gray-200'
              }`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              >
                {link.icon}
              </div>
              <div>
                <h3 className="font-medium">{link.name}</h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{link.description}</p>
              </div>
            </div>
            <ExternalLink className={`w-4 h-4 transition-colors duration-200 ${
              isDark 
                ? 'text-gray-400 group-hover:text-blue-400' 
                : 'text-gray-500 group-hover:text-blue-500'
            }`} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContentSection;