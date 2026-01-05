import React from 'react'; // Bỏ 'use' nếu không dùng đến
import { useRouter } from "next/router";
import ArrowIcon from "../../Icons/ArrowIcon";

const MyExperience = () => {
  // const router = useRouter();

  return (
    <div
      id="MyExperienceSection"
      className="flex flex-col space-y-4 md:space-y-6 xl:space-y-8 bg-AAprimary w-full 
      2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-20 px-4"
    >
      {/* // ? Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary" />
        
        {/* Thêm tiêu đề ở đây để giao diện hiển thị rõ ràng hơn */}
        <div className="flex flex-row items-center ml-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 02. </span>
          <span className="text-gray-200 font-bold text-2xl px-4"> Kinh nghiệm làm việc </span>
          {/* <div className="h-[0.2px] w-32 sm:w-64 bg-gray-400 ml-4"></div> */}
        </div>
      </div>


{/* loi o day  */}
      {/* // ? Content */}
        <div className="flex flex-col space-y-6 md:space-y-10 xl:space-y-12">
        {/* // ? Job 1 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full   ">
           <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start  space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Novaon Company
                  </span>
                  <span className="text-AAsecondary font-mono text-sm">6/2023 - 12/2025</span>
              </div>
        <div className="w-full md:max-w-xl space-y-4 sm:text-base text-sm">
          <p className="font-Header text-gray-400 text-left leading-relaxed">
            Hey there! I&apos;m Khoa — a young and passionate developer with{" "}
            <span className="text-AAsecondary font-medium">
              1.5 years of experience
            </span>{" "}
            in software development. I&apos;m always eager to explore new
            technologies and keep learning, not only to improve myself but
            also to deliver better results in every project I take on.
          </p>
        </div>
            </div>
      </div>
    </div>
     </div>





  );
};

// Chỉ giữ lại một dòng export default duy nhất ở cuối
export default MyExperience;