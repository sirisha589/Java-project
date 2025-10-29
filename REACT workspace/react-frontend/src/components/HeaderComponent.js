import React from 'react';

function HeaderComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(90deg, #000000, #434343)', height: '60px', color: '#fff' }}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">Employee Management</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default HeaderComponent;
