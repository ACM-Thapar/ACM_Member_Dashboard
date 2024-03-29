import React from "react";
import Updates from "../Updates/Updates";
import { RepoCard } from "react-github-cards/dist/medium";
import "react-github-cards/dist/medium.css";
import "./RightSide.css";
import Cookies from "js-cookie";
import Contribution from "../Contribution/Contribution";
import { UserCard } from 'react-ui-cards';
// <RepoCard username="ACM-Thapar" repo="CS_COURSE_GUIDE" />
const RightSide = () => {
  return (
    <>
      <div className="RightSide">
        <div className="rightbar">
          <Updates />
        </div>
        {/* <div className="csCourse">
        <RepoCard username="ACM-Thapar" repo="CS_COURSE_GUIDE" />
        </div> */}
        <Contribution />
      </div>
    </>
  );
};

export default RightSide;
