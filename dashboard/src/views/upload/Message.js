import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from "react-bootstrap";

const Message = ({ msg, type }) => {
  return (
    <Alert variant={type}>{msg}</Alert>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;