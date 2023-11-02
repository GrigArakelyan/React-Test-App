import { FC } from "react";
import { UserType } from "../../Types/users";
import { TimeSheetType } from "../../Types/timeSheet";
import UserItemHeader from "./UserItemHeader";
import UserInfo from "./UserInfo";
import ManagerItem from "./ManagerItem";

type UserItemProps = {
   user: UserType | undefined
   timeSheet: TimeSheetType[]
}
const UserItem:FC<UserItemProps> = ({user, timeSheet}) => {

   
   return (
      <>
         <UserItemHeader user={user}/>
         {user?.manager ? 
         <ManagerItem user={user}/> : null}
         <UserInfo timeSheet={timeSheet}/>
      </>
   )
}

export default UserItem