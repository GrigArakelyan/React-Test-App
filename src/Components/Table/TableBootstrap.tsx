import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { Image } from "react-bootstrap";
import { TableTitles } from "../../Constant/constants";
import { useUsersTimeSheetContext } from "../../hook/useUsersTimeSheetContext";



export const TableBoots:FC = () => {

   const { users } = useUsersTimeSheetContext();
   const navigate = useNavigate();


   return(
      <table className="table table-responsive sm">
         <thead className="border-bottom">
            <tr>
            {TableTitles.map(title => (
               <th key={title} scope="col" className="text-start fw-bold py-4 fs-4 align-middle sm fs-5">{title}</th>
               ))}
            </tr>
         </thead>
         <tbody>
         {users.map(user => (
            <tr key={user.id} role="button" onClick={() => navigate(`/user/${user.id}`)}>
               <td colSpan={1} className="text-start">
                  <Image src={user.avatar.link} width={70} height={70} alt="Image"
                  className="rounded-circle shadow-lg object-fit-cover w-10"/>
               </td>
               <td className="text-start fw-normal fs-6 py-4 align-middle">{`${user.lastName} ${user.firstName}`}</td>
               <td className="text-start fw-light fs-6 py-4 align-middle">{user.email}</td>
               <td className="text-start fw-light fs-6 py-4 align-middle">{user.position}</td>
               <td className="text-start fw-light fs-6 py-4 align-middle">{user.phone}</td>
            </tr>))}
         </tbody>
      </table>
   )
} 