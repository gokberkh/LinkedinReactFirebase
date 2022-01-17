import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "../styles/Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Coronavirus 2022",
        "The death toll is on the rise - 10K readers"
      )}
      {newsArticle(
        "Star wars ",
        "Star Wars movie cancelled by the people - 4K readers"
      )}
      {newsArticle(
        "Merry Christmas",
        "Everyone worldwide experiences their first lockdown christmas - 2K readers"
      )}
    </div>
  );
}

export default Widgets;
