import { FC, useState } from "react";
import { TimeSheetType } from "../../Types/timeSheet";
import TimeSheetItem from "../TimeSheetItem/TimeSheetItem";
import BasicSelect from "../Select/Select";
import { useSearchParams } from "react-router-dom";
import moment from "moment";
import TimeSheetItemHeader from "../TimeSheetItemHeader/TimeSheetItemHeader";

type UserInfoProps = {
   timeSheet: TimeSheetType[]
}

const UserInfo:FC<UserInfoProps> = ({timeSheet}) => {
   
   const [searchParams] = useSearchParams();
   const [value, setValue] = useState<string>('')

   const search = searchParams.get('month')
   const filterTimeSheet = timeSheet.filter(filter => moment(filter.startTime).format("MMMM") === search)


   return (
      <div className="mt-5 mb-5 ">
         <div className="d-flex justify-content-around align-items-center w-50 mx-auto my-3 p-3 rounded-4 bg-success bg-opacity-10 shadow-lg">
            <p className="text-center my-3 w-50 fs-4 fw-light mx-3">Search with months</p>
            <div className="w-25 sm w-50">
               <BasicSelect value={value} setValue={setValue}/>
            </div>
         </div>
         <div className="my-5 px-3 pb-5 bg-secondary bg-opacity-10">
            <TimeSheetItemHeader />
            {search ? 
            filterTimeSheet.map(time => (
               <TimeSheetItem key={time.id} time={time}/>
            )) :
            timeSheet.map(time => (
               <TimeSheetItem key={time.id} time={time}/>
            ))}
         </div>
      </div>
   )
}

export default UserInfo