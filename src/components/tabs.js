import React, { useEffect, useState } from "react";

function Tabs() {

  const [openMenu, setOpenMenu] = React.useState("Onsale");

  const handleBtnClick = () => {
    setOpenMenu("web");
    document.getElementById("Mainbtn").classList.add("li-active");
    document.getElementById("Mainbtn1").classList.remove("li-active");
    document.getElementById("Mainbtn2").classList.remove("li-active");
    document.getElementById("Mainbtn3").classList.remove("li-active");
  };
  const handleBtnClick1 = () => {
    setOpenMenu("dash");
    document.getElementById("Mainbtn1").classList.add("li-active");
    document.getElementById("Mainbtn").classList.remove("li-active");
    document.getElementById("Mainbtn3").classList.remove("li-active");
    document.getElementById("Mainbtn2").classList.remove("li-active");
  };
  const handleBtnClick2 = () => {
    setOpenMenu("nft");
    document.getElementById("Mainbtn2").classList.add("li-active");
    document.getElementById("Mainbtn").classList.remove("li-active");
    document.getElementById("Mainbtn1").classList.remove("li-active");
    document.getElementById("Mainbtn3").classList.remove("li-active");
  };

  const handleBtnClick3 = () => {
    setOpenMenu("stake");
    document.getElementById("Mainbtn3").classList.add("li-active");
    document.getElementById("Mainbtn").classList.remove("li-active");
    document.getElementById("Mainbtn1").classList.remove("li-active");
    document.getElementById("Mainbtn2").classList.remove("li-active");
  };


  return (
    <div>
        <div className='row'>
          <div className='col-lg-10' style={{ margin: '0 auto' }}>
            <div className="items_filter">
              <ul className="de_nav text-left">
                <li id='Mainbtn' className="li-active"><span onClick={handleBtnClick}>Website</span></li>
                <li id='Mainbtn1' className=""><span onClick={handleBtnClick1}>Dashboard</span></li>
                <li id='Mainbtn2' className=""><span onClick={handleBtnClick2}>NFT Website</span></li>
                <li id='Mainbtn3' className=""><span onClick={handleBtnClick3}>Staking</span></li>
                </ul>
            </div>
          </div>
        </div>

        {openMenu === "web" && (
          <div id='zero1' className='onStep px-5 fadeIn'>
            <h1>Tab 1</h1>
          </div>
        )}
        {openMenu === "dash" && (
          <div id='zero2' className='onStep px-5 fadeIn'>
            <h1>Tab 2</h1>
          </div>
        )}
        {openMenu === "nft" && (
          <div id='zero3' className='onStep px-5 fadeIn'>
            <h1>Tab 3</h1>
          </div>
        )}
        {openMenu === "stake" && (
          <div id='zero4' className='onStep px-5 fadeIn'>
            <h1>Tab 4</h1>   
          </div>
        )}
        
        </div>
  );
}
export default Tabs