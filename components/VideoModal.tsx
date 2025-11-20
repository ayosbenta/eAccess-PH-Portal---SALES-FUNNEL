
import React from 'react';
import { XIcon } from './icons';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-black p-2 rounded-lg shadow-2xl relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-transform duration-200 transform hover:scale-110 z-10"
          aria-label="Close video player"
        >
          <XIcon />
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            style={{aspectRatio: '16 / 9'}}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
