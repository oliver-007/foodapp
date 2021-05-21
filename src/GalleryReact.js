import React, { useState } from "react";
import CatgMenu from "./CatgMenu";
import "./GalleryReact.css";
import Menu from "./Menu";
import MenuItems from "./MenuItems";

const allCatValues = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "all",
];

console.log(allCatValues);

const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] = useState(allCatValues);
  const filterItem = (categItem) => {
    if (categItem === "all") {
      setItems(Menu);
    } else {
      const updatedItems = Menu.filter((currElem) => {
        return currElem.category === categItem;
      });
      setItems(updatedItems);
    }
  };

  return (
    <>
      <h1 className="text-capitalize mt-5 text-center main-heading">
        Order your favourite dish
      </h1>
      <hr />
      {/* Category Menu section... */}
      <CatgMenu filterItem={filterItem} catItems={catItems} />

      {/* menu item section ... */}
      <MenuItems items={items} />
    </>
  );
};

export default GalleryReact;
