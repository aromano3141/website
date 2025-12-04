import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm border-t border-dark-border mt-20">
      <p className="mb-2">Designed & Built by Anthony Romano</p>
      <p>© {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;