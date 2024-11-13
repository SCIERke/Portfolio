import React from 'react';
import './Glass.scss';

function Glass() {
  return (
    <div className="wrap">
        <div className="base">
            <div className="blade blade-center"></div>
            <div className="blade blade-left-s"></div>
            <div className="blade blade-right-s"></div>
            <div className="blade blade-left-l"></div>
            <div className="blade blade-right-l"></div>
        </div>
    </div>
  );
}

export default Glass;
