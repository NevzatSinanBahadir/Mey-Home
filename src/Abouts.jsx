import React from 'react'
import './style.scss';
import mobilya from './images/mobilya4.png'
import resim1 from './images/truck.svg'
import resim2 from './images/bag.svg'
import resim3 from './images/support.svg'
import resim4 from './images/return.svg'
import resim5 from './images/why-choose-us-img.jpg'
import resim6 from './images/couch.png'
import Navbar from './Navbarr';
import hakkimizdakoltuk from './images/koltukk.png'

const Abouts = () => {
  return (
    <div>
          <div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Hakkımızda</h1>
								<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" class="btn btn-secondary me-2">Shop Now</a><a href="#" class="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div class="col-lg-7">
							
								<img src="https://static.ticimax.cloud/52460/uploads/urunresimleri/buyuk/divan-l-koltuk-mint-mese--5344b.png" className="img-fluid" />
						
						</div>
					</div>
				</div>
			</div>


      <div class="why-choose-section">
			<div class="container">
				<div class="row justify-content-between align-items-center">
					<div class="col-lg-6">
						<h2 class="section-title">Neden Bizi Seçmelisiniz?</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<div class="row my-5">
							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={resim1} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Hızlı ve Ücretsiz Kargo</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={resim2} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Alışveriş Kolaylığı</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={resim3} alt="Image" class="imf-fluid"/>
									</div>
									<h3>7/24 Destek</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={resim4} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Sorunsuz İade</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

						</div>
					</div>

					<div class="col-lg-5">
						<div class="img-wrap">
							<img src={resim5} alt="Image" class="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
		</div>
    </div>
  )
}

export default Abouts