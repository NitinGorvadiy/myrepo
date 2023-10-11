import React from "react";
import "../css/clubsetting.css";
// import images from "../../constants/images";
// import { useNavigate } from "react-router-dom";

const Clubsetting = () => {
  // const navigate = useNavigate();
  return (
    <div className="club_set_main_wrapp">
      <div className="club_set_base_wrapp">
        <div className="club_set_navbar_wrapp">
          <div className="club_set_wrapp">
            <div className="club_set_1">
               <img
                src={''}
                className="club_set_btn"
                alt=""
                // onClick={() => navigate(-1)}
              />
            </div>
            <div className="club_set_2">
              <p className="nav_screen_name_set">Club Profile</p>
            </div>
          </div>
          <img src={''} className="club_set_profile" alt="" />
          <div className="footer_club_set">
            <div className="footer_club_set_1">
              <img src={''} className="set_club_pr" alt="" />
            </div>
            <div className="footer_club_set_2">
              <p className="set_nm_club">Club Name</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="details_ofset">
          <div className="details_ofset_1">
            <img src={''} className="set_club_sub" alt="" />{" "}
            <p className="set_club_sub_nm"> Edit club basic details</p>
          </div>
          <div className="details_ofset_1">
            <img src={''} className="set_club_sub" alt="" />{" "}
            <p className="set_club_sub_nm">club managers/owners</p>
          </div>
          <div className="details_ofset_1">
            <img src={''} className="set_club_sub" alt="" />{" "}
            <p className="set_club_sub_nm"> join Request</p>
          </div>
          <div className="details_ofset_1">
            <img src={''} className="set_club_sub" alt="" />{" "}
            <p className="set_club_sub_nm"> Onboarding Status</p>
            <input className="set_chek" type="checkbox" id="checkbox2" />
            <label className="setlabel" for="checkbox2"></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubsetting;
