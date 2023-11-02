import { FC } from "react"


interface CheckboxProps {
   name: string;
   className: string,
   defValue: boolean
   onChange: () => void
}
const Checkbox:FC<CheckboxProps> = ({name, defValue, onChange ,className}) => {

   return (
      <input 
         type="checkbox" 
         name={name} 
         checked={defValue} 
         onChange={onChange} 
         className={className} 
         />
   )
}
export default Checkbox