import React from 'react';

import './contact-item.styles.scss';

const ContactItem = ({ header, description, contactNumber}) => {
  return (
    <div className="item-container">
      <h1 className="item-header">
        {header}
      </h1>
      <main className="main-content">
        {description}
      </main>
      <div className="phone-number">
        {contactNumber}
      </div>
    </div>
  );
}

export default ContactItem;