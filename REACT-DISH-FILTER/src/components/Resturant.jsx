import React, { useState } from "react";
import Menu from "./menuApi";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {


            const {id,name,category,image,description} = curElem

          return (
            <>
              <div className="card-container" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {id}
                    </span>
                    <span className="card-author subtle">
                      {category}
                    </span>
                    <span className="card-title">{name}</span>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                    <img
                      src={image}
                      alt="images"
                      className="card-media"
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

const UniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  'All'
];


const Navbar = ({ filterItem, menuList }) => {
    return (
      <>
        <nav className="navbar">
          <div className="btn-group">
            {menuList.map((curElem, index) => {
              return (
                <button
                  className="btn-group__item"
                  onClick={() => filterItem(curElem)}
                  key={index}
                >
                  {curElem}
                </button>
              );
            })}
          </div>
        </nav>
      </>
    );
  };
  
  
const Resturant = () => {

  const [menuData, setMenuData] = useState(Menu);
  const [menuList , setMenuList] = useState(UniqueList)

  const FilterItem = (category) => {
    if(category==='All'){
        setMenuData(Menu)
        return
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };



  return (
    <>
      <Navbar filterItem = {FilterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
