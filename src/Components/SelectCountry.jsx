import React from "react";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../css/styles.css";

const options = [
    { key: "C", text: "C", value: "C" },
    { key: "CPP", text: "C++", value: "CPP" },
    { key: "Java", text: "Java", value: "Java" },
    { key: "Python", text: "Python", value: "Python" },
    { key: "C#", text: "C#", value: "C#" },
    { key: "JS", text: "JavaScript", value: "JS" },
  ];
  
  const SelectCountry = () => {
    return (
      <div>
        <center>
          <h1 className="ui green header">Geeksforgeeks</h1>
          <strong>Semantic UI Search Selection Dropdown Type</strong>
          <br />
          <br />
          <Dropdown
            placeholder="Select Languages"
            fluid
            search
            selection
            options={options}
          />
        </center>
      </div>
    );
  };
  
  export default SelectCountry;