import React, { useState,useEffect } from "react";
import axios from "axios";
import "../css/report.css";
// import images from "../../constants/images";
// import { useNavigate } from "react-router-dom";
// import NavbarSec from "../../common/NavbarSec";

const Report = () => {
  const [selectedOption, setSelectedOption] = useState(0); // State to track the selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option when a radio button is clicked
    console.log(selectedOption)
  };

 const [report, setReport] = useState([]);

 const url = "https://gokulnair.com/blockchain_2/api/report";
  console.log('nitin 17', report);

  const fetchReportData = async () => {
    // get request with the report
    return await axios.get(url)
      .then((res) => setReport(res.data.data))
      .catch((error) => {
        // Handle errors
      });
  }
  useEffect(() => {
    fetchReportData();
  }, []);


  return (
    <div className="page_main_wrapp">
      <div className="page_base_wrapp">
        {/* <NavbarSec name="" /> */}
        <div className="report_div">
          <b className="report_title">Report</b>
        </div>
        <br />
        {report.map((item, index) => (
        <div className="report_details" key={index}>
          <input
            type="radio"
            value={item.report_id}
            checked={selectedOption === item.report_id}
            onChange={handleOptionChange}
          />{" "}
          <span className="report_details_span">{item.report_name}</span>
        </div>
         ))} 
        {/* <div className="report_details">
          <input
            type="radio"
            value="otherViolations"
            checked={selectedOption === "otherViolations"}
            onChange={handleOptionChange}
          />{" "}
          <span className="report_details_span">Other violations</span>
        </div> */}
        <div className="show_text_report" style={{ display: selectedOption === "otherViolations" ? "block" : "none" }}>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <center>
          <button className="report_btn_new">Report</button>
        </center>
      </div>
    </div>
  );
};

export default Report;