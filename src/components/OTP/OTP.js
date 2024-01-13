import { useState } from "react";
import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import "./OTP.scss";
const OTP = () => {
  const [orgOTPParent, setOrgOTPParent] = useState("");
  const [userOTPParent, setUserOTPParent] = useState("");
  const [isDisableBtn, setIsDisableBtn] = useState(false);
  const handleSubmitOTP = () => {
    if (+orgOTPParent === +userOTPParent) {
      alert("correct otp");
    } else {
      alert("wrong otp");
    }
  };
  return (
    <div className="otp-parent-container">
      <GenerateOTP setOrgOTPParent={setOrgOTPParent} />
      <InputOTP
        setUserOTPParent={setUserOTPParent}
        handleSubmitOTP={handleSubmitOTP}
        isDisableBtn={isDisableBtn}
        setIsDisableBtn={setIsDisableBtn}
      />
    </div>
  );
};

export default OTP;
