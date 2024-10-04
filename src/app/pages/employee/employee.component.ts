import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { IApiResponse, IChildDept, IParentDept } from '../../model/interface/master';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  isFormVisible = signal<boolean>(false)
  masterService = inject(MasterService)
  parentDept = signal<IParentDept[]>([])
  childDept = signal<IChildDept[]>([])
  parentDeptId:number = 0

  ngOnInit(): void {
    this.getParentDept()
  }

  getParentDept(){
    this.masterService.getAllDept().subscribe((res:IApiResponse) => {
      console.log(res.data)
      this.parentDept.set(res.data)
    })
  }


  onParentDeptChange(){
    this.masterService.getChildFromParentDept(this.parentDeptId).subscribe((res:IApiResponse) => {
      console.log(res.data)
      this.childDept.set(res.data)
    })
  }
}
