import { categories } from '../data/dataLink';
import ContentSection from './ContentSection';

const MainContainer = ({ isDark }) => {
  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <ContentSection
          key={category.id} 
          category={category} 
          isDark={isDark} 
        />
      ))}
    </div>
  );
};

export default MainContainer; 