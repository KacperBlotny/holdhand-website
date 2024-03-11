import React from "react";
import logo from "../../assets/logo/Logo-01.png";
import ContactUs from "../ContactUs";

function Footer() {
  return (
    <>
      <div className="h-px w-screen bg-gray-400"></div>
      <div className="flex flex-col p-8" id="contact">
        <div className="container mx-auto grid grid-cols-1 justify-evenly gap-16 pt-8 2xl:grid-cols-3">
          <div className="flex flex-col">
            <div className=" border-b-2">
              <img src={logo} alt="" className="w-64" />
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.582471513147!2d22.552792912951386!3d51.24518402970656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722576f4e652da7%3A0xb29221830bc9b796!2sOkopowa%208%2C%2020-400%20Lublin!5e0!3m2!1spl!2spl!4v1710007037420!5m2!1spl!2spl"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-4 w-full pt-4 sm:w-[470px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            ></iframe>
          </div>
          <div className="flex flex-col">
            <div className="flex h-[58px] items-center border-b-2 text-3xl">
              Dane firmy
            </div>
            <ul className="mt-4 flex flex-col gap-2 pl-4 pt-[10px] h-[300px]">
              <li>HOLDHAND sp. z o. o.</li>
             
              <li className='flex pt-4'><p className='w-[75px]'>KRS: </p>0001078682</li>
              <li className='flex'><p className='w-[75px]'>NIP: </p>7123467590</li>
              <li className='flex pb-4'><p className='w-[75px]'>REGON: </p>527332599</li>
              <li>Okopowa 8, 20-022 Lublin</li>
              <li className="group flex cursor-pointer text-xl mt-auto">
                <i className="fa-brands fa-linkedin flex cursor-pointer items-center pr-2 hover:text-normalHover group-hover:text-normalHover"></i>
                <p className="">Linkedin</p>
              </li>
              <li className="group flex cursor-pointer text-xl">
                <i className="fa-solid fa-envelope flex cursor-pointer items-center pr-2 hover:text-normalHover group-hover:text-normalHover"></i>
                <p className="">mail</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-full">
            <div
              className="flex h-[58px] items-center border-b-2 text-3xl"
              id="contact"
            >
              Kontakt
            </div>
            <ul className="mr-auto mt-4 flex flex-col gap-2 pt-[10px] w-full">
       
              <li>
              <ContactUs />
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto flex pt-16">
          &copy; Copyright {new Date().getFullYear()}, Holdhand, All rights
          reserved
        </div>
      </div>
    </>
  );
}

export default Footer;
