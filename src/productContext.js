// productsContext.js
import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();

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

    return (
        <ProductsContext.Provider value={[products, setProducts]}>
            {children}
        </ProductsContext.Provider>
    );
};
