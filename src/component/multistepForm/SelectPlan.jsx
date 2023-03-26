import "./selectPlan.css";

import {
  activePlaneState,
  addPlane,
  isYearState,
  resetActive,
  toggleActive,
  toggleYear,
} from "../../store/slices/plansSlice";
import { useDispatch, useSelector } from "react-redux";

import AdvanceIcon from "../../assets/multiStepForm/images/icon-advanced.svg";
import ArcadeIcon from "../../assets/multiStepForm/images/icon-arcade.svg";
import ProIcon from "../../assets/multiStepForm/images/icon-pro.svg";

const SelectPlan = () => {
  //redux
  const dispatch = useDispatch();
  const isYear = useSelector(isYearState);
  const active = useSelector(activePlaneState);

  //------------------------------------------------------------------------------

  const plans = [
    {
      id: 1,
      title: "Arcade",
      icon: ArcadeIcon,
      costPerMonth: 9,
      costPerYear: 90,
      timeFree: "2 months free",
    },
    {
      id: 2,
      title: "Advanced",
      icon: AdvanceIcon,
      costPerMonth: 12,
      costPerYear: 120,
      timeFree: "2 months free",
    },
    {
      id: 3,
      title: "Pro",
      icon: ProIcon,
      costPerMonth: 15,
      costPerYear: 150,
      timeFree: "2 months free",
    },
  ];
  plans.map((ele) => {
    Object.entries(ele).map(([key, val]) => {
      if (isYear) {
        ele["costPerMonth"] = 0;
      } else {
        ele["costPerYear"] = 0;
      }
    });
  });

  //------------------------------------------------------------------------------

  return (
    <div className="flex flex-col  min-w-[26rem] mx-auto">
      <h2 className="font-[1000] text-darkBlue text-[2.3rem]">
        Select your plan
      </h2>
      <p className="text-p_grey text-[1rem]">
        You have the option of monthly or yearly billing
      </p>
      <div className="flex flex-row  justify-between items-center gap-2 my-5">
        {plans.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`border-[1px] border-slate-200 w-[7rem] p-3 rounded-lg cursor-pointer 
              ${active[0] === item.id && "b bg-slate-50"}
               `}
              onClick={() => {
                dispatch(toggleActive(item));
                dispatch(addPlane(item));
              }}
            >
              <div>
                <img src={item.icon} className="w-8 h-8 object-contain" />
              </div>
              <div className="mt-8 text-[0.8rem]">
                <p className="text-[1rem] text-darkBlue">{item.title}</p>
                <p className="text-p_grey">
                  ${!isYear ? item.costPerMonth : item.costPerYear}/
                  {isYear ? "Yr" : "Mo"}
                </p>
                <p className="text-darkBlue text-[0.7rem] ">
                  {isYear && item.timeFree}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-center items-center space-x-3 w-full bg-slate-100 rounded-lg p-2">
        <span
          className={`text-[0.8rem] transition-all ${
            isYear ? "text-p_grey" : "text-darkBlue"
          }`}
        >
          Monthly
        </span>

        <input
          type="checkbox"
          name="checkbox"
          className={`relative cursor-pointer appearance-none w-[2.2rem] h-[1.2rem] outline-none rounded-[20px] transition-all leading-3
          bg-darkBlue  c before:w-[0.65rem] before:h-[0.65rem] before:bg-white before:top-[50%] before:left-1 before:rounded-full
          ${isYear ? "before:left-5" : ""}
          `}
          onChange={() => {
            dispatch(toggleYear());
            dispatch(resetActive());
          }}
          value={isYear}
        />

        <span
          className={`text-[0.8rem]  transition-all ${
            !isYear ? "text-p_grey" : "text-darkBlue"
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default SelectPlan;
