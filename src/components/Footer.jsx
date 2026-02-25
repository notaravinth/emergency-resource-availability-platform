import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2023 MediTrack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="javascript:void(0)" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="javascript:void(0)" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="javascript:void(0)" className="hover:text-blue-600 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
