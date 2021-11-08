import { React, useState } from 'react'
import './resturant.css';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import NavBar from './NavBar';

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList)

  const filterItem = (category) => {
    if (category === 'All') {
      setMenuData(Menu)
      return;
    }
    const upadtedList = Menu.filter((currEle) => {
      return currEle.category === category

    })
    setMenuData(upadtedList)
  }

  return (
    <>
      <NavBar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />

    </>
  )
}

export default Resturant
