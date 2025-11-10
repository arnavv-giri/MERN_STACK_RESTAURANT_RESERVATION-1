import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import MenuModal from "./MenuModal";

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Authentic Punjabi flavors meet Western favorites.</p>
            </div>
            <p className="mid">
              Welcome to Apna Dhaba, where traditional Punjabi cuisine meets 
              modern Western dishes. We serve authentic flavors from the heart 
              of Punjab alongside popular Western favorites. Our chefs use 
              traditional recipes passed down through generations, combined 
              with fresh ingredients to create an unforgettable dining experience.
            </p>
            <button onClick={() => setMenuOpen(true)} style={{border: '1px solid black', padding: '8px 28px', borderRadius: '30px', display: 'flex', width: 'fit-content', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '15px', color: '#111', background: 'transparent', cursor: 'pointer'}}>
              Explore Menu{" "}
              <span style={{marginLeft: '1rem', padding: '6px', background: '#111', borderRadius: '100%', color: '#fff'}}>
                <HiOutlineArrowRight />
              </span>
            </button>
          </div>
          <div className="banner ">
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=450&h=400&fit=crop" alt="about" />
          </div>
        </div>
      </section>
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default About;
