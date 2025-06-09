type LabelProps = {
  htmlFor: string;
  label: string;
};

const Label = ({ htmlFor, label }: LabelProps) => (
  <label htmlFor={htmlFor}>{label}</label>
);

export default Label;