import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="relative">
      <img 
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
        alt="Equipe de marketing digital analisando resultados" 
        className="rounded-lg shadow-xl"
      />
      <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
        <div className="flex items-center">
          <div className="bg-green-500 h-3 w-3 rounded-full mr-2"></div>
          <span className="text-gray-800 font-medium">+320% ROI médio</span>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;