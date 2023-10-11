import React, { useState, useEffect } from "react";
import "../css/tradehistory.css";
import axios from "axios";
// import images from "../../constants/images";
// import NavbarSec from "../../common/NavbarSec";

const Tradehistory = () => {


  const [tradehistory, setTradehistory] = useState([]);

  const url = "https://gokulnair.com/blockchain_2/api/get_single_product_bond_detail_all_buyer";
  console.log('nitin 13', tradehistory);

  const tradeHistoryData = async () => {
    // FormData object
    const formData = new FormData();

    formData.append('release_bond_id', '410');
    formData.append('product_id', '755');
    formData.append('uniq_code', 'qK*p');
    formData.append('user_id', '300');
    formData.append('is_nfb', '0');

    // Send the POST request with the FormData
    return await axios.post(url, formData)
      .then((res) => setTradehistory(res.data.result))
      .catch((error) => {
        // Handle errors
      });
  }
  useEffect(() => {
    tradeHistoryData();
  }, []);


  return (
    <div className="page_main_wrapp">
      <div className="page_base_wrapp">
        {/* <NavbarSec name="Trade history"/> */}
        <div className="tradehistory">
          {tradehistory.map((item, index) => (
            <div className="tradehistory_sub" key={index}>
                <img src={item.buyer_profile} className="tradehistory_img" alt="" />
                <p className="tradehistory_nm">{item.buyer}</p>
                <p className="tradehistory_Price">{item.get_amount}</p>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tradehistory;