import Sidebar from './Sidebar';
import ContentSection from './ContentSection';

const MainContent = ({ 
  categories, 
  activeSection, 
  setActiveSection, 
  isSidebarOpen, 
  setSidebarOpen, 
  isDark 
}) => {
  return (
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
  );
};

export default MainContent; 