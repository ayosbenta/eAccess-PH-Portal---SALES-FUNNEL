import React from 'react';
import { XIcon } from './icons';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity duration-300" 
      onClick={onClose}
    >
      <div 
        className="bg-white p-1 rounded-lg shadow-2xl relative max-w-3xl w-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-transform duration-200 transform hover:scale-110 z-10 shadow-md"
          aria-label="Close image viewer"
        >
          <XIcon />
        </button>
        <img src={imageUrl} alt="Testimonial full view" className="w-full h-auto max-h-[85vh] object-contain rounded" />
      </div>
    </div>
  );
};

export default ImageModal;
