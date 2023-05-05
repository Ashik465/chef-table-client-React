import React from 'react';
import { FaFacebook, FaTwitter,FaInstagram,FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-[#292726]  '>
            <footer className="container mx-auto text-gray-300 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
    <div className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:pr-4">
      <h2 className="text-2xl font-bold mb-2 ">About Us</h2>
      <p className="text-sm">We are a community of chefs dedicated to sharing our passion for cooking and providing delicious recipes for everyone to enjoy.</p>
    </div>
    <div className="w-full lg:w-1/3 mb-4 lg:mb-0 ">
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <ul className="text-sm">
        <li>Email: info@chefrecipes.com</li>
        <li>Phone: (555) 555-5555</li>
        <li>Address: 123 Main St, Anytown USA</li>
      </ul>
    </div>
    <div className="w-full lg:w-1/3">
      <h2 className="text-2xl font-bold mb-2">Follow Us</h2>
      <ul className="flex space-x-4 text-sm">
        <li><Link  className="hover:text-gray-500 text-3xl"><FaFacebook></FaFacebook></Link></li>
        <li><Link  className="hover:text-gray-500 text-3xl"><FaTwitter></FaTwitter></Link></li>
        <li><Link  className="hover:text-gray-500 text-3xl"><FaInstagram></FaInstagram></Link></li>
        <li><Link  className="hover:text-gray-500 text-3xl "><FaYoutube></FaYoutube></Link></li>
      </ul>
      
    </div>
  </div>
  <div className="mt-8 text-sm text-gray-500 flex justify-center">
    <p>&copy; 2023 Chef's Table. All rights reserved.</p>
  </div>
</footer>

        </div>
    );
};

export default Footer;