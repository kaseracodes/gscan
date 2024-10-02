import { useState } from "react";
import { COLORS } from "../../assets/constants";
import Button from "../button/Button";
import PlaceCard from "../placeCard/PlaceCard";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await fetch("https://hotd-email-server.onrender.com/sendEmail/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        // Clear the form after successful submission
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <div className={styles.container} id="contactDiv">
      <PlaceCard
        imagePath="/images/building.png"
        office="29/3 B.T. Road, Kolkata – 700056"
        factory="Chanditala Industrial Park, Roypara Chanditala, Hooghly – 712702"
        email="gscanworks@gmail.com"
        phones={["+91 7003788574", "+91 9831054041"]}
      />

      <div className={styles.div}>
        <h3 className={styles.heading}>Reach Out To Us!</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputDiv}>
            <input
              type="text"
              placeholder="Name"
              className={styles.name}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className={styles.email}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputDiv2}>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              rows="5"
              cols="30"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button content="Submit" bgColor={COLORS.orange} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
