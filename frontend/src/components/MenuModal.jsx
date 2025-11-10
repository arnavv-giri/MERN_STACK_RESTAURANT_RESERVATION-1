import React from 'react';
import { data } from '../restApi.json';
import './MenuModal.css';

const MenuModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const dishes = data[0].fullMenu;

  return (
    <div className="menu-modal-overlay" onClick={onClose}>
      <div className="menu-modal" onClick={(e) => e.stopPropagation()}>
        <div className="menu-modal-header">
          <h2>Apna Dhaba - Full Menu</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <div className="menu-modal-content">
          <div className="menu-section">
            <h3>🥬 Vegetarian</h3>
            
            <div className="course-section">
              <h4>Starters</h4>
              <div className="menu-items">
                {dishes.vegetarian.starters.map(dish => (
                  <div key={dish.id} className="menu-item">
                    <div className="item-info">
                      <h5>{dish.title}</h5>
                      <span className="price">{dish.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="course-section">
              <h4>Main Course</h4>
              <div className="menu-items">
                {dishes.vegetarian.main_course.map(dish => (
                  <div key={dish.id} className="menu-item">
                    <div className="item-info">
                      <h5>{dish.title}</h5>
                      <span className="price">{dish.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="course-section">
              <h4>Desserts</h4>
              <div className="menu-items">
                {dishes.vegetarian.desserts.map(dish => (
                  <div key={dish.id} className="menu-item">
                    <div className="item-info">
                      <h5>{dish.title}</h5>
                      <span className="price">{dish.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="menu-section">
            <h3>🍖 Non-Vegetarian</h3>
            
            <div className="course-section">
              <h4>Starters</h4>
              <div className="menu-items">
                {dishes.non_vegetarian.starters.map(dish => (
                  <div key={dish.id} className="menu-item">
                    <div className="item-info">
                      <h5>{dish.title}</h5>
                      <span className="price">{dish.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="course-section">
              <h4>Main Course</h4>
              <div className="menu-items">
                {dishes.non_vegetarian.main_course.map(dish => (
                  <div key={dish.id} className="menu-item">
                    <div className="item-info">
                      <h5>{dish.title}</h5>
                      <span className="price">{dish.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;