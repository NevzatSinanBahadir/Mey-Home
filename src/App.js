import './style.scss';
import './App.css';
import mobilya from './images/mobilya4.png'
import resim1 from './images/truck.svg'
import resim2 from './images/bag.svg'
import resim3 from './images/support.svg'
import resim4 from './images/return.svg'
import resim5 from './images/why-choose-us-img.jpg'
import resim6 from './images/couch.png'
import Navbarr from './Navbarr';
import Abouts from './Abouts';
import Home from './Home';
import {Routes, Route,  BrowserRouter} from 'react-router-dom'
import OturmaGrubuDetay from './OturmaGrubuDetay';
import OturmaGrubu from './OturmaGrubu';
import { ProductsProvider } from './productContext.js';
import MobilyaNavbar from './MobilyaNavbar';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import  support  from './images/customer-service.png';
import Contacts from './Contacts';
import KoseTakimlari from './KoseTakimlari';
import KoseTakimlariDetay from './KoseTakimlariDetay';
import TvUniteleri from './TvUniteleri';
import TvUniteleriDetay from './TvUniteleriDetay';
import YemekTakimiDetay from './YemekTakimiDetay';
import YemekTakimi from './YemekTakimi';
import YatakOdasiDetay from './YatakOdasiDetay';
import YatakOdasi from './YatakOdasi';
import SehpalarDetay from './SehpalarDetay';
import Sehpalar from './Sehpalar';


function App() {
  return (
	<>


  <ProductsProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/oturmagruplari' element={<OturmaGrubu />} />
                    <Route path='/kosetakimlari' element={<KoseTakimlari />} />
                    <Route path='/tvuniteleri' element={<TvUniteleri />} />
                    <Route path='/yemekodalari' element={<YemekTakimi />} />
                    <Route path='/yatakodalari' element={<YatakOdasi />} />
                    <Route path='/sehpalar' element={<Sehpalar />} />
                    <Route path='/iletisim' element={<Contacts />} />
                    <Route path='/oturmagruplari/:id' element={<OturmaGrubuDetay />} />
                    <Route path='/kosetakimlari/:id' element={<KoseTakimlariDetay />} />
                    <Route path='/tvuniteleri/:id' element={<TvUniteleriDetay />} />
                    <Route path='/yemekodalari/:id' element={<YemekTakimiDetay />} />
                    <Route path='/yatakodalari/:id' element={<YatakOdasiDetay />} />
                    <Route path='/sehpalar/:id' element={<SehpalarDetay />} />
                </Routes>
            </BrowserRouter>
        </ProductsProvider>

        <FloatingWhatsApp placeholder="Bir Mesaj Yazın" chatMessage="MEY HOME destek hattına hoşgeldiniz. Nasıl yardımcı olabiliriz ? " accountName="MEY HOME" phoneNumber="+905069293633" avatar={support} statusMessage="Çevrimiçi" />
       
	  </>
  );
}

export default App;
