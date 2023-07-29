import { useState, useCallback } from "react";
import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import EnrollStep2 from "./step2";
import EnrollStep3 from "./step3";
import EnrollStep1 from "./step1";

const StepComponent = styled(Flex)`
  opacity: 0;
  display: none;
  transition: opacity 1s;
  &.active {
    opacity: 1;
    display: flex;
  }
`;

const EnrollSteps = () => {
  const [stepStatus, setStepStatus] = useState<number>(1);

  const nextStep = useCallback(() => {
    setStepStatus(prev => prev + 1);
  }, []);

  return (
    // opacity로 화면 전환
    // 화면 전환 수정 필요
    <Flex flex="1" width="100%">
      {stepStatus === 1 && (
        <StepComponent
          className={stepStatus === 1 ? "active" : ""}
          position="absolute"
          width="100%"
        >
          <EnrollStep1 nextStep={nextStep} />
        </StepComponent>
      )}
      {stepStatus === 2 && (
        <StepComponent
          className={stepStatus === 2 ? "active" : ""}
          position="absolute"
          width="100%"
        >
          <EnrollStep2 nextStep={nextStep} />
        </StepComponent>
      )}
      {stepStatus === 3 && (
        <StepComponent
          className={stepStatus === 3 ? "active" : ""}
          position="absolute"
          width="100%"
        >
          <EnrollStep3 />
        </StepComponent>
      )}
    </Flex>
  );
};

export default EnrollSteps;
