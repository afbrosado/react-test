import React from "react";
import { Link } from 'react-router-dom';

function ALink({ children, className, style, ...props }) {
  function defaultFunction(e) {
    if (props.to === '#') {
      e.preventDefault();
    }
  }

  return (
    <Link {...props} onClick={defaultFunction} className={className} style={style}>
      {children}
    </Link>
  );
};

export default ALink;
