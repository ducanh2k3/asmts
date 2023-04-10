import { Link } from "react-router-dom";
import { IProduct } from "../models";
import { NumericFormat } from "react-number-format";
import { useEffect,useState } from "react";

type Props = {
  data: IProduct;
};

const Item = ({ data }: Props) => {
  const [img,setImg] =useState("")
  useEffect(()=>{
    setImg(data?.images[0]?.base_url)
  },[])
  console.log({data});
  return (
    <><Link to={`product/${data.id}`}>
      <div className="">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p>{data.name}</p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-red-600 ;">
            <NumericFormat
              value={data.price}
              displayType={"text"}
              thousandSeparator={true}
            />
            ₫
          </p>
          <p className="text-sm text-slate-400"> <NumericFormat
              value={data.original_price}
              displayType={"text"}
              thousandSeparator={true}
            />
            ₫</p>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Item;
