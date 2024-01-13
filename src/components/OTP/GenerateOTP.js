import { useState } from "react";

const GenerateOTP = (props) => {
  //original
  const [orgOTP, setOrgOTP] = useState("");
  // Math.floor(100000 + Math.random() * 900000)
  const handleClickBtn = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOrgOTP(otp);
    props.setOrgOTPParent(otp);
  };
  return (
    <div className="generate-otp-generator">
      <button onClick={() => handleClickBtn()}>Genereate OTP</button>
      <div className="title">Your OTP:{orgOTP}</div>
    </div>
  );
};

export default GenerateOTP;
