export const Footer = () => {
  return (
    <div className="w-full h-[300px] bg-[#4338CA] mt-20 mx-auto flex pt-[40px]">
      <div className="flex flex-col pl-[280px]">
        <div className="flex">
          <img
            src="/movie-web-img/film2.svg"
            alt="logo"
            className="w-[20px] h-[20px]"
          />
          <p className="text-[16px] italic font-bold text-white pl-[12px]">
            Movie Z
          </p>
        </div>
        <p className="text-white text-[16px] font-normal not-italic pt-[12px]">
          © 2024 Movie Z. All Rights Reserved
        </p>
      </div>
      <div className="pl-[840px]">
        <p className="text-white text-[16px] font-normal not-italic">
          Contact Information/p
        </p>
        <div className="flex">
          <img src="/movie-web-img/email.svg" alt="" />
          <div className="pl-[12px]">
            <p className="text-white text-[16px] font-normal not-italic pt-[12px]">
              {" "}
              Email:
            </p>
            <p className="text-white text-[16px] font-normal not-italic">
              support@movieZ.com
            </p>
          </div>
        </div>
        <div>
          <div className="flex pt-[24px]">
            <img src="/movie-web-img/call.svg" alt="" />
            <div className="pl-[12px]">
              <p className="text-white text-[16px] font-normal not-italic">
                Phone
              </p>
              <p className="text-white text-[16px] font-normal not-italic">
                +976 (11) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[230px]">
        <p className="text-white text-[16px] font-normal not-italic">
          Follow us
        </p>
        <div className="flex gap-3 text-white text-[16px] font-normal not-italic pt-[12px]">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Youtube</p>
        </div>
      </div>
    </div>
  );
};
