import CoverContent from "./covercontent";

const UserFooter = () => {
  return (
    <div>
      <CoverContent>
        <div className="flex gap-3 my-5">
          <ul>
            <li className="text-lg">Tìm cửa hàng</li>
            <li className="text-xs">Tìm cửa hàng gần nhất</li>
            <li className="text-xs">Mua hàng từ xa</li>
            <li className="text-xs text-red-500">
              Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)
            </li>
            <li className="text-lg">Phương thức thanh toán</li>
          </ul>
          <ul>
            <li className="text-xs">Gọi mua hàng: 1800.2044 (8h00 - 22h00)</li>
            <li className="text-xs">Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</li>
            <li className="text-xs">Gọi bảo hành: 1800.2064 (8h00 - 21h00)</li>
            <li className="text-xs text-red-500">Đối tác dịch vụ bảo hành</li>
            <li className="text-xs">Điện Thoại - Máy tính</li>
            <li>Trung tâm bảo hành uỷ quyền Apple</li>
          </ul>
          <ul>
            <li className="text-xs">Mua hàng và thanh toán Online</li>
            <li className="text-xs">Mua hàng trả góp Online</li>
            <li className="text-xs">Tra thông tin đơn hàng</li>
            <li className="text-xs text-red-500">
              Dịch vụ bảo hành điện thoại
            </li>
          </ul>
          <ul>
            <li className="text-xs">Quy chế hoạt động</li>
            <li className="text-xs">Chính sách Bảo hành</li>
            <li className="text-xs">Liên hệ hợp tác kinh doanh</li>
            <li className="text-xs text-red-500">Ưu đãi thanh toán</li>
            <li className="text-lg">Tuyển dụng</li>
          </ul>
        </div>
      </CoverContent>
      <div className="bg-gray-100">
        <CoverContent>
          <div className="flex gap-3 py-4">
            <ul className="text-xs">
              <li>
                Điện thoại iPhone 13 Điện thoại iPhone 12 Điện thoại iPhone 11
              </li>
              <li>Điện thoại iPhone 13 Pro Max Điện thoại iPhone 11 Pro Max</li>
              <li>iPhone cũ giá rẻ iPhone 13 cũ iPhone 12 cũ iPhone 11 cũ</li>
            </ul>
            <ul className="text-xs">
              <li>
                Điện thoại iPhone - Điện thoại Samsung - Điện thoại Samsung A
              </li>
              <li>
                Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Vivo - Điện
                thoại Nokia
              </li>
              <li>Samsung Fold 3 Samsung S22 Samsung A73 Samsung A53</li>
            </ul>
            <ul className="text-xs">
              <li>
                Điện thoại iPhone 13 Điện thoại iPhone 12 Điện thoại iPhone 11
              </li>
              <li>Điện thoại iPhone 13 Pro Max Điện thoại iPhone 11 Pro Max</li>
              <li>iPhone cũ giá rẻ iPhone 13 cũ iPhone 12 cũ iPhone 11 cũ</li>
            </ul>
          </div>
        </CoverContent>
      </div>
    </div>
  );
};

export default UserFooter;
