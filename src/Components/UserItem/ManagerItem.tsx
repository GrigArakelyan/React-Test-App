import { FC } from "react"
import { UserType } from "../../Types/users"
import { Image } from "react-bootstrap"

type ManagerItemProps = {
   user: UserType | undefined
}

const ManagerItem:FC<ManagerItemProps> = ({user}) => {

   
   return(
      <div className="m-5 ">
         <h2 className="fs-2 text-center m-5">Manager</h2>
         <div className="d-flex justify-content-between align-items-center py-3 mx-auto">
            {user?.manager?.avatar?.link ? 
               <Image src={user?.manager?.avatar.link} alt="Manager Image" width={300} height={300}
                     className="rounded-circle shadow-lg object-fit-cover m-5 w-25 h-25"/>
            : null}
            <div className="d-flex flex-column align-items-start justify-content-between d-inline m-4 w-50 mx-auto">
               <div  className="d-flex justify-content-between align-items-center w-100">
                  <p className="text-md-start m-2 fw-bolder lh-3 w-25">Name </p>
                  <p  className="text-md-start m-2 fw-light lh-3 w-100">{`${user?.manager?.lastName} ${user?.manager?.lastName}`}</p>
               </div>
               <div  className="d-flex justify-content-between align-items-center w-100">
                  <p className="text-md-start m-2 fw-bolder lh-3 w-25">Position </p>
                  <p  className="text-md-start m-2 fw-light lh-3 w-100">{user?.manager.position}</p>
               </div>
               <div  className="d-flex justify-content-between align-items-center w-100">
                  <p className="text-md-start m-2 fw-bolder lh-3 w-25">Email </p>
                  <p  className="text-md-start m-2 fw-light lh-3 w-100">{user?.manager.email}</p>
               </div>
               <div  className="d-flex justify-content-between align-items-center w-100">
                  <p className="text-md-start m-2 fw-bolder lh-3 w-25">Phone </p>
                  <p  className="text-md-start m-2 fw-light lh-3 w-100">{user?.manager.phone}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ManagerItem