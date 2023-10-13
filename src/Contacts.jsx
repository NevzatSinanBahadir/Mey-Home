import React, { useEffect, useS } from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import Footer from "./Footer";
import MobilyaNavbar from "./MobilyaNavbar";



const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MobilyaNavbar />

     

      <div className="map" style={{marginTop:'74px'}}>
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20Yayla,%20Hastane%20Cd.%20No:34/7-8,%2032100%20Merkez/Isparta+(My%20Business%20Name)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ height: "450px", border: "0", width: "100%" }}
        ></iframe>
      </div>

      <br />
      <br />

      <div className="container text-center ">
       
            <h2 className="baslık">Bize Ulaşın</h2>
       
          <br />
          <a className="" target='_blank' href="https://www.google.com/maps/dir/39.944192,32.8466432/isparta+mobilya+mey+home+merkez+adres/@38.8510602,30.3809188,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14c5b519e07d2d53:0x1485f1c7f7fe762!2m2!1d30.552969!2d37.762102?entry=ttu">
          
          <div className="p-4 bg-white shadow-sm rounded-lg mx-auto hovercontact" style={{width:'400px'}}>
          <h5 class="baslık">
            <MdLocationPin style={{ color: 'red', fontSize: '25px' }} /> Adres
        </h5>
        <p class="card-text">Yayla, Hastane Cd. No:34/7-8, 32100 Merkez/Isparta</p>
        </div>
        </a>

<a className="" href="tel:905069293633">
 <div className="p-4 bg-white shadow-sm rounded-lg mx-auto mt-4 hovercontact" style={{width:'400px'}}>
        <h5 class="baslık">
            <BsFillTelephoneFill style={{ color: 'green', fontSize: '25px' }} /> Telefon
        </h5>
        <p class="card-text">0506 929 36 33</p>

        </div>
        </a>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    

      <Footer />
    </div>
  );
};

export default Contacts;
