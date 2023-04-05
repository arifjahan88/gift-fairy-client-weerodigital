import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="pt-28">
      <section className="bg-white max-w-[1234px] mx-auto">
        <div className="py-8 lg:py-16 px-4">
          <div>
            <h2 className="lg:text-4xl font-bold text-center text-xl">
              CONTACT <span className="text-blue-600">US</span>
            </h2>
            <div className="w-1/3 mx-auto border mt-5 border-slate-500 opacity-50"></div>
          </div>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl max-w-screen-md mx-auto mt-4">
            Want to send feedback about us or join Us? Need details about our Next plan? <br /> Let
            us know.
          </p>
          <div className="grid lg:grid-cols-3 gap-7">
            <div className="lg:col-span-2">
              <form className="space-y-8 shadow-xl p-5 rounded-2xl bg-gray-50 border">
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="name@ieee.org"
                    required
                  />
                </div>
                <div>
                  <label for="subject" className="block mb-2 text-sm font-medium text-gray-900">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label for="message" className="block mb-2 text-sm font-medium text-gray-900">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Leave your message. . . ."
                    required
                  ></textarea>
                  <input type="submit" value="Send Message" className="btn mt-5" />
                </div>
              </form>
            </div>
            <div className="text-center p-3 font-light">
              <div>
                <GrMapLocation className="text-6xl opacity-60 flex items-center w-full" />
                <h1 className="text-xl font-bold">Our Address</h1>
                <p>Address</p>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div className="divider"></div>
              <div>
                <MdEmail className="text-6xl opacity-60 flex items-center w-full" />
                <h1 className="text-xl font-bold">Email Address</h1>
                <p>Email :</p>
              </div>
              <div className="divider"></div>
              <div>
                <FaPhoneSquareAlt className="text-6xl opacity-60 flex items-center w-full" />
                <h1 className="text-xl font-bold">Any Queries</h1>
                <p>Phone :</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
