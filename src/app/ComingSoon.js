// src/app/ComingSoon.js
import React from 'react';
import './globals.css';

const ComingSoon = () => {
  return (
    <div className="relative w-screen h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(/wallpaper.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold" style={{ fontFamily: 'vitreous' }}>
          Coming Soon
        </h1>
      </div>
    </div>
  );
};

export default ComingSoon;
