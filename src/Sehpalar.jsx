import React,{useEffect,useContext} from 'react'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import MobilyaNavbar from './MobilyaNavbar'
import { SehpalarContext } from './productContext';


const Sehpalar = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const [sehpalar] = useContext(SehpalarContext);


  return (
    <div>
   <MobilyaNavbar/>
<div className='container' style={{marginTop:'60px'}}>
      
          
       
<div className='row'>
    {sehpalar.map((doc, index) => (
        <div className='col-md-6 col-lg-4' key={index}>
            <NavLink to={`/sehpalar/${doc.id}`}>
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

export default Sehpalar