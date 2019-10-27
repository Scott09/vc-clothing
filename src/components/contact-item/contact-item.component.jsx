import React from 'react';

import './contact-item.styles.scss';

const ContactItem = ({ header, description, contactNumber}) => {
  return (
    <section className="item-container">
      <h1 className="item-header">
        {header}
      </h1>
      <p className="main-content">
        {description}
      </p>
      <p className="phone-number">
        {contactNumber}
      </p>
    </section>
  );
}

export default ContactItem;