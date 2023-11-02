import { FC } from "react";
import { useParams } from "react-router";
import { TimeSheetType } from "../../Types/timeSheet";
import { useUsersTimeSheetContext } from "../../hook/useUsersTimeSheetContext";
import UserItem from "../../Components/UserItem/UserItem";
import { UserType } from "../../Types/users";

const User:FC = () => {
   const {id} = useParams();
   const {timeSheets, users} = useUsersTimeSheetContext();
   const userTimeSheets:TimeSheetType[] = [];

   const user:UserType | undefined = users.find(user => user.id === id);

   timeSheets.forEach(userTimeSheet => {
      if(userTimeSheet.userId === id){
         userTimeSheets.push(userTimeSheet);
      }
   });
   
   return(
      <>
         <UserItem user={user} timeSheet={userTimeSheets}/>
      </>
   )
}

export default User