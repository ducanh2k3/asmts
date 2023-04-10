import { useLocalStorage } from "../hooks";
import { Link } from "react-router-dom";

const UserHeader = () => {
  const [user, setUser] = useLocalStorage("user", null);
  const logOut = () => setUser(null);
  return (
    <header className="bg-red-500">
      <div className="container mx-auto ">
        <div className="flex  justify-center">
          <img className="w-[60px] m-2" src="/logo.png" alt="" />
          <input
            className="outline-none p-1 m-3 w-[50%] rounded-lg"
            type="text"
            placeholder="Search"
          />
          {!user && (
            <div className="flex  justify-center gap-3 items-center ">
              <div>
                <Link
                  className="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
                  to={"/signin"}
                >
                  <span className="absolute inset-0 border border-current"></span>
                  <span className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                    Đăng Nhập
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  className="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
                  to={"/signup"}
                >
                  <span className="absolute inset-0 border border-current"></span>
                  <span className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                    Đăng Ký
                  </span>
                </Link>
              </div>
            </div>
          )}
          {user && (
            <div className="flex  justify-center items-center gap-3">
              <p className="text-white">Xin chào: {user.firstName}</p>

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
          )}
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
