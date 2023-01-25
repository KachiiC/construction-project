import "./Contact.scss";

import { MailFilled, PhoneFilled } from "@ant-design/icons";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="phone-container">
        <a href="mailto: abc@example.com">
          <h2>Email</h2>
          <h3>bwohlman@vvsproperty.co.uk</h3>
          <MailFilled />
        </a>
      </div>
      <div className="email-container">
        <h2>Telephone</h2>
        <h3>+44123456789</h3>
        <PhoneFilled />
      </div>
    </div>
  );
};

export default Contact;
