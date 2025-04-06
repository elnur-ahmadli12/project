import React from 'react';
import {
  FaDribbble,
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-800 py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 text-gray-300'>
        {/* Sol Taraf: Logo ve Sosyal Medya */}
        <div>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Driving License Renewal.</h1>
          <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} className='hover:text-[#00df9a] cursor-pointer' />
            <FaDribbble size={30} className='hover:text-[#00df9a] cursor-pointer' />
            <FaGithubSquare size={30} className='hover:text-[#00df9a] cursor-pointer' />
            <FaTwitterSquare size={30} className='hover:text-[#00df9a] cursor-pointer' />
            <FaInstagramSquare size={30} className='hover:text-[#00df9a] cursor-pointer' />
          </div>
        </div>

        {/* Sağ Taraf: Bağlantılar */}
        <div className='lg:col-span-2 flex justify-between mt-5'>
          {/* Home */}
          <div>
            <h6 className='font-medium text-gray-400'>Home</h6>
            <ul>
              <li className='py-2 text-sm hover:text-[#00df9a] cursor-pointer'>About Us</li>
              <li className='py-2 text-sm hover:text-[#00df9a] cursor-pointer'>Services</li>
              <li className='py-2 text-sm hover:text-[#00df9a] cursor-pointer'>Blog</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
              <li className='py-2 text-sm hover:text-[#00df9a] cursor-pointer'>Careers</li>
              <li className='py-2 text-sm hover:text-[#00df9a] cursor-pointer'>Partners</li>
              <li className='py-2 text-sm hover:text-[#00df9a] cursor-pointer'>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className='font-medium text-gray-400'>Contact</h6>
            <ul>
              <li className='py-2 text-sm hover:text-[#00df9a] cursor-pointer'>Email Us</li>
              <li className='py-2 text-sm hover:text-[#00df9a] cursor-pointer'>Call Us</li>
              <li className='py-2 text-sm hover:text-[#00df9a] cursor-pointer'>Visit Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;