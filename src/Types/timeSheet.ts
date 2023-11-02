export type TimeSheetType = {
   push(userTimeSheet: TimeSheetType): unknown
   id: string,
   assessment: number,
   breakMinutes: number,
   minutes: number,
   startTime: string,
   endTime: string,
   note: null,
   status: string,
   locationChecked: false,
   approvalPersonId: null,
   userId: string,
   companyId: string
}