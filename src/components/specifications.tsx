import { Key } from "react";

// Giả sử bạn có một component Specifications như sau
const Specifications = (props: { detail: any; }) => {
  // Lấy mảng detail từ props
  const { detail } = props;

  return (
    <div className="bg-gray-100 p-3">
      <div className="bg-gray-100 text-red-500 text-center">
        ĐẶC ĐIỂM NỔI BẬT
      </div>
      <ul>
        {detail?.map((spec: { name: Key | null | undefined; attributes: any[]; }) => (
          // Hiển thị tên và các thuộc tính của mỗi spec
          <li key={spec.name}>
         
            <ul>
              {spec?.attributes.map((attr) => (
                // Hiển thị tên và giá trị của mỗi thuộc tính
                <li key={attr.code}>
                  <p>
                    {attr.name}: {attr.value}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Specifications;
