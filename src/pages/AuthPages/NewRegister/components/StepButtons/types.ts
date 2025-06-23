export interface StepButtonsProps {
  onPrevious: (e: React.MouseEvent) => void;
  isSubmitting?: boolean;
  isFirstStep?: boolean;
}
