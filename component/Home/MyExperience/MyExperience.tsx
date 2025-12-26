import React from 'react'; // Bỏ 'use' nếu không dùng đến
import { useRouter } from "next/router";
import ArrowIcon from "../../Icons/ArrowIcon";

const MyExperience = () => {
  const router = useRouter();

  return (
    <div
      id="MyExperienceSection"
      className="flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full 
      2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary" />
        
        {/* Thêm tiêu đề ở đây để giao diện hiển thị rõ ràng hơn */}
        <div className="flex flex-row items-center ml-4">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 02. </span>
          <span className="text-gray-200 font-bold text-2xl px-4"> Kinh nghiệm làm việc </span>
          <div className="h-[0.2px] w-32 sm:w-64 bg-gray-400 ml-4"></div>
        </div>
      </div>
    </div>
  );
};

// Chỉ giữ lại một dòng export default duy nhất ở cuối
export default MyExperience;