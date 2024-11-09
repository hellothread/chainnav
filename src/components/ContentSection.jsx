import React from 'react';
import { ExternalLink } from 'lucide-react';

const getFaviconUrl = (url) => {
  try {
    const domain = new URL(url).hostname;
    // 使用 Google Favicon API
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
    // 或者直接获取网站 favicon
    // return `https://${domain}/favicon.ico`;
  } catch (error) {
    return null;
  }
};

const ContentSection = ({ category, isDark }) => {

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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {category.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-between px-4 py-2.5  rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <img 
                src={getFaviconUrl(link.url)}
                alt={`${link.name} icon`}
                className="w-6 h-6"
                onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"></svg>';
                    }}
                /> 
              <div>
                <h3 className="font-medium">{link.name}</h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{link.description}</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContentSection;