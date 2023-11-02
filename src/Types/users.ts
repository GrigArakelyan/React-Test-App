export  type UserType = {
   id: string,
   firstName: string,
   lastName: string,
   email:string,
   position: string,
   phone: string,
   roleId: number,
   managerId: string,
   address: null,
   postalCode: null,
   city: null,
   country: null,
   subDepartment: null,
   manager: {
      id: string,
      firstName: string,
      lastName: string,
      archivedAt: null,
      email: string,
      phone: string,
      position: string,
      avatar: {
        link: string
      },
   },
   avatar: {
     link: string,
   },
   department: {
     id: string,
     title: string,
     managerId: string,
   },
    group: null,
    division: null
}