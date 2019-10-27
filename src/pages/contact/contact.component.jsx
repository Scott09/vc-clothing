import React from 'react';

import './contact.styles.scss';

import ContactItem from '../../components/contact-item/contact-item.component';
import contactData from './contact-info.data';

const ContactPage = () => {
  return (
    <main className="contact-page">
      <h1>Get in Touch!</h1>
      <p>Want to get in touch? Here is how you can reach us...</p>
      <ContactItem header={contactData.header} description={contactData.description} contactNumber={contactData.contactNumber} />
    </main>
  );
}

export default ContactPage;