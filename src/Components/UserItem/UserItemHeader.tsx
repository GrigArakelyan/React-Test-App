import { FC } from "react"
import { UserType } from "../../Types/users"
import { Image } from "react-bootstrap"

type UserHeaderProps = {
   user:UserType | undefined
}

const UserItemHeader:FC<UserHeaderProps> = ({user}) => {
   

   return(
      <div className="d-flex justify-content-between align-items-center p-5 bg-secondary bg-opacity-10">
            {user?.avatar.link && <Image  src={user?.avatar.link} alt="User Image" 
               className="rounded-circle shadow-lg object-fit-cover m-5 w-25 h-25"/>}
            <div className="d-flex flex-column align-items-start justify-content-between d-inline mx-5 px-4 w-50 sm m-3">
                  <h2 className="h1 my-3 w-100 text-start">
                     {`${user?.lastName} ${user?.firstName}`}
                  </h2>
               <div className="mt-3 w-100">
                  <div  className="d-flex justify-content-between align-items-center">
                     <p className="text-md-start m-2 fw-bolder lh-3 w-25" >Department</p>
                     <p  className="text-md-start m-2 fw-light lh-3 w-100">{user?.department.title}</p>
                  </div>
                  <div  className="d-flex justify-content-between align-items-center">
                     <p className="text-md-start m-2 fw-bolder lh-3 w-25">Position</p>
                     <p  className="text-md-start m-2 fw-light lh-3 w-100">{user?.position}</p>
                  </div>
                  <div  className="d-flex justify-content-between align-items-center">
                     <p className="text-md-start m-2 fw-bolder lh-3 w-25">Phone</p>
                     <p  className="text-md-start m-2 fw-light lh-3 w-100">{user?.phone}</p>
                  </div>
                  <div  className="d-flex justify-content-between align-items-center">
                     <p className="text-md-start m-2 fw-bolder lh-3 w-25">Email</p>
                     <p className="text-md-start m-2 fw-light lh-3 w-100">{user?.email}</p>
                  </div>
               </div>
            </div>
         </div>
   )
}

export default UserItemHeader