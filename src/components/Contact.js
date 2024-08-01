import React from "react";
import { contactData } from "../utlis/data";

const Contact = () => {
  return (
    <>
      <div className="bg-green-100">
        <div className="py-20">
          <div className="text-center">
            <button className="border border-black text-center px-4 py-2 rounded-full font-bold text-xl">
              Get In Touch
            </button>
            <h1 className="text-4xl text-green-800 font-bold py-4">
              Let's Keep In Touch
            </h1>
            <p>
              Malesuada fames ac turpis egestas maecenas pharetra convallis
              posuere. Gravida quis blandit turpis cursus. <br /> Quam nulla
              porttitor massa id neque aliquam vestibulum morbi
            </p>
          </div>

          <div className="mx-40">
            <div className="row">
              {contactData.map((contact) => {
                return (
                  <div className="col-md-4 text-center pt-4">
                    <div className="border-2 border-green-900 rounded-lg py-3">
                      <h2 className="text-xl font-bold text-green-800">
                        {contact.name}
                      </h2>
                      <p>{contact.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-40 my-20">
              <div className="row flex justify-between">
                <div className="col-md-6">
                  <input type="text" placeholder="First Name" className="w-full py-3 px-2 border border-black rounded-lg" />
                </div>
                <div className="col-md-6">
                <input type="text" placeholder="Last Name" className="w-full py-3 px-2 border border-black rounded-lg" />
                </div>
              </div>

              <input type="text" placeholder="Email Address" className="w-full my-2 py-3 px-2 border border-black rounded-lg" />
              <textarea placeholder="Input Message Here." className="w-full px-2 border border-black rounded-lg"/>
              <button className="w-full bg-green-900 text-white py-3 rounded-full text-xl">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
