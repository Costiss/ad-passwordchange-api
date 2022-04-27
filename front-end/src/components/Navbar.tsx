import React, { FC, ReactNode } from 'react';
type navbarprops = {
  children?: ReactNode;
};

export const Navbar: FC<navbarprops> = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div>
              <h1>LOGO</h1>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01"></div>
        </div>
      </nav>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          marginTop: '5%'
        }}
      >
        {children}
      </div>
    </div>
  );
};
