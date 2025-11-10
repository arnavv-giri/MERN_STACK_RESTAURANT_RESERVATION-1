import React, { useState } from 'react'
import {data} from '../restApi.json'
import MenuModal from './MenuModal'
const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur eius et recusandae veritatis. Quasi, et molestias!</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <p className="price">{element.price}</p>
                                <button onClick={() => setMenuOpen(true)}>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Menu
