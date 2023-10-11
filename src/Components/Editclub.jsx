import React from "react";
import "../css/editclub.css";
// import images from "../../constants/images";
// import { useNavigate } from "react-router-dom";
// import NavbarSec from "../../common/NavbarSec";
import { useState, useEffect } from "react";
import axios from "axios";

const Editclub = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLogo, setSelectedLogo] = useState(null);

  //   logo start
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
//   logo end 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
// cover start
const [selectedCover, setSelectedCover] = useState(null);

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedCover(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
// cover end
//   multipel images start
const [selectedImages, setSelectedImages] = useState([]);

  const handleImagesChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const imageUrls = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          imageUrls.push(reader.result);
          if (imageUrls.length === files.length) {
            setSelectedImages([...selectedImages, ...imageUrls]);
          }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };

  const removeImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };


  const [club, setClub] = useState([]);
  const [fullName, setFullName] = useState('');
  const [bio, setBio] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  

  const url = "https://gokulnair.com/blockchain_2/api/get_all_club_detail";
  console.log('nitin 85', club);

  const editclubData = async () => {
    // FormData object
    const formData = new FormData();

    formData.append('club_id', '229');
    formData.append('user_id', '40');

    // Send the POST request with the FormData
    return await axios.post(url, formData)
      // .then((res) => setClub(res.data.result))
      .then((res) => {
        // Set the state variables with the data from the API
        setClub(res.data.result)
        setFullName(res.data.result.club_name);
        setBio(res.data.result.club_bio);
        setMobileNumber(res.data.result.phone_number);
        setEmail(res.data.result.club_email);
        setLocation(res.data.result.location);
      })
      .catch((error) => {
        console.error('Error fetching data from the API:', error);
      });
  }
  useEffect(() => {
    editclubData();
  }, []);


//   multipel images end
  return (
    <div className="page_main_wrapp">
      <div className="page_base_wrapp">
        {/* <NavbarSec name=" Club Setting" /> */}
        <div className="edit_club_nm">
          <div className="edit_club_nm1">
            <img src={''} className="user_icon_edit" alt="" />
          </div>
          <div className="edit_club_nm2">
            <p className="edit_nm_tag">Full Name</p>
            <input
              type="text"
              className="input_edit"
              placeholder="Enter name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </div>
        <div className="edit_club_nm">
          <div className="edit_club_nm1">
            <img src={''} className="user_icon_edit" alt="" />
          </div>
          <div className="edit_club_nm2">
            <p className="edit_nm_tag">Bio</p>
            <textarea
              className="edit_club_text"
              name=""
              id=""
              cols="25"
              rows="2"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="edit_club_nm">
          <div className="edit_club_nm1">
            <img src={''} className="user_icon_edit" alt="" />
          </div>
          <div className="edit_club_nm2">
            <p className="edit_nm_tag">Mobile Number</p>
            <input
              type="number"
              className="input_edit"
              placeholder="Enter Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="edit_club_nm">
          <div className="edit_club_nm1">
            <img src={''} className="user_icon_edit" alt="" />
          </div>
          <div className="edit_club_nm2">
            <p className="edit_nm_tag">Email id</p>
            <input
              type="email"
              className="input_edit"
              placeholder="Enter name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="edit_club_nm">
          <div className="edit_club_nm1">
            <img src={''} className="user_icon_edit" alt="" />
          </div>
          <div className="edit_club_nm2">
            <p className="edit_nm_tag">Location</p>
            <input
              type="text"
              className="input_edit"
              placeholder="Enter name"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="edit_club_profile">
          <div className="edit_club_profile_sub">
          <b>Update Logo</b>
            <div className="edit_logo_profile_file">
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              style={{ display: "none" }}
              />
            <label htmlFor="fileInput" className="add_edit_club">
              + Add Profile
            </label>
            {selectedImage && (
                <img
                src={selectedImage}
                alt="Preview"
                className="edit_club_profile_img"
                />
                )}
                </div>
          </div>
          <div className="edit_club_profile_sub">
            <b>Update Logo</b>
            <div className="edit_logo_profile_file">
              <input
                type="file"
                id="logoInput"
                onChange={handleLogoChange}
                className="logo_add_new"
                style={{ display: "none" }}
              />
              <label htmlFor="logoInput" className="add_logo_set_club">
                + Add Logo
              </label>
              {selectedLogo && (
                <img
                  src={selectedLogo}
                  alt="Logo Preview"
                  className="edit_logo_profile_img"
                />
              )}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="edit_club_profile2">
          <b>Update Cover</b>
          <div className="edit_club_profile_sub3">
            <div className="edit_club_profile_file">
              <input
                type="file"
                id="coverInput"
                onChange={handleCoverChange}
                className="cover_file_set"
                style={{ display: "none" }}
              />
              <label htmlFor="coverInput" className="cover_upload_nm">
                + Add Cover
              </label>
            </div>
            {selectedCover && (
              <img
                src={selectedCover}
                alt="Cover Preview"
                className="edit_club_profile_img"
              />
            )}
          </div>
        </div>
        {/*  */}
        <div className="update_all_photos">
          <b>Update images/videos</b>
          <div className="upload_div_set">
            <input
              type="file"
              id="imagesInput"
              onChange={handleImagesChange}
              className="multi_club_img"
              multiple
              accept="image/*" // Add the types of images you want to accept
              style={{ display: "none" }}
            />
            <label htmlFor="imagesInput" className="multiset_club_img">
              + Add Images
            </label>
          </div>
          <div className="update_all_photos_show">
            {selectedImages.map((imageUrl, index) => (
              <div key={index} className="preview_image_wrapper">
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className="preview_image_edit_club"
                  onClick={() => removeImage(index)}
                />
                <img
                  src={''}
                  onClick={() => removeImage(index)}
                  className="delete_img_club"
                  alt="Delete"
                />
              </div>
            ))}
          </div>
        </div>
        <center>
          <button className="bank_btn_set">Update</button>
        </center>
      </div>
    </div>
  );
};

export default Editclub;
