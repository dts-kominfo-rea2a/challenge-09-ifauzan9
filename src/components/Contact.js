// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import "./Contact.css";
import React from "react";

const Contact = ({ contacts }) => {
  return (
    <>
      <div className="contacts">
        <div className="list">
          <div className="img-profile">
            <img src={contacts[0].photo} alt="" />
          </div>
          <div className="detail">
            <p className="name">{contacts[0].name}</p>
            <p className="phone">{contacts[0].phone}</p>
            <p className="email">{contacts[0].email}</p>
          </div>
        </div>
        <div className="list">
          <div className="img-profile">
            <img src={contacts[1].photo} alt="" />
          </div>
          <div className="detail">
            <p className="name">{contacts[1].name}</p>
            <p className="phone">{contacts[1].phone}</p>
            <p className="email">{contacts[1].email}</p>
          </div>
        </div>
        <div className="list">
          <div className="img-profile">
            <img src={contacts[2].photo} alt="" />
          </div>
          <div className="detail">
            <p className="name">{contacts[2].name}</p>
            <p className="phone">{contacts[2].phone}</p>
            <p className="email">{contacts[2].email}</p>
          </div>
        </div>
        <div className="list">
          <div className="img-profile">
            <img src={contacts[3].photo} alt="" />
          </div>
          <div className="detail">
            <p className="name">{contacts[3].name}</p>
            <p className="phone">{contacts[3].phone}</p>
            <p className="email">{contacts[3].email}</p>
          </div>
        </div>
        <div className="list">
          <div className="img-profile">
            <img src={contacts[4].photo} alt="" />
          </div>
          <div className="detail">
            <p className="name">{contacts[4].name}</p>
            <p className="phone">{contacts[4].phone}</p>
            <p className="email">{contacts[4].email}</p>
          </div>
        </div>
        <div className="list">
          <div className="img-profile">
            <img src={contacts[5].photo} alt="" />
          </div>
          <div className="detail">
            <p className="name">{contacts[5].name}</p>
            <p className="phone">{contacts[5].phone}</p>
            <p className="email">{contacts[5].email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
