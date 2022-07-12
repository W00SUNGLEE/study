import React from "react";
import PropTypes from "prop-types";

const test = (props) => {
  return <div></div>;
};

test.propTypes = {
  name: PropTypes.array.isRequired
};

export default test;
