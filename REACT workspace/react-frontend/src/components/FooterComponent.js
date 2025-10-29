import React from 'react';

function FooterComponent() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto w-100" style={{ background: 'linear-gradient(90deg, #000000, #434343)', color: '#fff' }}>
      <p className="mb-0">&copy; {new Date().getFullYear()} Employee Management System | All Rights Reserved</p>
    </footer>
  );
}

export default FooterComponent;
