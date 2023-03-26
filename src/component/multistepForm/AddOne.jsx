import "./addOns.css";

import {
  activeAddState,
  addAddOns,
  addOneState,
  isYearState,
  removeAddOns,
  toggleActiveAddOne,
  totalState,
} from "../../store/slices/plansSlice";
import { useDispatch, useSelector } from "react-redux";

const AddOne = () => {
  const dispatch = useDispatch();
  const active = useSelector(activeAddState);
  const isYear = useSelector(isYearState);
  const addOne = useSelector(addOneState);
  const totaladd = useSelector(totalState);
  console.log(totaladd);

  const addOnsData = [
    {
      id: 1,
      title: "Online Service",
      subTitle: "Access to multiplayer games",
      costPerMonth: 1,
      costPerYear: 5,
    },
    {
      id: 2,
      title: "Larger storage",
      subTitle: "Extra 1TB of cloud save",
      costPerMonth: 2,
      costPerYear: 20,
    },
    {
      id: 3,
      title: "Customizable profile",
      subTitle: "Custom theme on your profile",
      costPerMonth: 3,
      costPerYear: 30,
    },
  ];
  return (
    <div className="flex flex-col min-w-[26rem] mx-auto ">
      <h2 className="font-[1000] text-darkBlue text-[2.3rem]">Pick Add-ons</h2>
      <p className="text-p_grey text-[0.85rem]">
        Add-ons help enhance your gaming experience
      </p>
      <div className="flex flex-col justify-center items-center space-y-5 my-5">
        {addOnsData.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`
            flex flex-row justify-between  items-center space-x-2 p-3 border-p_grey border-[1px] w-full rounded-lg w-full
            cursor-pointer ${active.includes(idx) ? "bo bg-slate-50" : ""}
            `}
              onClick={() => {
                dispatch(toggleActiveAddOne(idx));
                active.includes(idx)
                  ? dispatch(removeAddOns(item))
                  : dispatch(addAddOns(item));
              }}
            >
              <div className="flex space-x-2 items-center justify-start ">
                <input
                  type="checkbox"
                  checked={active.includes(idx) || false}
                  className="mr-3 rounded-lg relative cursor-pointer w-[1rem] h-[1rem]"
                  id={idx}
                />

                <div>
                  <h2 className="text-darkBlue text-left text-[0.9rem] font-bold">
                    {item.title}
                  </h2>

                  <p className="text-[0.8rem] text-p_grey text-left">
                    {item.subTitle}
                  </p>
                </div>
              </div>
              <div className="text-[0.8rem] text-darkBlue">
                {!isYear ? (
                  <>${item.costPerMonth}/mo</>
                ) : (
                  <>${item.costPerYear}/yr</>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddOne;
