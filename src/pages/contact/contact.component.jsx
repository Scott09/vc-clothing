import React from 'react';

import './contact.styles.scss';

import ContactItem from '../../components/contact-item/contact-item.component';
import contactData from './contact-info.data';

const imageUrl = 'https://www.axisbank.com/images/default-source/revamp_new/contact-us/contactus.jpg';

const ContactPage = () => {
  return (
    <main className="contact-page">
      <section className="contact-section" style={{backgroundImage: `url(${imageUrl})`}}>
      </section>
      
      <ContactItem header={contactData.header} description={contactData.description} contactNumber={contactData.contactNumber} />
    </main>
  );
}

export default ContactPage;