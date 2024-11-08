import React from 'react';
import { 
  Code, Palette, BookOpen, Music, Camera, 
  Github, FileCode, Book, 
  Figma, Paintbrush, PenTool,
  GraduationCap, School, Brain,
  Music2, Film, Youtube,
  Image, Instagram, Aperture
} from 'lucide-react';


export const categories = [
  {
    id: 'development',
    title: 'Development',
    icon: <Code size={24} />,
    links: [
      { 
        name: 'GitHub',
        url: 'https://github.com',
        icon: <Github size={20} />,
        description: ''
      },
      { 
        name: 'Stack Overflow',
        url: 'https://stackoverflow.com',
        icon: <FileCode size={20} />,
        description: ''
      },
      { 
        name: 'MDN Web Docs',
        url: 'https://developer.mozilla.org',
        icon: <Book size={20} />,
        description: ''
      },{ 
        name: 'GitHub',
        url: 'https://github.com',
        icon: <Github size={20} />,
        description: ''
      },
      { 
        name: 'Stack Overflow',
        url: 'https://stackoverflow.com',
        icon: <FileCode size={20} />,
        description: ''
      },
      { 
        name: 'MDN Web Docs',
        url: 'https://developer.mozilla.org',
        icon: <Book size={20} />,
        description: 'Web development documentation'
      },{ 
        name: 'GitHub',
        url: 'https://github.com',
        icon: <Github size={20} />,
        description: 'Development workflow & collaboration'
      },
      { 
        name: 'Stack Overflow',
        url: 'https://stackoverflow.com',
        icon: <FileCode size={20} />,
        description: 'Developer Q&A community'
      },
      { 
        name: 'MDN Web Docs',
        url: 'https://developer.mozilla.org',
        icon: <Book size={20} />,
        description: 'Web development documentation'
      },
    ]
  },
  {
    id: 'design',
    title: 'Design',
    icon: <Palette size={24} />,
    links: [
      { 
        name: 'Figma',
        url: 'https://figma.com',
        icon: <Figma size={20} />,
        description: 'Collaborative design tool'
      },
      { 
        name: 'Dribbble',
        url: 'https://dribbble.com',
        icon: <Paintbrush size={20} />,
        description: 'Design inspiration & showcase'
      },
      { 
        name: 'Behance',
        url: 'https://behance.net',
        icon: <PenTool size={20} />,
        description: 'Design portfolio platform'
      }, { 
        name: 'Figma',
        url: 'https://figma.com',
        icon: <Figma size={20} />,
        description: 'Collaborative design tool'
      },
      { 
        name: 'Dribbble',
        url: 'https://dribbble.com',
        icon: <Paintbrush size={20} />,
        description: 'Design inspiration & showcase'
      },
      { 
        name: 'Behance',
        url: 'https://behance.net',
        icon: <PenTool size={20} />,
        description: 'Design portfolio platform'
      },
    ]
  },
  {
    id: 'learning',
    title: 'Learning',
    icon: <BookOpen size={24} />,
    links: [
      { 
        name: 'Coursera',
        url: 'https://coursera.org',
        icon: <GraduationCap size={20} />,
        description: 'Online courses & certifications'
      },
      { 
        name: 'edX',
        url: 'https://edx.org',
        icon: <School size={20} />,
        description: 'University-level online learning'
      },
      { 
        name: 'Khan Academy',
        url: 'https://khanacademy.org',
        icon: <Brain size={20} />,
        description: 'Free educational resources'
      },{ 
        name: 'Coursera',
        url: 'https://coursera.org',
        icon: <GraduationCap size={20} />,
        description: 'Online courses & certifications'
      },
      { 
        name: 'edX',
        url: 'https://edx.org',
        icon: <School size={20} />,
        description: 'University-level online learning'
      },
      { 
        name: 'Khan Academy',
        url: 'https://khanacademy.org',
        icon: <Brain size={20} />,
        description: 'Free educational resources'
      },
    ]
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    icon: <Music size={24} />,
    links: [
      { 
        name: 'Spotify',
        url: 'https://spotify.com',
        icon: <Music2 size={20} />,
        description: 'Music streaming platform'
      },
      { 
        name: 'Netflix',
        url: 'https://netflix.com',
        icon: <Film size={20} />,
        description: 'Movie & TV streaming service'
      },
      { 
        name: 'YouTube',
        url: 'https://youtube.com',
        icon: <Youtube size={20} />,
        description: 'Video sharing platform'
      },{ 
        name: 'Spotify',
        url: 'https://spotify.com',
        icon: <Music2 size={20} />,
        description: 'Music streaming platform'
      },
      { 
        name: 'Netflix',
        url: 'https://netflix.com',
        icon: <Film size={20} />,
        description: 'Movie & TV streaming service'
      },
      { 
        name: 'YouTube',
        url: 'https://youtube.com',
        icon: <Youtube size={20} />,
        description: 'Video sharing platform'
      },{ 
        name: 'Spotify',
        url: 'https://spotify.com',
        icon: <Music2 size={20} />,
        description: 'Music streaming platform'
      },
      { 
        name: 'Netflix',
        url: 'https://netflix.com',
        icon: <Film size={20} />,
        description: 'Movie & TV streaming service'
      },
      { 
        name: 'YouTube',
        url: 'https://youtube.com',
        icon: <Youtube size={20} />,
        description: 'Video sharing platform'
      },
    ]
  },
  {
    id: 'photography',
    title: 'Photography',
    icon: <Camera size={24} />,
    links: [
      { 
        name: 'Unsplash',
        url: 'https://unsplash.com',
        icon: <Image size={20} />,
        description: 'Free high-quality photos'
      },
      { 
        name: 'Instagram',
        url: 'https://instagram.com',
        icon: <Instagram size={20} />,
        description: 'Photo sharing social network'
      },
      { 
        name: '500px',
        url: 'https://500px.com',
        icon: <Aperture size={20} />,
        description: 'Photography community'
      },{ 
        name: 'Unsplash',
        url: 'https://unsplash.com',
        icon: <Image size={20} />,
        description: 'Free high-quality photos'
      },
      { 
        name: 'Instagram',
        url: 'https://instagram.com',
        icon: <Instagram size={20} />,
        description: 'Photo sharing social network'
      },
      { 
        name: '500px',
        url: 'https://500px.com',
        icon: <Aperture size={20} />,
        description: 'Photography community'
      },{ 
        name: 'Unsplash',
        url: 'https://unsplash.com',
        icon: <Image size={20} />,
        description: 'Free high-quality photos'
      },
      { 
        name: 'Instagram',
        url: 'https://instagram.com',
        icon: <Instagram size={20} />,
        description: 'Photo sharing social network'
      },
      { 
        name: '500px',
        url: 'https://500px.com',
        icon: <Aperture size={20} />,
        description: 'Photography community'
      },
    ]
  },
];