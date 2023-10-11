import React, { useState, useEffect } from "react";
import "../css/clubmanager.css";
// import NavbarSec from "../../common/NavbarSec";
// import images from "../../constants/images";
import axios from "axios";
import logo from "../image/delete.png";
import images from "../image/plus_new.png";
import {Link} from "react-router-dom";

const Clubmanager = () => {
  const [userNames, setUserNames] = useState([]);

  const [user, setUser] = useState([]);

  const url = "https://gokulnair.com/blockchain_2/api/get_all_club_detail";
  console.log('nitin 122', user);

  const fetchUserdata = async () => {
    // FormData object
    const formData = new FormData();

    formData.append('club_id', '229');
    formData.append('user_id', '40');

    // Send the POST request with the FormData
    return await axios.post(url, formData)
      .then((res) => setUser(res.data.result.manager_detail))
      .catch((error) => {
        // Handle errors
      });
  }

  useEffect(() => {
    fetchUserdata();
  }, []);

  // delete manager

  // status accepts
  const managersurl = "https://gokulnair.com/blockchain_2/api/delete_club_manager";
  const [deletemanager, setDeletemanager] = useState([]);

  console.log('nitin 41', deletemanager);

  const fetchmanagerData = async (id) => {
    // FormData object
    const formData = new FormData();

    formData.append('manager_id', id);
    formData.append('club_id', '229');

    // Send the POST request with the FormData
    return await axios.post(managersurl, formData)
      .then((res) => {
        setDeletemanager(res.data)
        fetchUserdata();
      })
      .catch((error) => {
        // Handle errors
      });
  }



  const handleDeleteUser = (indexToRemove) => {
    // Create a new array without the user to be removed
    const updatedUserNames = userNames.filter((_, index) => index !== indexToRemove);
    setUserNames(updatedUserNames);
  };

  return (
    <div className="page_main_wrapp">
      <div className="page_base_wrapp">
        {/* <NavbarSec name=" " /> */}
        <div className="club_manager_new">
          {user.map((item, index) => (
            <div className="main_manager_club_set" key={index}>
              {/* You can replace this with your user image */}
              <img src={item.profile} className="images_club_manager" alt="" />
              <p className="name_of_manager">{item.firstname}</p>
              <img
                src={logo}
                className="delete_manager_club"
                alt=""
                onClick={() => fetchmanagerData(item.club_manager_id)}
              />

            </div>
          ))}
        </div>
        <Link to={'/addowners'}>
        <img src={images} className="plus_new" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Clubmanager;