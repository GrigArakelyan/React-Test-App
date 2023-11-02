import { FC, ReactNode, createContext, useContext } from "react"
import TimeSheet from "../timesheets.json"
import Users from "../users.json"
import { UserType } from "../Types/users";
import { TimeSheetType } from "../Types/timeSheet";


type UsersContextProps = {
   children: ReactNode
}
type ContextType = {
   users:UserType[],
   timeSheets: TimeSheetType[]
}

export const Context:React.Context<ContextType> = createContext({
   users: JSON.parse(JSON.stringify(Users)),
   timeSheets: JSON.parse(JSON.stringify(TimeSheet))
});

const ContextProvider:FC<UsersContextProps> = ({children}) => {
   
   const value = useContext(Context)

   return (
      <Context.Provider value={value}>
         {children}
      </Context.Provider>
   )
}

export default ContextProvider

