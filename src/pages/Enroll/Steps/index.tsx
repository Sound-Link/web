import { useState } from "react";
import EnrollStep1 from "./step1";
import EnrollStep2 from "./step2";
import EnrollStep3 from "./step3";
import EnrollStep4 from "./step4";
import EnrollStep5 from "./step5";

type StepType = 1 | 2 | 3 | 4 | 5;

const EnrollSteps = () => {
  const [stepStatus, setStepStatus] = useState<StepType>(1);

  return (
    // opacity로 화면 전환
    <>
      <EnrollStep1 />
      <EnrollStep2 />
      <EnrollStep3 />
      <EnrollStep4 />
      <EnrollStep5 />
    </>
  );
};

export default EnrollSteps;
