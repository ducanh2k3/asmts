import Slider from "./slider";
import Cover from "./cover";
import Item from "./item";
import { useEffect, useState } from "react"
import { getAll } from "../api/product";
import { IProduct } from "../models"


const Home = () => {
  const [products,setProducts] =useState<IProduct[]>([])
  const fetchProducts =async ()=>{
    const {data}= await getAll()
    setProducts(data)
    
  }
  useEffect(()=>{
    fetchProducts()
  },[])
  // console.log(products)

  return (
    <div>
       <Cover >
        <Slider />
      </Cover>
      <div className=" container mx-auto w-[90%]">
        <h2 className="my-2">ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
        <div className="grid grid-cols-4 gap-3">
        {products.map(item =><Item key={item.id} data={item}/> )}
        </div>
      </div>
   
    </div>
  );
};
export default Home;
