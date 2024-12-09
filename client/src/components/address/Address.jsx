import React from "react";
import location from "../../../public/icons/location.svg";
import whatsapp from "../../../public/icons/whatsapp.svg";
import instagram from "../../../public/icons/instagram.svg";
const Address = () => {
  return (
    <div className="container">
      <h1 className="text-xl font-bold">Наш адрес</h1>
      <p className="flex items-center pt-8 gap-4 pb-1 text-xl font-semibold">
        <img src={location} alt="" />
        Турусбекова 109/1
      </p>
      <iframe className="p-10 rounded-[60px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.652199501!2d74.58372310880188!3d42.88018459037522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec81915eaf75d%3A0x9bfedde3851dcd21!2sMaximum%20Business%20Center!5e0!3m2!1sen!2skg!4v1733745110066!5m2!1sen!2skg"
        width="100%"
        height="400px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <span className="flex items-center gap-4 text-xl font-semibold mb-4 mt-4">
        {" "}
        <img src={whatsapp} alt="" /> +996705677798{" "}
      </span>
      <span className="flex items-center gap-4 text-xl font-semibold">
        {" "}
        <img src={instagram} alt="" /> okurmen_it
      </span>
    </div>
  );
};

export default Address;
