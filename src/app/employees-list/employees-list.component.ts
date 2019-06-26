import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  id: number;
  private sub: any;
  private job;

  private jobs = [{
      name: 'Natasha Andrade',
      address: '#4830 Hummingbird Way Cambridge, MA 02142',
      employees: [
        {
          id: 1,
          name: 'Thomas Mumford',
          hours: 3.5,
          phone: '781-234-5698'
        },
        {
          id: 2,
          name: 'Lucas Florey',
          hours: 3.5,
          phone: '781-234-6789'
        },
        {
          id: 3,
          name: 'Cody Cussen',
          hours: 3.5,
          phone: '781-456-5698'
        }
      ]
    },
    {
      name: 'Dylan Plant',
      address: '2925 Fullton Street Parkersburg, WV 26101',
      employees: [
        {
          id: 1,
          name: 'Thomas Mumford',
          hours: 3.5,
          phone: '781-234-5698'
        },
        {
          id: 2,
          name: 'Lucas Florey',
          hours: 3.5,
          phone: '781-234-6789'
        },
        {
          id: 3,
          name: 'Cody Cussen',
          hours: 3.5,
          phone: '781-456-5698'
        }
      ]
    },
    {
      name: 'Scarlet Harris',
      address: '1461 Snider Street Manassa, CO 81141',
      employees: [
        {
          id: 1,
          name: 'Thomas Mumford',
          hours: 3.5,
          phone: '781-234-5698'
        },
        {
          id: 2,
          name: 'Lucas Florey',
          hours: 3.5,
          phone: '781-234-6789'
        },
        {
          id: 3,
          name: 'Cody Cussen',
          hours: 3.5,
          phone: '781-456-5698'
        }
      ]
    },
    {
      name: 'Sophia Perkins',
      address: '3162 Austin Secret Lane Price, UT 84501',
      employees: [
        {
          id: 1,
          name: 'Thomas Mumford',
          hours: 3.5,
          phone: '781-234-5698'
        },
        {
          id: 2,
          name: 'Lucas Florey',
          hours: 3.5,
          phone: '781-234-6789'
        },
        {
          id: 3,
          name: 'Cody Cussen',
          hours: 3.5,
          phone: '781-456-5698'
        }
      ]
    },
    {
      name: 'Claire Watts',
      address: '3715 Leisure Lane San Louis Ubispo, CA 93401',
      employees: [
        {
          id: 1,
          name: 'Thomas Mumford',
          hours: 3.5,
          phone: '781-234-5698'
        },
        {
          id: 2,
          name: 'Lucas Florey',
          hours: 3.5,
          phone: '781-234-6789'
        },
        {
          id: 3,
          name: 'Cody Cussen',
          hours: 3.5,
          phone: '781-456-5698'
        }
      ]
    }

  ]

  incrementHours(employee){
      employee.hours += 0.5;
  }

  decrementHours(employee){
      employee.hours -= 0.5;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.job = this.jobs[ this.id + 1 ] ;
      // In a real app: dispatch action to load the details here.
   });
  }

}
