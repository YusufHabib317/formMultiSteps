import {
  addOneState,
  isYearState,
  planItemState,
  totalState,
} from "../../store/slices/plansSlice";
import { useDispatch, useSelector } from "react-redux";

const Summary = ({ setPage }) => {
  const dispatch = useDispatch();
  const plansItem = useSelector(planItemState);
  const addOne = useSelector(addOneState);
  const isYear = useSelector(isYearState);
  const totaladd = useSelector(totalState);
  console.log(totaladd);

  return (
    <div className="flex flex-col  min-w-[26rem] mx-auto">
      <h2 className="font-[1000] text-darkBlue text-[2.3rem]">Finishing up</h2>
      <p className="text-p_grey text-[1rem] mb-3">
        Double-check everything looks Ok before confirming
      </p>

      <div className="bg-slate-100 p-5 text-darkBlue font-bold">
        <div className="flex justify-between items-center">
          {plansItem.map((ele) => {
            return (
              <div
                key={ele.id}
                className="flex justify-between items-center w-full"
              >
                <div>
                  <p className="text-[1.5rem]">{ele.title}</p>
                  <p
                    to="/"
                    className="text-[0.8rem] font-normal hover:underline cursor-pointer"
                    onClick={() => setPage(1)}
                  >
                    change
                  </p>
                </div>
                <div>{`$${isYear ? ele.costPerYear : ele.costPerMonth} ${
                  isYear ? "/Yr" : "/Mo"
                }`}</div>
              </div>
            );
          })}
        </div>

        <div className="w-full h-[1px] bg-[#cacaca] mt-5" />

        <div className="">
          {addOne.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex mt-5 justify-between items-center text-[0.8rem] text-opacity-50 text-[#676767]"
              >
                <p>{item.title}</p>
                <p className="text-darkBlue">
                  {`$${isYear ? item.costPerYear : item.costPerMonth} ${
                    isYear ? "/Yr" : "/Mo"
                  }`}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center text-[1rem] font-bold p-5 text-blue">
        {plansItem.map((plan) => (
          <div className="flex justify-between items-center w-full">
            <p className="text-[#d1d1d1] text-[0.85rem] font-normal">
              Total ({`${isYear ? "per year" : "per month"}`})
            </p>
            <p>
              $
              {isYear
                ? plan.costPerYear + totaladd
                : plan.costPerMonth + totaladd}
              /{isYear ? "Yr" : "Mo"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
