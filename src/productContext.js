// productsContext.js
import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();
export const KoseTakimiContext = createContext();
export const TvUnitesiContext = createContext();
export const YemekTakimiContext = createContext();
export const YatakOdalariContext = createContext();
export const SehpalarContext = createContext();


export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([
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
    ]);

    const [koseTakimi, setKoseTakimi] = useState([
        {
            id:1,
            photo:"https://www.alfemo.com.tr/images/thumbs/0007631_palermo-kose-takimi_1440.jpeg",
            title:"Köşe Takımı",
            description:"Üçlü Köşe Takımı",
            price:"10.000,00",
            
        },
        {
            id:2,
            photo:"https://www.alfemo.com.tr/images/thumbs/0007631_palermo-kose-takimi_1440.jpeg",
            title:"Köşe Takımı",
            description:"Üçlü Köşe Takımı",
            price:"10.000,00",
            
        },
        {
            id:3,
            photo:"https://www.alfemo.com.tr/images/thumbs/0007631_palermo-kose-takimi_1440.jpeg",
            title:"Köşe Takımı",
            description:"Üçlü Köşe Takımı",
            price:"10.000,00",
            
        },
        {
            id:4,
            photo:"https://www.alfemo.com.tr/images/thumbs/0007631_palermo-kose-takimi_1440.jpeg",
            title:"Köşe Takımı",
            description:"Üçlü Köşe Takımı",
            price:"10.000,00",
            
        },
        {
            id:5,
            photo:"https://www.alfemo.com.tr/images/thumbs/0007631_palermo-kose-takimi_1440.jpeg",
            title:"Köşe Takımı",
            description:"Üçlü Köşe Takımı",
            price:"10.000,00",
            
        },
        {
            id:6,
            photo:"https://www.alfemo.com.tr/images/thumbs/0007631_palermo-kose-takimi_1440.jpeg",
            title:"Köşe Takımı",
            description:"Üçlü Köşe Takımı",
            price:"10.000,00",
            
        },
        {
            id:7,
            photo:"https://www.alfemo.com.tr/images/thumbs/0007631_palermo-kose-takimi_1440.jpeg",
            title:"Köşe Takımı",
            description:"Üçlü Köşe Takımı",
            price:"10.000,00",
            
        },
        {
            id:8,
            photo:"https://www.alfemo.com.tr/images/thumbs/0007631_palermo-kose-takimi_1440.jpeg",
            title:"Köşe Takımı",
            description:"Üçlü Köşe Takımı",
            price:"10.000,00",
            
        },
    ]);

    const [TvUnitesi, setTvUnitesi] = useState([
        {
            id:1,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/new-morten-tv-unitesi-5dc6dc.jpg",
            title:"Tv Unitesi",
            description:"Üçlü Tv Unitesi",
            price:"20.000,00",
         
        },
        {
            id:2,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/new-morten-tv-unitesi-5dc6dc.jpg",
            title:"Tv Unitesi",
            description:"Üçlü Tv Unitesi",
            price:"20.000,00",
        
        },
        {
            id:3,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/new-morten-tv-unitesi-5dc6dc.jpg",
            title:"Tv Unitesi",
            description:"Üçlü Tv Unitesi",
            price:"20.000,00",
        
        },
        {
            id:4,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/new-morten-tv-unitesi-5dc6dc.jpg",
            title:"Tv Unitesi",
            description:"Üçlü Tv Unitesi",
            price:"20.000,00",
        
        },
        {
            id:5,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/new-morten-tv-unitesi-5dc6dc.jpg",
            title:"Tv Unitesi",
            description:"Üçlü Tv Unitesi",
            price:"20.000,00",
         
        },
        {
            id:6,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/new-morten-tv-unitesi-5dc6dc.jpg",
            title:"Tv Unitesi",
            description:"Üçlü Tv Unitesi",
            price:"20.000,00",
         
        },
        {
            id:7,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/new-morten-tv-unitesi-5dc6dc.jpg",
            title:"Tv Unitesi",
            description:"Üçlü Tv Unitesi",
            price:"20.000,00",
         
        },
        {
            id:8,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/new-morten-tv-unitesi-5dc6dc.jpg",
            title:"Tv Unitesi",
            description:"Üçlü Tv Unitesi",
            price:"20.000,00",
         
        },
    ]);


    const [yemekTakimi, setYemekTakimi] = useState([
        {
            id:1,
            photo:"https://ideacdn.net/idea/kc/78/myassets/products/961/https-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-28.jpg?revision=1693987862",
            title:"Yemek Takımı",
            description:"Yemek Takımı",
            price:"30.890,99",
         
        },
        {
            id:2,
            photo:"https://ideacdn.net/idea/kc/78/myassets/products/961/https-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-28.jpg?revision=1693987862",
            title:"Yemek Takımı",
            description:"Yemek Takımı",
            price:"30.890,99",
        
        },
        {
            id:3,
            photo:"https://ideacdn.net/idea/kc/78/myassets/products/961/https-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-28.jpg?revision=1693987862",
            title:"Yemek Takımı",
            description:"Yemek Takımı",
            price:"30.890,99",
        
        },
        {
            id:4,
            photo:"https://ideacdn.net/idea/kc/78/myassets/products/961/https-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-28.jpg?revision=1693987862",
            title:"Yemek Takımı",
            description:"Yemek Takımı",
            price:"30.890,99",
        
        },
        {
            id:5,
            photo:"https://ideacdn.net/idea/kc/78/myassets/products/961/https-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-28.jpg?revision=1693987862",
            title:"Yemek Takımı",
            description:"Yemek Takımı",
            price:"30.890,99",
         
        },
        {
            id:6,
            photo:"https://ideacdn.net/idea/kc/78/myassets/products/961/https-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-28.jpg?revision=1693987862",
            title:"Yemek Takımı",
            description:"Yemek Takımı",
            price:"30.890,99",
         
        },
        {
            id:7,
            photo:"https://ideacdn.net/idea/kc/78/myassets/products/961/https-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-28.jpg?revision=1693987862",
            title:"Yemek Takımı",
            description:"Yemek Takımı",
            price:"30.890,99",
         
        },
        {
            id:8,
            photo:"https://ideacdn.net/idea/kc/78/myassets/products/961/https-bellona-mncdn-com-mnresize-1280-720-img-image-tr-58mtg8015ldld-28.jpg?revision=1693987862",
            title:"Yemek Takımı",
            description:"Yemek Takımı",
            price:"30.890,99",
         
        },
    ]);


    const [yatakOdalari, setYatakOdalari] = useState([
        {
            id:1,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/perla-yatak-odasi-takimi-ceviz-382bc-.jpg",
            title:"Yatak Odaları",
            description:"Yatak Odaları",
            price:"24.689,92",
         
        },
        {
            id:2,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/perla-yatak-odasi-takimi-ceviz-382bc-.jpg",
            title:"Yatak Odaları",
            description:"Yatak Odaları",
            price:"24.689,92",
        
        },
        {
            id:3,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/perla-yatak-odasi-takimi-ceviz-382bc-.jpg",
            title:"Yatak Odaları",
            description:"Yatak Odaları",
            price:"24.689,92",
        
        },
        {
            id:4,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/perla-yatak-odasi-takimi-ceviz-382bc-.jpg",
            title:"Yatak Odaları",
            description:"Yatak Odaları",
            price:"24.689,92",
        
        },
        {
            id:5,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/perla-yatak-odasi-takimi-ceviz-382bc-.jpg",
            title:"Yatak Odaları",
            description:"Yatak Odaları",
            price:"24.689,92",
         
        },
        {
            id:6,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/perla-yatak-odasi-takimi-ceviz-382bc-.jpg",
            title:"Yatak Odaları",
            description:"Yatak Odaları",
            price:"24.689,92",
         
        },
        {
            id:7,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/perla-yatak-odasi-takimi-ceviz-382bc-.jpg",
            title:"Yatak Odaları",
            description:"Yatak Odaları",
            price:"24.689,92",
         
        },
        {
            id:8,
            photo:"https://static.ticimax.cloud/30192/uploads/urunresimleri/buyuk/perla-yatak-odasi-takimi-ceviz-382bc-.jpg",
            title:"Yatak Odaları",
            description:"Yatak Odaları",
            price:"24.689,92",
         
        },
    ]);

    const [sehpalar, setSehpalar] = useState([
        {
            id:1,
            photo:"https://m.media-amazon.com/images/I/81ssXe8IVIL._AC_UF1000,1000_QL80_.jpg",
            title:"Sehpalar",
            description:"Sehpalar",
            price:"1.380.99",
         
        },
        {
            id:2,
            photo:"https://m.media-amazon.com/images/I/81ssXe8IVIL._AC_UF1000,1000_QL80_.jpg",
            title:"Sehpalar",
            description:"Sehpalar",
            price:"1.380.99",
        
        },
        {
            id:3,
            photo:"https://m.media-amazon.com/images/I/81ssXe8IVIL._AC_UF1000,1000_QL80_.jpg",
            title:"Sehpalar",
            description:"Sehpalar",
            price:"1.380.99",
        
        },
        {
            id:4,
            photo:"https://m.media-amazon.com/images/I/81ssXe8IVIL._AC_UF1000,1000_QL80_.jpg",
            title:"Sehpalar",
            description:"Sehpalar",
            price:"1.380.99",
        
        },
        {
            id:5,
            photo:"https://m.media-amazon.com/images/I/81ssXe8IVIL._AC_UF1000,1000_QL80_.jpg",
            title:"Sehpalar",
            description:"Sehpalar",
            price:"1.380.99",
         
        },
        {
            id:6,
            photo:"https://m.media-amazon.com/images/I/81ssXe8IVIL._AC_UF1000,1000_QL80_.jpg",
            title:"Sehpalar",
            description:"Sehpalar",
            price:"1.380.99",
         
        },
        {
            id:7,
            photo:"https://m.media-amazon.com/images/I/81ssXe8IVIL._AC_UF1000,1000_QL80_.jpg",
            title:"Sehpalar",
            description:"Sehpalar",
            price:"1.380.99",
         
        },
        {
            id:8,
            photo:"https://m.media-amazon.com/images/I/81ssXe8IVIL._AC_UF1000,1000_QL80_.jpg",
            title:"Sehpalar",
            description:"Sehpalar",
            price:"1.380.99",
         
        },
    ]);
    return (
        <ProductsContext.Provider value={[products, setProducts]}>
            <KoseTakimiContext.Provider value={[koseTakimi, setKoseTakimi]}>
            <TvUnitesiContext.Provider value={[TvUnitesi, setTvUnitesi]}>
            <YemekTakimiContext.Provider value={[yemekTakimi, setYemekTakimi]}>
            <YatakOdalariContext.Provider value={[yatakOdalari, setYatakOdalari]}>
            <SehpalarContext.Provider value={[sehpalar, setSehpalar]}>
                {children}
                </SehpalarContext.Provider>

                </YatakOdalariContext.Provider>
                </YemekTakimiContext.Provider>
            </TvUnitesiContext.Provider>
            </KoseTakimiContext.Provider>
        </ProductsContext.Provider>
    );
};
