/* eslint-disable react/button-has-type */
import React from 'react';

function Pagination() {
  return (
    <div className="flex justify-center">
      <div className="btn-group my-5">
        <button className="btn">«</button>
        <button className="btn">1</button>
        <button className="btn">»</button>
      </div>
    </div>
  );
}

export default Pagination;
