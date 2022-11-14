import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapsed = true;

  mainMenu = [
    {
      name: 'Search Bikes',
      url: ''
    },
    {
      name: 'Blog',
      url: ''
    },
    {
      name: 'Donate',
      url: ''
    },
    {
      name: 'Stolen Bike?',
      url: ''
    },
    {
      name: 'Help',
      url: ''
    },
    {
      name: 'Log In',
      url: ''
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
