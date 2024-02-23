import React from 'react';
import './styles/homepage.css';

function HomePage() {
    return (
      <div className="home-page">
        {/* Homepage image */}
        <img src="https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Homepage banner" className="hero-image" />
  
        {/* Flex container for centered boxes */}
        <div className="flex-container">
          <div className="flex-item flex-item-1">
            <h3>Flex item 1 title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="/other-page" className="button">Learn more</a>
          </div>
          <div className="flex-item flex-item-2">
            <h3>Flex item 2 title</h3>
            <p>Donec sit amet sapien a urna tincidunt malesuada.</p>
            <a href="/other-page" className="button">Learn more</a>
          </div>
          <div className="flex-item flex-item-3">
            <h3>Flex item 3 title</h3>
            <p>Nulla facilisi. Nulla eget consectetur velit.</p>
            <a href="/other-page" className="button">Learn more</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default HomePage;