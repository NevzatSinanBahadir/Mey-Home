import React from 'react'
import resim18 from './images/sofa.png'
import resim19 from './images/envelope-outline.svg'
import {AiOutlineInstagram,AiOutlinePhone} from 'react-icons/ai'
import {BiMap} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <div >
         {/* <!-- Start Footer Section --> */}
         <footer class="footer-section">
			<div class="container relative">

				<div class="sofa-img">
					<img src={resim18} alt="Image" class="img-fluid" style={{marginTop:'-110px'}}/>
				</div>

				
				<div class="row g-5 mt-5" >
					<div class="col-lg-4"  >
						<div class=" footer-logo-wrap" style={{marginTop:'45px'}}><a href="#" class="footer-logo">MEY HOME</a></div>
						<p class="">Hayalinizdeki modern yaşam alanını oluşturmak için bizimle birlikte adım adım ilerleyin. Size rehberlik etmek, ilham vermek ve en önemlisi evinizi bir sanat eserine dönüştürmek için buradayız.</p>

						<ul class="list-unstyled custom-social" style={{marginTop:'-5px'}}>
							<li><a target='_blank' href="https://www.instagram.com/meyyhome/"><AiOutlineInstagram style={{fontSize:'24px',}}/></a></li>
							<li><a target='_blank' href="https://www.google.com/maps/dir/39.944192,32.8466432/isparta+mobilya+mey+home+merkez+adres/@38.8510602,30.3809188,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14c5b519e07d2d53:0x1485f1c7f7fe762!2m2!1d30.552969!2d37.762102?entry=ttu"><BiMap style={{fontSize:'24px',}}/></a></li>
							<li><a href="tel:905069293633"><AiOutlinePhone style={{fontSize:'24px'}}/></a></li>
							
							
						</ul>
					</div>

					<div class="col-lg-8">
						<div class="row links-wrap justify-content-end">	
							

							<div class="col-12 col-sm-12 col-md-4">
								<ul class="list-unstyled">
									<li><NavLink to="/">Anasayfa</NavLink></li>
									<li><NavLink to="/iletisim">İletişim</NavLink></li>
									
								</ul>
							</div>

							<div class="col-12 col-sm-12 col-md-4">
								<ul class="list-unstyled">
									<li><a target='_blank' href="https://www.google.com/maps/dir/39.944192,32.8466432/isparta+mobilya+mey+home+merkez+adres/@38.8510602,30.3809188,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14c5b519e07d2d53:0x1485f1c7f7fe762!2m2!1d30.552969!2d37.762102?entry=ttu"> Yayla, Hastane Cd. No:34/7-8, 32100 Merkez/Isparta</a></li>
									<li><a href="tel:905069293633">0506 929 36 33</a></li>

									
								</ul>
							</div>

						
						</div>
					</div>

				</div>

				<div class="border-top copyright">
					
				</div>

			</div>
		</footer>
		{/* <!-- End Footer Section -->	 */}

    </div>
  )
}

export default Footer