export interface IApiResponse {
  message: string
  result: boolean,
  data: any
}
export interface IParentDept {
      departmentId:Number,
      departmentName: string,
      departmentLogo:string
}

export interface IChildDept {
  childDeptId:Number,
  parentDeptId: string,
  departmentName:string
}
