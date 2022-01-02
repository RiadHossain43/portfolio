import {
  FormGroup,
  Input,
} from "reactstrap";
export function InputFiled({type='text',label,error,...rest}) {
  return (
    <FormGroup>
      <label>{label}</label>
      <Input type={type} {...rest} />
      {error && <label className='text-danger'>{error}</label>}
    </FormGroup>
  );
}
