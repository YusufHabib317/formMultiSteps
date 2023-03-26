import { useRef } from "react";

const PersonalInfo = ({
  formdata,
  onChange,
  page,
  handlePrev,
  handleNext,
  leftBar,
}) => {
  return (
    <div className="flex flex-col min-w-[26rem] mx-auto">
      <h2 className="font-[1000] text-darkBlue text-[2.3rem]">Personal info</h2>
      <p className="text-p_grey text-[1rem]">
        please provide your name, email address, and phone number
      </p>
      <form className="flex flex-col space-y-5 mt-5 " onSubmit={handleNext}>
        <label className="text-[0.8rem]">
          <span className="text-darkBlue">Name</span>
          <input
            type="text"
            name="name"
            placeholder="e.g. Yusuf Habib"
            className="w-full p-2 border-[1px] rounded-lg border-slate-200 mt-1"
            value={formdata.name || ""}
            onChange={onChange}
            required
          />
        </label>
        <label className="text-[0.8rem]">
          <span className="text-darkBlue">Email Address</span>
          <input
            type="text"
            name="email"
            placeholder="e.g. yusufhabib317@gmail.com"
            className="w-full p-2 border-[1px] rounded-lg border-slate-200 mt-1"
            value={formdata.email || ""}
            onChange={onChange}
            required
          />
        </label>
        <label className="text-[0.8rem]">
          <span className="text-darkBlue">Phone Number</span>
          <input
            type="text"
            name="phone"
            placeholder="e.g. +963 956 086 725"
            className="w-full p-2 border-[1px] rounded-lg border-slate-200 mt-1"
            value={formdata.phone || ""}
            onChange={onChange}
            required
          />
        </label>
        <div className="text-right flex flex-row-reverse justify-between items-center">
          {page < 4 ? (
            <>
              <button
                className="bg-darkBlue text-[#efefef] rounded-lg px-5 py-2"
                disabled={page === leftBar.length}
              >
                {page === 3 ? "Confirm" : "Next Step"}
              </button>
              <button
                className="bg-transparent text-darkBlue transition-all hover:opacity-70 rounded-lg px-5 py-2 flex justify-center items-center"
                disabled={page === 0}
                onClick={handlePrev}
              >
                {page > 0 && (
                  <p className="text-[1rem] text-p_grey">Get Back</p>
                )}
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
