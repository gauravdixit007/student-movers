import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  public today = new Date();

  public jobsList = [
    {
      id: 1,
      name: 'Natasha Andrade',
      address: '#4830 Hummingbird Way Cambridge, MA 02142'
    },
    {
      id: 2,
      name: 'Dylan Plant',
      address: '2925 Fullton Street Parkersburg, WV 26101'
    },
    {
      id: 3,
      name: 'Scarlet Harris',
      address: '1461 Snider Street Manassa, CO 81141'
    },
    {
      id: 4,
      name: 'Sophia Perkins',
      address: '3162 Austin Secret Lane Price, UT 84501'
    },
    {
      id: 5,
      name: 'Claire Watts',
      address: '3715 Leisure Lane San Louis Ubispo, CA 93401'
    }
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
