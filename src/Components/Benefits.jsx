import React from "react";
import "../css/bnefits.css";
// import images from "../../constants/images";
// import { useNavigate } from "react-router-dom";
// import NavbarSec from "../../common/NavbarSec";
//import Slider from "react-slick";

const Benefits = () => {
  const sliderSettings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per interaction
  };
  //const navigate = useNavigate();

  return (
    <div className="page_newmain_wrapp">
      <div className="page_newbase_wrapp">
        <div className="page_newnavbar_wrapp">
          <div className="nav_back_wrapp">
            <img
              src={''}
              className="nav_back_btn"
              alt=""
              //onClick={() => navigate(-1)}
            />
          </div>
          <p className="nav_screen_name">Benefits</p>
        </div>
        <div>
          <div className="benefits_club_user">
            <h1 className="benefits_name1">Selfie Virat Kohli</h1>
            <p className="benefits_name2">Selfie Virat Kohli</p>
            <div>
              {/* <Slider {...sliderSettings}> */}
                {" "}
                {/* Use the Slider component with your settings */}
                <div>
                  <img
                    src={''}
                    className="Collaboratenfb_img"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={''}
                    className="Collaboratenfb_img"
                    alt=""
                  />
                </div>
                {/* Add additional slides here */}
              {/* </Slider> */}
            </div>
          </div>
          <center>
            <h1 className="benefit_price">₹650000</h1>
          </center>
        </div>
        <div className="details_of_benefit">
          <div className="sub_benefit">
            <button className="benefits_btn_details">
              {" "}
              <img src={''} className="img_benefits" alt="" />
              Terms & condition
            </button>
            <button className="benefits_btn_details">
              {" "}
              <img src={''} className="img_benefits" alt="" />
              Need help?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
