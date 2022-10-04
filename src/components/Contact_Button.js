import React from 'react';
import '../App.scss'

function ContactButton(props) {
    return (
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">{props.name}</span>
        </button>
    )
}

export default ContactButton;