import React from "react";
import PropTypes from "prop-types";
import UserDetails from "./UserDetails";

const UserCard = ({ name, role, location }) => (
  <div className="user-card">
    <UserDetails name={name} role={role} location={location} />
  </div>
);

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default UserCard;
