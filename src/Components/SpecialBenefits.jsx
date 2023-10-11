import React, { useEffect, useState } from "react";
import "../css/SpecialBenefits.css";
//import images from "../../constants/images";
//import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
//import Footer from "../../common/footer/Footer";

const SpecialBenefits = () => {
  const [getchangeBenefit, setChangeBenefit] = useState(1);
  //const Navigate = useNavigate();

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const [benifites, setBenifites] = useState([]);

  const url = "https://gokulnair.com/blockchain_2/api/get_user_benifit_history";
  console.log('nitin 126', benifites);

  const fetchBenifitesData = async () => {
    // FormData object
    const formData = new FormData();

    formData.append('user_id', '207');

    // Send the POST request with the FormData
    return await axios.post(url, formData)
      .then((res) => setBenifites(res.data.result))
      .catch((error) => {
        // Handle errors
      });
  }
  useEffect(() => {
    fetchBenifitesData();
  }, []);


  return (
    <div className="page_spemain_wrapp">
      <div className="page_spebase_wrapp">
        {/* navbar start */}

        <br />

        {/* select benefit btnsrapp start */}
        <div className="benefits_btns_wrapp">
          <button
            onClick={() => {
              setChangeBenefit(1);
            }}
            className={`benefit_btn ${getchangeBenefit === 1 ? "active-button" : "inactive-button"
              }`}
          >
            Special Benefits
          </button>
          <button
            onClick={() => {
              setChangeBenefit(2);
            }}
            className={`benefit_btn ${getchangeBenefit === 2 ? "active-button" : "inactive-button"
              }`}
          >
            User Benefits
          </button>
        </div>
        {/* select benefit btns wrapp end */}

        {/* user benefits start  */}
        {getchangeBenefit === 2 && (
          <div className="user_benefit_main_wrapp">
            <h4 className="user_benefit_heading">Creator Benefits</h4>
            {benifites.map((outerItem, outerIndex) => (
              <div className="user_benefits_cards_wrapp" key={outerIndex}>
                {outerItem.product_benifit.map((innerItem, innerIndex) => (
                  <div className="user_benefits_sigle_card" key={innerIndex}>
                    {innerItem.reward_img_video.map((item, itemIndex) => (
                      <img
                        src={item.img_video}
                        alt=""
                        className="user_benefits_card_img"
                        key={itemIndex}
                      />
                    ))}
                    <p className="user_benefits_card_name">{innerItem.reward_name}</p>
                    <button className="user_benefits_card_btn">
                      {innerItem.is_claim === 1 ? 'Explore' : innerItem.is_claim === 2 ? 'Confirm' : innerItem.is_claim === 3 ? 'Approved' : 'Add'}
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        {/* user benefits end  */}

        {/* partner benefit start */}
        {getchangeBenefit === 1 && (
          <>
            <div className="partner_benefit_main_wrapp">
              <div className="sub_part_1">
                <image
                  src={''}
                  alt=""
                  className="partner_benefit_side1_img"
                />
              </div>
              <div className="partner_sub_slider">
                {/* <p>No Benefit</p> */}
                <center>
                  {/* <Slider {...sliderSettings}>
                      <div className="benefit_slider">
                        <div className="benefit_slider1">
                          <image
                            src={''}
                            alt="Slider Image 1"
                            className="slider-image_benefits"
                          />
                          <b className="benefit_font_nm">M.S Shoni</b>
                          <b className="benefit_font_nm">4500000</b>
                          <button className="benefit_new_btn">Explore</button>
                        </div>
                      </div>
                      <div className="benefit_slider">
                        <div className="benefit_slider1">
                          <image
                            src={''}
                            alt="Slider Image 1"
                            className="slider-image_benefits"
                          />
                          <b className="benefit_font_nm">M.S Shoni</b>
                          <b className="benefit_font_nm">4500000</b>
                          <button className="benefit_new_btn">Explore</button>
                        </div>
                      </div>
                      <div className="benefit_slider">
                        <div className="benefit_slider1">
                          <image
                            src={''}
                            alt="Slider Image 1"
                            className="slider-image_benefits"
                          />
                          <b className="benefit_font_nm">M.S Shoni</b>
                          <b className="benefit_font_nm">4500000</b>
                          <button className="benefit_new_btn">Explore</button>
                        </div>
                      </div>
                      <div className="benefit_slider">
                        <div className="benefit_slider1">
                          <image
                            src={''}
                            alt="Slider Image 1"
                            className="slider-image_benefits"
                          />
                          <b className="benefit_font_nm">M.S Shoni</b>
                          <b className="benefit_font_nm">4500000</b>
                          <button className="benefit_new_btn">Explore</button>
                        </div>
                      </div>
                    </Slider> */}
                </center>
              </div>
              <br />
              <div className="sub_part_2">
                <image
                  src={''}
                  alt=""
                  className="partner_benefit_side2_img"
                />
              </div>
            </div>
          </>
        )}
        {/* partner benefit end */}

      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default SpecialBenefits;
