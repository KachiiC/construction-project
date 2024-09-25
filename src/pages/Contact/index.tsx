import "./Contact.scss";

import { MailFilled, PhoneFilled } from "@ant-design/icons";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="email-container">
        <h2>Email</h2>
        <div className="email-links">
          <a href="mailto: bwohlman@vvsproperty.co.uk">
            <p>
              <span>Ben:</span> bwohlman@vvsproperty.co.uk
            </p>
          </a>
          <a href="mailto: info@vvsproperty.co.uk">
            <p>
              <span>Enquiries:</span> info@vvsproperty.co.uk
            </p>
          </a>
        </div>
        <MailFilled />
      </div>
      <div className="phone-container">
        <h2>Telephone</h2>
        <a href="tel:+447552204638">
          <h3>+447552204638</h3>
        </a>
        <PhoneFilled />
      </div>
    </div>
  );
};

export default Contact;
