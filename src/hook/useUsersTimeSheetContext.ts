import { useContext } from "react";
import { Context } from "../Context/Context";

export const useUsersTimeSheetContext = () => {
   const context = useContext(Context);
   return context
}