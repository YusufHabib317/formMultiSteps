import thank from "../../assets/multiStepForm/images/icon-thank-you.svg";

const Thank = () => {
  return (
    <div className="min-w-[30rem] mx-auto flex justify-center items-center flex-col ">
      <img src={thank} alt="thank" />
      <p className="text-darkBlue max-w-[20rem] max-auto text-[1.8rem] mt-5 font-[1000]">
        Thank you!
      </p>
      <p className="max-w-[27rem] mt-5 leading-6 text-center text-gray-400 text-[0.85rem] font-[500]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default Thank;
