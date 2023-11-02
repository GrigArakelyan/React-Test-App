import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Months } from '../../Constant/constants';

type BasicSelectProps = {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
}

const BasicSelect:React.FC<BasicSelectProps> = ({value, setValue}) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const searchMonth = searchParams.get("month");
  

  return (
    <select className="form-select py-3 shadow-sm rounded-3 bg-success bg-opacity-10 w-100" 
        name='month'
        value={searchMonth || value}
        onChange={(event) => {
          setValue(event.target.value)
          setSearchParams({month: event.target.value})
        }}> 
      {Months.map(month => (
            <option key={month} value={month}>{month}</option>
         ))}
    </select>
  );
}

export default BasicSelect