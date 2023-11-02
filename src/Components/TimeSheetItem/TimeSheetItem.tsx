import { FC, useState } from "react"
import { TimeSheetType } from "../../Types/timeSheet"
import moment from "moment"
import { addZero } from "../../helpers/function"
import Checkbox from "../Checkbox/Checkbox"

type TimeSheetItemProps = {
   time: TimeSheetType,
}

const TimeSheetItem:FC<TimeSheetItemProps> = ({time}) => {

   const [checked, setChecked] = useState<boolean>(time.locationChecked)
   const checkboxChange = () => setChecked(!checked)

   const startTime = `${addZero(moment(time.startTime).hours())}:${addZero(moment(time.startTime).minutes())}`;
   const endTime = `${addZero(moment(time.endTime).hours())}:${addZero(moment(time.endTime).minutes())}`


   return(
      <div className="d-flex justify-content-between align-items-center">
         <p className="fs-5 text-sm-center fw-light my-4 sm fs-6 align-middle w-100">{time.assessment}</p>
         <p className="fs-5 text-sm-center fw-light my-4 sm fs-6 align-middle w-100">{time.status}</p>
         <p className="fs-5 text-sm-center fw-light my-4 sm fs-6 align-middle w-100">{time.breakMinutes}</p>
         <Checkbox name="locationCheckes" defValue={checked} onChange={checkboxChange} 
            className="fs-5 text-sm-center fw-light my-4 sm fs-6 align-middle w-100 p-3" />
         <p className="fs-5 text-sm-center fw-light my-4 sm fs-6 align-middle w-100">{`${startTime} - ${endTime}`}</p>
         <p className="fs-5 text-sm-center fw-light my-4 sm fs-6 align-middle w-100">{time.minutes}</p>
      </div>
   )
}

export default TimeSheetItem