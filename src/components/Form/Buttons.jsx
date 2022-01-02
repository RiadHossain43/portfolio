import {Button} from "reactstrap";
export function CButton({children,...rest}) {
  return (
    <Button {...rest}>
      {children}
    </Button>
  );
}
