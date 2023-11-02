import { FC } from "react"

const TimeSheetItemHeader:FC = () => {

   
   return(
      <div  className="d-flex justify-content-between align-items-center border-bottom border-top border-2">
         <p className="fs-4 fw-normal text-center my-4 sm fs-6 w-100 align-middle ">Assessment</p>
         <p className="fs-4 fw-normal text-center my-4 sm fs-6 w-100 align-middle">Status</p>
         <p className="fs-4 fw-normal text-center my-4 sm fs-6 w-100 align-middle">Break Minuts</p>
         <p className="fs-4 fw-normal text-center my-4 sm fs-6 w-100 align-middle">Location Chacked</p>
         <p className="fs-4 fw-normal text-center my-4 sm fs-6 w-100 align-middle">Work Time</p>
         <p className="fs-4 fw-normal text-center my-4 sm fs-6 w-100 align-middle">Minutes</p>
      </div>
   )}
export default TimeSheetItemHeader