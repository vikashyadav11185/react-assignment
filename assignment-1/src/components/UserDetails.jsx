import React from "react";
import PropTypes from "prop-types";
import "./UserDetails.css";

const UserDetails = ({ name, role, location }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <dl>
          <dt>Name:</dt>
          <dd>{name}</dd>
          <dt>Role:</dt>
          <dd>{role}</dd>
          <dt>Location:</dt>
          <dd>{location}</dd>
        </dl>
      </div>
    </div>
  );
};

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default UserDetails;
