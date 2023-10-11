import React, { useState, useEffect } from "react";
import "../css/addowners.css";
import axios from "axios";
// import images from "../../constants/images";
// import { Link, useNavigate } from "react-router-dom";


const Addowners = () => {
    // const navigate = useNavigate();


const url = "https://gokulnair.com/blockchain_2/api/get_all_club_detail";
const [data, setData] = useState([]);

console.log('nitin 13', data);

const fetchownerData = async () => {
  // FormData object
  const formData = new FormData();
  
  formData.append('club_id', '229');
  formData.append('user_id', '40');

  // Send the POST request with the FormData
  return await axios.post(url, formData)
    .then((res) => { 
      setData(res.data.result.manager_detail)
       setSearchdata(res.data.result.manager_detail)
    })
    .catch((error) => {
      // Handle errors
    });
}

useEffect(() => {
  fetchownerData();
}, []);


const [getsearchData, setSearchdata] = useState([]);

  const searchFilter = (text) => {
    const newData = getsearchData.filter(function (item) {
      console.log("text", text);
      const sdata = item.firstname
        ? item.firstname.toUpperCase()
        : "".toLowerCase();

      const textData = text.toUpperCase();
      return sdata.indexOf(textData) > -1;
    });
    setData(newData);
    console.log("newData", newData);
  };


  
  return (
    <div className="page_main_wrapp">
      <div className="page_base_wrapp">
        <div className="page_navbar_wrapp">
          <div className="nav_back_wrapp">
            <image
              src={''}
              className="nav_back_btn"
              alt=""
              // onClick={() => navigate(-1)}
            />
          </div>
          <p className="nav_screen_name">Add Owners</p>
          <span className="add_owners">Submit</span>
        </div>
        <div className="club_manager_new_add">
            <input type="text" className="serch_owners" onChange={(e) => searchFilter(e.target.value)}/>
        </div>
         {data.map((innerItem, innerIndex) => (
            <div className="owners_list_add" key={innerIndex}>
                <img src={innerItem.profile} className="owners_img_add" alt="" />
                <span className="owners_name_list">{innerItem.firstname}</span>
            </div>
            ))}
      </div>
    </div>
  );
};

export default Addowners;
