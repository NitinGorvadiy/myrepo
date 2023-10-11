import React, { useState, useEffect } from "react";
//import images from "../../constants/images";
// import Modal from "react-modal";
import "../css/ClubRequest.css";
//import BackButton from "../../components/BackButton";
import axios from "axios";

const ClubRequest = () => {

  const url = "https://gokulnair.com/blockchain_2/api/club_owner_send_approval_for_join";
  const [data, setData] = useState([]);

  console.log('nitin13', data);

  const fetchuserData = async () => {
    // FormData object
    const formData = new FormData();

    formData.append('club_id', '229');
    formData.append('user_id', '40');

    // Send the POST request with the FormData
    return await axios.post(url, formData)
      .then((res) => {
        setData(res.data.data)
        setSearchdata(res.data.data)

      })
      .catch((error) => {
        // Handle errors
      });
  }

  useEffect(() => {
    fetchuserData();
  }, []);

  // status accepts
  const statusurl = "https://gokulnair.com/blockchain_2/api/accept_reject_club_join_member";
  const [acceptstatus, setAcceptstatus] = useState([]);

  console.log('nitin38', acceptstatus);

  const fetchstatusData = async (status, id) => {
    // FormData object
    const formData = new FormData();

    formData.append('status', status);
    formData.append('club_join_id', id);

    // Send the POST request with the FormData
    return await axios.post(statusurl, formData)
      .then((res) => {
        setAcceptstatus(res.data)
        fetchuserData();
      })
      .catch((error) => {
        // Handle errors
      });
  }
  // useEffect(() => {
  //   fetchstatusData();
  // }, []);


  // status rejects

  const [showButtons, setShowButtons] = useState(true);
  const [status, setStatus] = useState("");
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

  const handleBidAction = (action) => {
    setShowButtons(false);
    setStatus(action === "accept" ? "Accepted" : "Rejected");
  };
  return (
    <div className="bidsall_screen">
      {/* start header */}
      <div className="bidsallheader">
        <div className="bidsallheader1">
          {/* <BackButton /> */}
        </div>
        <div className="bidsallheader2">
          <h1 className="bidsall_h1">Bids</h1>
        </div>
      </div>
      {/* end  header */}

      {/* search start */}
      <div
        className="req_search"
        style={{ width: "100%", margin: "20px auto" }}
      >
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => searchFilter(e.target.value)}
        // value={search}
        />
        <img className="req_search-img" src={''} alt="" />
      </div>
      {/* search end */}
      {Array.isArray(data) && data.length > 0 && data.map(({ profile, firstname, email, club_join_id }) => {
        
        return (
          <div className="alllist">

            <div className="alllist_part1">
              <img src={profile} className="alllist_part1_img" alt="" />
            </div>

            <div className="alllist_part2">
              <p>{firstname}</p>
              <p>{email}</p>
            </div>

            <div className="alllist_part3">
              {showButtons && (
                <div className="bidsbtn_all">
                  <div className="bidsbtn_all1">
                    <button
                      className="button_all1"
                      onClick={() => {
                        // handleBidAction("accept")
                        fetchstatusData(1, club_join_id)
                      }}
                    >
                      <p className="button_img" alt=""></p>
                    </button>
                    <h1 className="button_allp">Accept</h1>
                  </div>
                  <div className="bidsbtn_all2">
                    <button
                      className="button_all2"
                      onClick={() => {
                        // handleBidAction("reject")
                        fetchstatusData(0, club_join_id)
                      }}
                    >
                      <p className="button_img2" alt="">
                        x
                      </p>
                    </button>
                    <h1 className="button_allp">Reject</h1>
                  </div>
                </div>
              )}
              {status && <div className="msg_bids">{status}</div>}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default ClubRequest;
