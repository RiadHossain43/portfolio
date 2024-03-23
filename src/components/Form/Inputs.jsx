import { FormGroup, Input } from "reactstrap";
export function InputFiled({ type = "text", label, error, ...rest }) {
  return (
    <FormGroup>
      <label>{label}</label>
      <Input type={type} {...rest} />
      {error && <small className="text-danger">{error}</small>}
    </FormGroup>
  );
}
