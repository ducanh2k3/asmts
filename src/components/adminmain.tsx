import { IProduct } from "../models";
import { useState, useEffect } from "react";
import { getAll, deleteById } from "../api/product";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const fetchProducts = async () => {
    const { data } = await getAll();
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleDelete = async (id) => {
    try {
      await deleteById(id);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h1>Điện thoại</h1>
      <div className="mx-2">
        <table className="border-separate border-spacing-2 border-b border-slate-200  w-full">
          {" "}
          <thead>
            <tr>
              <th className="mx-2">#</th>
              <th className="mx-2">Tên sản phẩm</th>
              <th className="mx-2">Thành tiền</th>
              <th className="mx-2">Mô tả</th>
              <th className="mx-2">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((item) => {
                return (
                  <tr key={item.id}>
                    <th className="mx-2">
                      {" "}
                      <Link to={`/updateproduct/${item.id}`}>{item.id} </Link>
                    </th>
                    <th className="mx-2">
                      {" "}
                      <Link to={`/updateproduct/${item.id}`}>{item.name}</Link>
                    </th>
                    <th className="mx-2">
                      <NumericFormat
                        value={item.price}
                        displayType={"text"}
                        thousandSeparator={true}
                      />{" "}
                      ₫
                    </th>
                    <th
                      className="mx-2"
                      dangerouslySetInnerHTML={{
                        __html: item.description.substring(0, 40),
                      }}
                    ></th>

                    <th className="mx-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                        onClick={() => handleDelete(item.id)}
                      >
                        Xóa
                      </button>
                    </th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Main;
