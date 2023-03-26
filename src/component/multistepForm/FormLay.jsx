import { useEffect, useState } from "react";

import AddOne from "./AddOne";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Summary from "./Summary";
import Thank from "./Thank";
import { planItemState } from "../../store/slices/plansSlice";
import { useSelector } from "react-redux";

const FormLay = () => {
  const plansS = useSelector(planItemState);

  //state
  const [page, setPage] = useState(0);
  const formList = [
    "first form",
    "second form",
    "third form",
    "four form",
    "five form",
  ];
  const formLength = formList.length;
  const initialValue = {
    name: "",
    email: "",
    phone: 0,
  };
  const [formData, setFormData] = useState(initialValue);
  // handle change

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const leftBar = [
    { id: 1, step: "STEP 1", title: "YOUR INFO" },
    { id: 2, step: "STEP 2", title: "SELECT PLAN" },
    { id: 3, step: "STEP 3", title: "ADD ONS" },
    { id: 4, step: "STEP 4", title: "SUMMARY" },
  ];

  //handle button
  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };
  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  //media match state
  const [isMob, setIsmob] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsmob(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setIsmob(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const pageShow = () => {
    switch (page) {
      case 0: {
        return (
          <PersonalInfo
            formdata={formData}
            setFormData={setFormData}
            onChange={onChange}
            page={page}
            handlePrev={handlePrev}
            handleNext={handleNext}
            leftBar={leftBar}
          />
        );
      }
      case 1: {
        return <SelectPlan />;
      }
      case 2: {
        return <AddOne />;
      }
      case 3: {
        return <Summary page={page} setPage={setPage} />;
      }
      case 4: {
        return <Thank />;
      }
      default: {
        return null;
      }
    }
  };

  //
  let content;
  {
    !isMob &&
      (content = (
        <div className="absolute w-full h-full  top-0 left-0 flex flew-wrap justify-center items-center px-6 sm:px-12 overflow-hidden  ">
          <div className="bg-white p-3 rounded-lg flex flex-row justify-center items-center space-x-5 overflow-hidden">
            <div className=" relative w-[15rem] h-[30rem] bg-sidebar  bg-cover bg-no-repeat bg-center rounded-lg pt-5 px-1">
              {leftBar.map((item, idx) => {
                return (
                  <ul
                    key={idx}
                    className="flex flex-col justify-center items-start space-y-4 text-white text-[0.8rem] p-3"
                  >
                    <li className="flex flex-row items-center justify-start gap-3 w-full">
                      <div
                        className={`
                      w-7 h-7 top-0 left-0 border-white border-[0.5px] rounded-full flex justify-center items-center
                      ${page === idx && "bg-[#bfdcf7] text-darkBlue"}
                      `}
                      >
                        {item.id}
                      </div>

                      <div className="flex flex-col items-start ">
                        <p className="text-[0.7rem] text-p_grey">{item.step}</p>
                        <p className="text-[0.7rem] font-[600]">{item.title}</p>
                      </div>
                    </li>
                  </ul>
                );
              })}
            </div>
            <div className=" px-12 ">
              <div className="py-6 min-w-[28rem] mx-auto">{pageShow()}</div>

              {page >= 1 && (
                <div className="text-right flex flex-row-reverse justify-between items-center">
                  {page < 4 ? (
                    <>
                      <button
                        className="bg-darkBlue text-[#efefef] rounded-lg px-5 py-2 disabled:bg-opacity-20"
                        disabled={plansS.length === 0}
                        onClick={handleNext}
                      >
                        {page === 3 ? "Confirm" : "Next Step"}
                      </button>
                      <button
                        className="bg-transparent text-darkBlue transition-all hover:opacity-70 rounded-lg px-5 py-2 flex justify-center items-center"
                        disabled={page === 0}
                        onClick={handlePrev}
                      >
                        {page > 0 && (
                          <p className=" text-p_grey font-bold text-[0.85rem] hover:text-darkBlue">
                            Get Back
                          </p>
                        )}
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ));
  }
  return (
    <div className="font-Ubuntu  w-full h-screen relative overflow-hidden bg-slate-100 mx-auto">
      {content}
    </div>
  );
};

export default FormLay;
