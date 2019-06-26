import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  public job = {
      name: 'Natasha Andrade',
      address: '#4830 Hummingbird Way Cambridge, MA 02142',
      employees: [
        {
          name: 'Thomas Mumford',
          hours: 3.5,
          phone: '781-234-5698'
        }
      ]
  }

  constructor() { }

  ngOnInit() {
  }

}
