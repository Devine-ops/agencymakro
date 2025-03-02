import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company, image }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <svg className="h-8 w-8 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-6">{quote}</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="h-12 w-12 rounded-full mr-4"
        />
        <div>
          <div className="font-medium text-gray-800">{author}</div>
          <div className="text-gray-500 text-sm">{company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;