// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import "./Contact.css";
import React from "react";

const Contact = ({ datas }) => {
  return (
    <>
      <div className="contacts">
        {datas.map((data, index) => {
          return (
            <div className="list" key={index}>
              <div className="img-profile">
                <img src={data.photo} alt="" />
              </div>
              <div className="detail">
                <p className="name">{data.name}</p>
                <p className="phone">{data.phone}</p>
                <p className="email">{data.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contact;
