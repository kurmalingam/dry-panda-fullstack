import React from 'react';
import './GlitterText.css';

const GlitterText = () => {
  return (
    <>
    <section className="glitter-static-section">
      <div className="text-container">
        <div className="glitter-text">
          <span style={{ '--i': 0 }}>Solar-Powered</span>
          <span style={{ '--i': 1 }}>Goodness</span>
        </div>
        <div className="sub-glitter">
          <span style={{ '--i': 0 }}>From</span>
          <span style={{ '--i': 1 }}>Our</span>
          <span style={{ '--i': 2 }}>Hands</span>
          <span style={{ '--i': 3 }}>to</span>
          <span style={{ '--i': 4 }}>Yours</span>
        </div>
      </div>
    </section>
    </>
  );
};

export default GlitterText;
