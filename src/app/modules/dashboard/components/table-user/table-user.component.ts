import { Component, Input, OnInit } from '@angular/core';
import { TableUser } from '../../models/dashboard.model';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html'
})
export class TableUserComponent implements OnInit {
  @Input() tableUserData?: TableUser;

  constructor() { }

  ngOnInit(): void {
  }
}
