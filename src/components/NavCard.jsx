import React from 'react';
import { ExternalLink } from 'lucide-react';


const NavCard = ({ title, icon, links }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-gray-700 rounded-lg mr-3">
          {icon}
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-200"
            >
              <span>{link.name}</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavCard;