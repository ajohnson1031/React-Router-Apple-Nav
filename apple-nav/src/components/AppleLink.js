import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from "semantic-ui-react";

const AppleLink = props => {
  return (
    <div>
      <NavLink to={props.path} className="hnav-link" key={props.keynum}>
        {props.text === null ? (
          <Image src={props.icon} alt={props.path} width="18.5" />
        ) : (
          props.text
        )}
      </NavLink>
    </div>
  );
};

export default AppleLink;
