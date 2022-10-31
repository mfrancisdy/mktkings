import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import SliderImage from '../assets/Images/Slider/work.svg';



function Tabs() {

  const [openMenu, setOpenMenu] = React.useState("web");

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
            <ul style={{ textAlign: 'center' }} className="de_nav text-left">
              <li id='Mainbtn' className="li-active"><span onClick={handleBtnClick}>Website</span></li>
              <li id='Mainbtn1' className=""><span onClick={handleBtnClick1}>Dashboard</span></li>
              <li id='Mainbtn2' className=""><span onClick={handleBtnClick2}>NFT Website</span></li>
              <li id='Mainbtn3' className=""><span onClick={handleBtnClick3}>Staking</span></li>
            </ul>
          </div>
        </div>
      </div>



      {openMenu === "web" && (
        <div id='zero1' className='onStep px-5 fadeIn tabs-carousel'>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SliderImage}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://themasterchefs.org/hush.png"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      )}
      {openMenu === "dash" && (
        <div id='zero2' className='onStep px-5 fadeIn tabs-carousel'>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://themasterchefs.org/rttdash.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://themasterchefs.org/odadash.png"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      )}
      {openMenu === "nft" && (
        <div id='zero3' className='onStep px-5 fadeIn tabs-carousel'>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://themasterchefs.org/kishidash.png"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://themasterchefs.org/stdash.png"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://themasterchefs.org/namidash.png"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      )}
      {openMenu === "stake" && (
        <div id='zero4' className='onStep px-5 fadeIn tabs-carousel'>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://themasterchefs.org/namidash.png"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://themasterchefs.org/hush.png"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
export default Tabs