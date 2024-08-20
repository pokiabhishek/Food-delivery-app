import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='Explor-Menu flex flex-col gap-5' id='Explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='Explore-Menu-text'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, assumenda obcaecati commodi natus eaque ratione. Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="explore-Menu-list">
        {menu_list.map((item,index) => {
            return(
                <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-Menu-list-items'>
                    <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            );
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
