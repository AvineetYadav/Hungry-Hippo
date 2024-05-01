import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";

const Footer = () => {
  return (
    <div className="flex flex-wrap bg-black  text-white justify-around w-full  p-10">
      <div className="flex flex-col">
        <div className="flex justify-around">
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/avineet-yadav-10068a289/"
          >
            <img src={linkedin} alt="linkedin" className="w-7 h-7" />
          </Link>
          <Link target="_blank" to="https://github.com/AvineetYadav">
            <img src={github} alt="github" className="w-7 h-7" />
          </Link>
          <Link target="_blank" to="https://www.instagram.com/avineet_05/?next=%2F">
            <img src={instagram} alt="instagram" className="w-7 h-7" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col p-14">
        <h1 className="text-xl font-bold leading-loose">Company</h1>
        <p className="leading-loose">About</p>
        <p className="leading-loose">Careers</p>
        <p className="leading-loose">Team</p>
        <p className="leading-loose">Swiggy One</p>
        <p className="leading-loose">Swiggy Instamart</p>
        <p className="leading-loose">Swiggy Genie</p>
      </div>
      <div className="flex flex-col p-14">
        <div>
          <h1 className="text-xl font-bold leading-loose">Contact us</h1>
          <p className="leading-loose">Help & Support</p>
          <p className="leading-loose">Partner with us</p>
          <p className="leading-loose">Ride with us</p>
        </div>
        <div className="flex flex-col mt-10">
          <h1 className="text-xl font-bold leading-loose">Legal</h1>
          <p className="leading-loose">Terms & Conditions</p>
          <p className="leading-loose">Cookie Policy</p>
          <p className="leading-loose">Privacy Policy</p>
        </div>
      </div>
      <div className="flex flex-col p-14">
        <h1 className="text-xl font-bold leading-loose">We deliver to:</h1>
        <p className="leading-loose">Bangalore</p>
        <p className="leading-loose">Gurgaon</p>
        <p className="leading-loose">Hyderabad</p>
        <p className="leading-loose">Delhi</p>
        <p className="leading-loose">Mumbai</p>
        <p className="leading-loose">Pune</p>
        <button className="leading-loose border px-4 rounded-lg mt-2">
          590 cities &nbsp; &nbsp;
        </button>
      </div>
    </div>
  );
};

export default Footer;
