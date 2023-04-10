const Adminside = () => {
  return (
    <div className="text-center">
      <div className="bg-red-500 py-2 my-3 rounded-lg flex px-4 gap-3 text-white">
        {" "}
        <img src="../logophone.png" alt="" /> Điện thoại
      </div>
      <div className="py-2 my-3 rounded-lg flex px-4 gap-3">
        {" "}
        <img src="../laptop.png" alt="" /> Laptop
      </div>
      <div className=" py-2 my-3 rounded-lg flex px-4 gap-3">
        {" "}
        <img className="h-8" src="../ipad.png" alt="" /> Máy tính bảng
      </div>
      <div className=" py-2 my-3 rounded-lg flex px-4 gap-3">
        {" "}
        <img src="../headphone.png" alt="" /> Âm thanh
      </div>
    </div>
  );
};
export default Adminside;
