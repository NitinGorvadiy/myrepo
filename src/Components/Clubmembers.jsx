import React, { useState, useEffect } from 'react';
import '../css/clubmembers.css';
import axios from 'axios';

const Clubmembers = () => {

const url = "https://gokulnair.com/blockchain_2/api/get_all_club_detail";
const [data, setData] = useState([]);

// console.log('nitin', data);

const fetchInfo = async () => {
  // FormData object
  const formData = new FormData();
  
  formData.append('club_id', '191');
  formData.append('user_id', '300');

  // Send the POST request with the FormData
  return await axios.post(url, formData)
    .then((res) => setData(res.data.result.club_member))
    .catch((error) => {
      // Handle errors
    });
}

useEffect(() => {
  fetchInfo();
}, []);

  return (
    <div className="page_main_wrapp">
      <div className="page_base_wrapp">
        {/* <NavbarSec name="Menbers"  /> */}
        <br />
        <div className="club_m_list">
        {data.map((item, index) => (
            <div className="club_m_list_view" key={index}>
                <img src={item.profile} className="club_m_list_img" alt="" />
                <p className="club_m_list_nm">{item.firstname}</p>
            </div>
             ))}
             {/* {data.map(({ profile, firstname }) => (
            <div className="club_m_list_view">
                <img src={profile} className="club_m_list_img" alt="" />
                <p className="club_m_list_nm">{firstname}</p>
            </div>
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default Clubmembers;