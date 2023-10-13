import React,{useEffect} from 'react'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import MobilyaNavbar from './MobilyaNavbar'


const OturmaGrubu = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const products = [
        {
        id:1,
        photo:"https://www.mobilyaminegolden.com/deniz-koltuk-takimi-krem-kiremit-chester-inegol-mobilya-0-101827-79-B.jpg",
        title:"Koltuk Takımı",
        description:"Üçlü Koltuk Takımı",
        price:"10.000,00",
        
    },
    {
        id:2,
        photo:"https://www.mobilyaminegolden.com/deniz-koltuk-takimi-krem-kiremit-chester-inegol-mobilya-0-101827-79-B.jpg",
        title:"Koltuk Takımı",
        description:"Üçlü Koltuk Takımı",
        price:"10.000,00",
        
    },
    {
        id:3,
        photo:"https://www.mobilyaminegolden.com/deniz-koltuk-takimi-krem-kiremit-chester-inegol-mobilya-0-101827-79-B.jpg",
        title:"Koltuk Takımı",
        description:"Üçlü Koltuk Takımı",
        price:"10.000,00",
        
    },
    {
        id:4,
        photo:"https://www.mobilyaminegolden.com/deniz-koltuk-takimi-krem-kiremit-chester-inegol-mobilya-0-101827-79-B.jpg",
        title:"Koltuk Takımı",
        description:"Üçlü Koltuk Takımı",
        price:"10.000,00",
        
    },
    {
        id:5,
        photo:"https://www.mobilyaminegolden.com/deniz-koltuk-takimi-krem-kiremit-chester-inegol-mobilya-0-101827-79-B.jpg",
        title:"Koltuk Takımı",
        description:"Üçlü Koltuk Takımı",
        price:"10.000,00",
        
    },
    {
        id:6,
        photo:"https://www.mobilyaminegolden.com/deniz-koltuk-takimi-krem-kiremit-chester-inegol-mobilya-0-101827-79-B.jpg",
        title:"Koltuk Takımı",
        description:"Üçlü Koltuk Takımı",
        price:"10.000,00",
        
    },
    {
        id:7,
        photo:"https://www.mobilyaminegolden.com/deniz-koltuk-takimi-krem-kiremit-chester-inegol-mobilya-0-101827-79-B.jpg",
        title:"Koltuk Takımı",
        description:"Üçlü Koltuk Takımı",
        price:"10.000,00",
        
    },
    {
        id:8,
        photo:"https://www.mobilyaminegolden.com/deniz-koltuk-takimi-krem-kiremit-chester-inegol-mobilya-0-101827-79-B.jpg",
        title:"Koltuk Takımı",
        description:"Üçlü Koltuk Takımı",
        price:"10.000,00",
        
    },
]
  return (
    <div>
   <MobilyaNavbar/>
<div className='container' style={{marginTop:'60px'}}>
      
          
       
<div className='row'>
    {products.map((doc, index) => (
        <div className='col-md-6 col-lg-4' key={index}>
            <NavLink to={`/oturmagruplari/${doc.id}`}>
                <div class="card mt-5 shadow-sm golge">
                    <img src={doc.photo} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">{doc.title}</h5>
                        <div className='d-flex justify-content-between'>
                            <p class="card-text">{doc.description}</p>
                            <div>
                                <p class="card-text border px-2">{doc.price} ₺</p>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    ))}
</div>


      
    


      


   

         
         

           
        </div>
        <div style={{marginTop:'190px'}}>
        <Footer/>
        </div>
       
    </div>
  )
}

export default OturmaGrubu