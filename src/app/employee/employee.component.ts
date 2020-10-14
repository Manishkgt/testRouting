import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  emp = [
    {'name':'manish','id':2144},
    {'name':'rahul','id':2144},
    {'name':'sagar','id':2144},
    {'name':'pritam','id':2144},
  ];

}
