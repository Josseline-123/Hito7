import{ createContext, useState} from "react";


export const MiContexto = createContext();

import React from 'react'

const MiContextoProvider = ({children}) => {
    const [user, setUser]  = useState(false);
    const data = [
    
        {
            sku: 1,
            descripcion: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
            id: "pd001",
            img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
            ingredientes:[" mozzarella, tomates, jamón, orégano"],
            nombre:  "Napolitana",
            price: "$5950",
          },
          {
            sku: 2,
            descripcion: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
            id: "Pd002",
            img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
            ingredientes: ["mozzarella, tomates, jamón, choricillo"],
            nombre: "Española",
            price: "$7250",
          },
          {
            sku: 3,
            descripcion: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
            id: "Pd003",
            img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
            ingredientes: ["mozzarella, tomates, salame, orégano"],
            nombre: "Salame",
            price: "$5990",
          },
          {
            sku: 4,
            descripcion: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
            id: "Pd004",
            img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be",
            ingredientes: ["mozzarella, salame, aceitunas, champiñones"],
            nombre: "Cuatro estaciones",
            price: "$9590",
          },
          {
            sku: 5,
            descripcion: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
            id: "Pd005",
            img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-salame.jpg?alt=media&token=ab3d4bf8-01f2-4810-982b-bd7fb6b517b2",
            ingredientes: ["mozzarella, tomates cherry, bacon, orégano"],
            nombre: "Bacon",
            price: "$6450",
          },
          {
            sku: 6,
            descripcion: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
            id: "Pd006",
            img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be",
            ingredientes: ["mozzarella, pimiento, pollo grillé, orégano"],
            nombre: "Pollo picante",
            price: "$8500",
          },
     ]


return(

    <MiContexto.Provider value={{ data, user, setUser 

    }}>  
        {children}
    </MiContexto.Provider>
)
}
export default MiContextoProvider;