import CoverContent from "./covercontent";
import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getById } from "../api/product";
import { NumericFormat } from "react-number-format";
import { IProduct } from "../models";
import Specifications from "./specifications";
import Description from "./description";

const Detail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<IProduct>({} as IProduct);
  const [baseimg, setBaseimg] = useState();
  const fetchProducts = async (id: number) => {
    const { data } = await getById(id);
    setProducts(data);
    setBaseimg(data.images[0].base_url);
  };
  // console.log(products)
  useEffect(() => {
    fetchProducts(Number(id));
  }, []);
  const fisrtdes = products.description?.substring(0, 200);

  const imgRef = useRef([]);

  return (
    <div>
      <div className="shadow-md w-full flex gap-5 justify-center ">
        <div className=" flex gap-5 text-sm w-[57%]  text-slate-400 my-3">
          <Link to="/">Trang chủ</Link>
          <div>Điện thoại</div>
          <div>Samsung</div>
          <div>{products.name}</div>
        </div>
      </div>
      <CoverContent>
        <div className="my-3 container mx-auto">
          <div className="  text-lg">{products.name}</div>
        </div>
      </CoverContent>
      <hr className="w-full" />
      <CoverContent>
        <div className="my-5">
          <div className="flex gap-3">
            <div>
              <img
                className="transform scale-100 w-[400px] object-fill py-4"
                src={baseimg}
                alt=""
              />
            </div>
            <div className="w-[80%] ">
              <div className="flex gap-3 items-end my-2">
                <p className=" text-red-500">
                  <NumericFormat
                    value={products.price}
                    displayType={"text"}
                    thousandSeparator={true}
                  />{" "}
                  ₫
                </p>
                <p className="text-xs   text-slate-400  ">
                  <NumericFormat
                    value={products.original_price}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                  ₫
                </p>
              </div>
              <div className="text-xs ">
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: fisrtdes }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex gap-[20%] items-center">
            <div className="flex gap-2">
              <div className="w-[60px] text-xs flex flex-col text-center justify-center items-center border-2 rounded-md">
                <img className=" w-[15px]" src="../star.png" alt="" />
                <p>Tình năng nổi bật</p>
              </div>
              {products &&
                products.images?.map(
                  (item: { base_url: string | undefined }, index: number) => {
                    return (
                      <div
                        key={index}
                        className="w-[60px] border-2 flex flex-col text-center items-center  p-1 rounded-md hover:cursor-pointer "
                      >
                        <img
                          // Gán ref cho thẻ img bằng cách sử dụng một hàm callback
                          ref={(el) => (imgRef.current[index] = el)}
                          key={index}
                          src={item.base_url}
                          alt="image"
                          onClick={() => {
                            console.log(imgRef.current[index].src);
                            setBaseimg(imgRef.current[index].src);
                          }}
                        />
                      </div>
                    );
                  }
                )}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="h-[40px] w-[200px] rounded-md bg-red-500 text-white px-8"
              >
                Mua
              </button>
              <button
                type="button"
                className="h-[40px] w-[40px] flex justify-center items-center rounded-md border-1 border-red-500 bg-white"
              >
                <img src="../cart.png" />
              </button>
              <div className=" h-[40px]">Thêm vào giỏ hàng</div>
            </div>
          </div>
        </div>
        <Specifications detail={products.specifications}></Specifications>
        <Description
          des={products.description}
          description={undefined}
        ></Description>
      </CoverContent>
    </div>
  );
};
export default Detail;
