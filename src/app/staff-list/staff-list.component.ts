import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  elements: any = [
    { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
    { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
    { id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' },
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];
  constructor(private api: ApiService) { }

  staffList: any[] = [];

  ngOnInit(): void {
    this.getStaffList();
  }

  getStaffList() {
    this.api.getStaff().subscribe((res: any) => {
      console.log(res)
      if (res && res.staffList && Array.isArray(res.staffList) && res.staffList.length > 0) {
        this.staffList = res.staffList;
      }
    }, err => {

    })
  }
}
