import {useState} from "react";
import {Spinner} from "reactstrap"
const useDataProcessing = ()=>{
  const [processing,setProcessing] = useState(false)
  const btnProcessing = ()=><Spinner size='sm'/>
  return {
    processing,
    setProcessing,
    btnProcessing
  }
}
export default useDataProcessing;