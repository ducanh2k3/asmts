import { useState } from "react";

const Description = (props: { [x: string]: any; description: any }) => {
  const [description, setDescription] = useState(true);
  const more = () => {
    console.log(description)
    if (description === false) {
      setDescription(true);
    }else{
      setDescription(false);
    }
  };
  return (
    <>
      <div>
        {description===true && <div className="" dangerouslySetInnerHTML={{ __html: props.des?.substring(0, 400) }}></div>}...
        
        {description===false && <div className="" dangerouslySetInnerHTML={{ __html: props.des }}></div>}
        <div className="text-center">
          {description===true && <button className="h-[40px] w-[200px] rounded-md border-2 border-black px-8 mb-20 mt-3" onClick={more}>
            Đọc Thêm
          </button>}
          {description===false &&  <button className="h-[40px] w-[200px] rounded-md border-2 border-black px-8 mb-20 mt-3" onClick={more}>
            Thu gon
          </button>}
        </div>
        
      </div>
    </>
  );
};
export default Description;
