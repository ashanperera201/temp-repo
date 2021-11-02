import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  contentType!: number;
  searchTerm!: string;
  searchedPersons: any[] = [];

  pickedPerson!: any;

  contentTypes: any[] = [
    { value: 0, viewValue: 'View Persons' },
    { value: 1, viewValue: 'View Posts' },
  ];


  personList: any[] = [
    {
      id: 1,
      firstName: 'Ashan Perera',
      count: 10,
      type: false,
      email: 'AshanPerera.201@gmail.com'
    },
    {
      id: 2,
      firstName: 'Person -2',
      count: 10,
      type: false,
      email: 'Person2.201@gmail.com'
    }
  ]

  postList: any[] = [
    {
      id: 0,
      title: 'Person-1',
      imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      createdDateTime: new Date(),
      authorName: 'Ashan Perera',
      totalLikes: 100
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.searchedPersons = this.personList;
  }

  onInputChange = () => {
    if (this.searchTerm) {
      this.searchedPersons = this.searchedPersons.filter(x =>
        x.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        x.email.toLowerCase().includes(this.searchTerm.toLowerCase()))
    } else {
      this.searchedPersons = this.personList;
    }
  }

  selectPerson = (person: any) => {
    this.pickedPerson = person;
  }

}
