
import { Controller } from 'react-hook-form';
import { Input } from '../ui/input';

type TInputProps = {
    type : string
    name: string
    label?: string
}



const PhFormInput = ({type ,name, label}: TInputProps) => {
  



    return (
         <div style={{ marginBottom:'20px' }}>
         

         {label ? label : null}
         <Controller
           name={name}
           render={({field}) => (
            <Input {...field}  type={type} id={name}  />
           )}
         
         
         
         
         
         
         />
         
         
         </div>
            
       
    );
};

export default PhFormInput;