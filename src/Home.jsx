import React,{useEffect} from "react";
import resim1 from "./images/couch.png";
import resim2 from "./images/product-1.png";
import resim3 from "./images/product-2.png";
import resim4 from "./images/product-3.png";
import resim5 from "./images/cross.svg";
import resim6 from "./images/truck.svg";
import resim7 from "./images/bag.svg";
import resim8 from "./images/support.svg";
import resim9 from "./images/return.svg";
import resim10 from "./images/why-choose-us-img.jpg";
import resim11 from "./images/img-grid-1.jpg";
import resim12 from "./images/img-grid-2.jpg";
import resim13 from "./images/img-grid-3.jpg";
import resim14 from "./images/person-1.jpg";
import resim15 from "./images/post-1.jpg";
import resim16 from "./images/post-2.jpg";
import resim17 from "./images/post-3.jpg";
import resim18 from "./images/sofa.png";
import resim19 from "./images/envelope-outline.svg";
import { GiSofa } from "react-icons/gi";
import oturmaGrubu from "./images/seater-sofa.png";
import kosetakimi from "./images/sofa1.png";
import koltuk from "./images/sofa2.png";
import tv from "./images/tv-unit.png";
import yemekGrubu from "./images/table.png";
import yatakOdasi from "./images/bedroom.png";
import sehpa from "./images/coffee-table.png";
import HomeSlider from "./HomeSlider";
import { NavLink } from "react-bootstrap";
import Footer from "./Footer";
import MobilyaNavbar from "./MobilyaNavbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   
    <div>
      <MobilyaNavbar />

      {/* <!-- Start Hero Section --> */}
      <HomeSlider />
      {/* <!-- End Hero Section --> */}

      {/* <!-- Start Product Section --> */}
      <div class="product-section">
        <div class="container">
          <div class="row">
            {/* <!-- Start Column 2 --> */}
            <div class="col-4 col-sm-3 col-lg-2 mb-5 mb-md-0">
              <a class="product-item">
                <NavLink href="/oturmagruplari">
                  <img src={oturmaGrubu} class="img-fluid product-thumbnail" />
                  <h3 class="product-title">Oturma Grupları</h3>

                  <span class="icon-cross">
                    <img src={resim5} class="img-fluid" />
                  </span>
                </NavLink>
              </a>
            </div>
            {/* <!-- End Column 2 --> */}

            {/* <!-- Start Column 3 --> */}
            <div class="col-4 col-sm-3 col-lg-2 mb-5 mb-md-0">
              <a class="product-item">
                <NavLink href="/kosetakimlari">
                  <img src={kosetakimi} class="img-fluid product-thumbnail" />
                  <h3 class="product-title">Köşe Takımları</h3>

                  <span class="icon-cross">
                    <img src={resim5} class="img-fluid" />
                  </span>
                </NavLink>
              </a>
            </div>
            {/* <!-- End Column 3 --> */}

            {/* <!-- Start Column 4 --> */}
            <div class="col-4 col-sm-3 col-lg-2 mb-5 mb-md-0">
              <a class="product-item">
                <NavLink href="/tvuniteleri">
                  <img src={tv} class="img-fluid product-thumbnail" />
                  <h3 class="product-title">Tv Üniteleri</h3>

                  <span class="icon-cross">
                    <img src={resim5} class="img-fluid" />
                  </span>
                </NavLink>
              </a>
            </div>
            <div class="col-4 col-sm-3 col-lg-2 mb-5 mb-md-0">
              <a class="product-item">
                <NavLink href="/yemekodalari">
                  <img src={yemekGrubu} class="img-fluid product-thumbnail" />
                  <h3 class="product-title">Yemek Odaları</h3>

                  <span class="icon-cross">
                    <img src={resim5} class="img-fluid" />
                  </span>
                </NavLink>
              </a>
            </div>

            <div class="col-4 col-sm-3 col-lg-2 mb-5 mb-md-0">
              <a class="product-item">
                <NavLink href="/yatakodalari">
                  <img src={yatakOdasi} class="img-fluid product-thumbnail" />
                  <h3 class="product-title">Yatak Odaları</h3>

                  <span class="icon-cross">
                    <img src={resim5} class="img-fluid" />
                  </span>
                </NavLink>
              </a>
            </div>
            <div class="col-4 col-sm-3 col-lg-2 mb-5 mb-md-0">
              <a class="product-item">
                <NavLink href="/sehpalar">
                  <img src={sehpa} class="img-fluid product-thumbnail" />
                  <h3 class="product-title">Sehpalar</h3>

                  <span class="icon-cross">
                    <img src={resim5} class="img-fluid" />
                  </span>
                </NavLink>
              </a>
            </div>
            {/* <!-- End Column 4 --> */}
          </div>
        </div>
      </div>
      {/* <!-- End Product Section --> */}
      {/* 
		<!-- Start Why Choose Us Section --> */}
      <div class="why-choose-section mobilYukseklik">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-6">
              <h2 class="section-title">Bizi Neden Seçmelisiniz</h2>
              <p>
                MEY HOME'da, evinizin her köşesine uygun, özgün ve kaliteli
                mobilyaları keşfetmek için sizi mağazamıza bekliyoruz.
              </p>

              <div class="row my-5">
                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={resim6} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Özgün Tasarımlar</h3>
                    <p>
                      Mobilyalarımız, modern ve klasik çizgilerin mükemmel
                      uyumunu yansıtarak, her zevke ve tarza hitap eden özgün
                      tasarımlara sahip.
                    </p>
                  </div>
                </div>

				<div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={resim8} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Sürdürülebilir Malzemeler</h3>
                    <p>
                      Doğayı ve çevreyi koruma bilinciyle ürettiğimiz
                      mobilyalarımız, sürdürülebilir kaynaklardan elde edilen
                      malzemelerle hazırlanıyor.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={resim7} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>El Yapımı Ustalık</h3>
                    <p>
                      Her bir mobilyamız, deneyimli ustalarımızın elinden
                      çıkarak, kalite ve dayanıklılığını uzun yıllar boyunca
                      koruyor.
                    </p>
                  </div>
                </div>

               

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={resim9} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Kişiye Özel Çözümler</h3>
                    <p>
                      Ev ya da ofisiniz için özel ölçü ve tasarımla mobilyalar
                      hazırlayarak, mekânınızın ruhuna uygun çözümler sunuyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <div class="img-wrap mobilfoto">
                <img src={resim10} alt="Image" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Why Choose Us Section --> */}
         {/* <!-- Start Blog Section --> */}
         <div class="blog-section">
        <div class="container">
          <div class="row 5">
            <div class="col-md-12">
              <h2 class="section-title">Sizin İçin Seçtiklerimiz</h2>
            </div>
          </div>

          <Swiper
            slidesPerView={1}
            navigation={true}
            className="mySwiper haber"
            modules={[Pagination, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1266: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
          >
            <SwiperSlide>
              <div class="card mt-5 " style={{borderRadius:'20px'}}>
                <img src="https://www.mobilyaminegolden.com/deniz-koltuk-takimi-krem-kiremit-chester-inegol-mobilya-0-101827-79-B.jpg" style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px',maxHeight:'200px', minHeight:'200px'}} class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Koltuk Takımı</h5>
                  <div className="d-flex justify-content-between">
                    <p class="card-text">Üçlü Koltuk</p>
                    <div>
                      <p class="card-text border px-2">32.000 ₺</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
			<div class="card mt-5 " style={{borderRadius:'20px'}}>
                <img src="https://www.alfemo.com.tr/images/thumbs/0007631_palermo-kose-takimi_1440.jpeg" style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px',maxHeight:'200px', minHeight:'200px'}} class="card-img-top img-fluid" />
                <div class="card-body">
                  <h5 class="card-title">Köşe Takımı</h5>
                  <div className="d-flex justify-content-between">
                    <p class="card-text">Üçlü Köşe Takımı</p>
                    <div>
                      <p class="card-text border px-2">29.000 ₺</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
			<div class="card mt-5 " style={{borderRadius:'20px'}}>
                <img src="https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/new-morten-tv-unitesi-5dc6dc.jpg" style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px',maxHeight:'200px', minHeight:'200px'}} class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Tv Unitesi</h5>
                  <div className="d-flex justify-content-between">
                    <p class="card-text">Tv Ünitesi</p>
                    <div>
                      <p class="card-text border px-2">25.000 ₺</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
			<div class="card mt-5 " style={{borderRadius:'20px'}}>
                <img src="https://ideacdn.net/idea/kc/78/myassets/products/961/https-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-28.jpg?revision=1693987862" style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px',maxHeight:'200px', minHeight:'200px'}} class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Yemek Takımı</h5>
                  <div className="d-flex justify-content-between">
                    <p class="card-text">Yemek Takımı</p>
                    <div>
                      <p class="card-text border px-2">26.800 ₺</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
			<SwiperSlide>
			<div class="card mt-5 " style={{borderRadius:'20px'}}>
                <img src="https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/perla-yatak-odasi-takimi-ceviz-382bc-.jpg" style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px',maxHeight:'200px', minHeight:'200px'}} class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Yatak Odası Takımı</h5>
                  <div className="d-flex justify-content-between">
                    <p class="card-text">Yatak Odası Takımı</p>
                    <div>
                      <p class="card-text border px-2">25.670 ₺</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

			<SwiperSlide>
			<div class="card mt-5 " style={{borderRadius:'20px'}}>
                <img src="https://www.mobilyaminegolden.com/deniz-koltuk-takimi-krem-kiremit-chester-inegol-mobilya-0-101827-79-B.jpg" style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px',maxHeight:'200px', minHeight:'200px'}} class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Koltuk Takımı</h5>
                  <div className="d-flex justify-content-between">
                    <p class="card-text">Üçlü Koltuk</p>
                    <div>
                      <p class="card-text border px-2">22.000 ₺</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <!-- End Blog Section -->	 */}

      {/* <!-- Start We Help Section --> */}
      <div class="we-help-section">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-7 mb-5 mb-lg-0">
              <div class="imgs-grid">
                <div class="grid grid-1">
                  <img src={resim11} alt="Untree.co" />
                </div>
                <div class="grid grid-2">
                  <img src={resim12} alt="Untree.co" />
                </div>
                <div class="grid grid-3">
                  <img src={resim13} alt="Untree.co" />
                </div>
              </div>
            </div>
            <div class="col-lg-5 ps-lg-5">
              <h2 class="section-title mb-4">
                Modern İç Tasarım Yapmanıza Yardımcı Oluyoruz
              </h2>
              <p>
                Evler, yaşam alanları sadece dört duvar ve bir çatıdan ibaret
                değildir. Her ev, onu kuranların tarzını, kişiliğini ve hayat
                felsefesini yansıtır. Modern iç tasarım, fonksiyonellikle
                estetiği bir araya getirerek hayatınızı yansıtan benzersiz
                mekânlar yaratmanıza yardımcı olur. İşte bizim yaklaşımımızın
                anahtar unsurları
              </p>

              <ul class="list-unstyled custom-list my-4">
                <li>
                  <strong>Fonksiyonel Estetik</strong> <br /> Modern tasarım,
                  sadece güzellik değil, aynı zamanda kullanışlılıkla da
                  ilgilidir. Her parça hem şık hem de işlevsel olmalıdır.
                </li>
                <li>
                  <strong>Açık Alanlar</strong>
                  <br /> Modern iç tasarım, mekanları geniş ve ferah tutarak
                  doğal ışığın bolca alınmasını teşvik eder.
                </li>
                <li>
                  <strong>Minimalist Yaklaşım</strong>
                  <br /> Minimalizm, sıklıkla "daha az eşya, daha çok yaşam"
                  prensibiyle özetlenen bir yaşam ve tasarım felsefesidir. Sade
                  ve fonksiyonel mekanlar yaratmanızı sağlar.
                </li>

                <li>
                  <strong>Doğal Malzemeler</strong>
                  <br /> Ahşap, taş ve metal gibi doğal malzemelerin kullanımı,
                  modern mekanlara sıcaklık ve otantik bir dokunuş katar.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End We Help Section --> */}

   

      {/* <!-- Start Footer Section --> */}
      <Footer />
      {/* <!-- End Footer Section -->	 */}
    </div>
  );
};

export default Home;
