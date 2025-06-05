export interface RegistrationStepsProps {
  activeStep: number;
  onStepChange: (step: number) => void;
}

export interface StepInfo {
  id: number;
  title: string;
  description: string;
  iconBlack: string;
  iconWhite: string;
}
