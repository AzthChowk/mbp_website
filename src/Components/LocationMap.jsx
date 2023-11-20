import React from "react";

const LocationMap = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <h2 style={{ padding: "10px 0" }}>Locate us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4995.145772003001!2d85.33622682782813!3d27.714153838486848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1700447531989!5m2!1sen!2snp"
        width="100%"
        height="600"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default LocationMap;
