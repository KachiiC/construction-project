import "./Contact.scss";

import { ToolFilled } from "@ant-design/icons";
import { serviceList } from "data/ServicesData";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>&bull; Contact US &bull;</h1>
      <div className="underline"></div>
      <div className="icon_wrapper">
        <ToolFilled style={{fontSize: "40px"}} />
      </div>
      <form action="#" method="post" id="contact_form">
        <div className="name">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            id="name_input"
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email_input"
            required
          />
        </div>
        <div className="telephone">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="Contact Number"
            name="telephone"
            id="telephone_input"
            required
          />
        </div>
        <div className="subject">
          <label htmlFor="subject"></label>
          <select
            placeholder="Service"
            name="subject"
            id="subject_input"
            required
          >
            <option disabled hidden selected>
              Service
            </option>
            {Object.keys(serviceList).map((service) => (
              <option>{service}</option>
            ))}
          </select>
        </div>
        <div className="message">
          <label htmlFor="message"></label>
          <textarea
            name="message"
            placeholder="I'd like to chat about"
            id="message_input"
            required
          ></textarea>
        </div>
        <div className="submit">
          <input type="submit" value="Send Message" id="form_button" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
