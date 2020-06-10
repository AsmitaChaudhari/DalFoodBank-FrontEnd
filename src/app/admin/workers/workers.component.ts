import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
})
export class AdminWorkersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'firstname', 'lastname', 'role'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  firstname: string;
  lastname: string;
  position: number;
  role: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, firstname: 'Asmita', lastname: 'Chaudhari', role: 'Volunteer' },
  { position: 2, firstname: 'Malav', lastname: 'Jani', role: 'Employee' },
  { position: 3, firstname: 'Parth', lastname: 'Parmar', role: 'Volnteer' },
  { position: 4, firstname: 'Tapan', lastname: 'Prajapati', role: 'Employee' },
  { position: 5, firstname: 'Samkit', lastname: 'Shah', role: 'Employee' },
  { position: 6, firstname: 'Siddharth', lastname: 'Kapania', role: 'Employee' },
];
