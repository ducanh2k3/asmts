import { useLocalStorage } from "../hooks";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const [user, setUser] = useLocalStorage("user", null);

  const navigate = useNavigate();
  const logOut = () => {
    setUser(null);
    navigate("/");
  };
  return (
    <>
      <header className="bg-red-500">
        <div className="container mx-auto ">
          <div className="flex  justify-center">
            <img className="w-[60px] m-2" src="/logo.png" alt="" />
            <input
              className="outline-none p-1 m-3 w-[50%] rounded-lg"
              type="text"
              placeholder="Search"
            />

            <div className="flex  justify-center items-center gap-3">
              <p className="text-white">Xin chào Admin : {user.firstName}</p>

              <div
                className="group relative inline-block focus:outline-none focus:ring hover:cursor-pointer"
                onClick={logOut}
              >
                <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></div>

                <div className="relative inline-block border-2 border-current px-2 py-1 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                  Đăng Xuất
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
