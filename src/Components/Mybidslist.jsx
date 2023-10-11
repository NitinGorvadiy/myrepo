import React from "react";
import "../css/mybidslist.css";
// import images from "../../constants/images";
// import { useNavigate } from "react-router-dom";
// import NavbarSec from "../../common/NavbarSec";

const Mybidslist = () => {
  return (
    <div className="page_main_wrapp">
      <div className="page_base_wrapp">
        {/* <NavbarSec name="NFBs"  /> */}
        <div>
            <input type="search" />
        </div>
        <div className="mybidslist_details">
            <div className="mybidslist_list">
                <center>
                    <b>₹25000</b>
                    <div className="b_list_hr"></div>
                </center>
                <div className="mybidslist_sub">
                    <img src={''} className="my_list_bis_img" alt="" />
                    <p> Pandit Aniket chetanbhai</p>
                    <button className="btn_sub_list_my">
                        <img src={''} className="btn_sub_list_my_img" alt="" />
                        <span>Accept</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Mybidslist;