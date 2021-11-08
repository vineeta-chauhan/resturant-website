import React from 'react'
import Menu from './MenuApi';
import './resturant.css';


const NavBar = ({ filterItem, menuList }) => {



  return (
    <nav className="navbar">
      <div className="btn-group">
        {
          menuList.map((ele) => {
            return (
              <button
                className="btn-group__item" onClick={() => filterItem(ele)}>{ele} </button>
            )
          })
        }

      </div>
    </nav>
  )
}

export default NavBar
