import React, { useContext,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { YatakOdalariContext } from './productContext';
import Footer from './Footer';
import MobilyaNavbar from './MobilyaNavbar';
 
const YatakOdasiDetay = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    let { id } = useParams();
    const [products] = useContext(YatakOdalariContext);
    id = parseInt(id, 10); // String olarak gelen id'yi sayıya dönüştür

    // ... Ürünleri burada alın veya bir üst bileşenden prop olarak alın
  
    const product = products.find(p => p.id === id);
  return (
    <>
       <MobilyaNavbar/>
    <div style={{marginTop:'60px'}}>
     
         <div className='container'>

      

      {product ? (
        <>
         <div className='row'>
 
        <div className='col-md-6 col-lg-12' >
           
                <div class="card mt-5 shadow-sm ">
                    <img src={product.photo} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">{product.title}</h5>
                        <div className='d-flex justify-content-between'>
                            <p class="card-text">{product.description}</p>
                            <div>
                                <p class="card-text border px-2">{product.price} ₺</p>
                            </div>
                        </div>
                    </div>
                </div>
           
        </div>
  
</div>

        </>
      ) : (
        <p>Ürün bulunamadı.</p>
      )}
    </div > 
    <div style={{marginTop:'200px'}}>
    <Footer/>
    </div>
    </div>
    </>
  )
}

export default YatakOdasiDetay