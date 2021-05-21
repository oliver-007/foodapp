import React from "react";

const CatgMenu = (props) => {
  return (
    <>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          {props.catItems.map((currElem, index) => {
            return (
              <button
                className="btn btn-warning"
                key={index}
                onClick={() => props.filterItem(currElem)}
              >
                {currElem}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CatgMenu;
