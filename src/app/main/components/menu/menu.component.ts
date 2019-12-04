import {Component, OnInit} from '@angular/core';

export interface Section {
  name: string;
  type: string;
  route: string;
  action: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  folders: Section[] = [
    {
      name: 'Calculator',
      type: 'dialog',
      route: '',
      action: ''
    },
    {
      name: 'My Notes',
      type: 'dialog',
      route: '',
      action: ''
    },
    {
      name: 'Quick Search',
      type: 'route',
      route: '',
      action: ''
    },
    {
      name: 'Comp Shop',
      type: 'dialog',
      route: '',
      action: ''
    },
    {
      name: 'Email Template',
      type: 'route',
      route: '',
      action: ''
    },
    {
      name: 'Documents',
      type: 'route',
      route: '',
      action: ''
    },
    {
      name: 'OTB Customer',
      type: 'route',
      route: '',
      action: ''
    },
    {
      name: 'Quick SKU',
      type: 'dialog',
      route: '',
      action: ''
    },
    {
      name: 'Settings',
      type: 'dialog',
      route: '',
      action: ''
    },
    {
      name: 'Logout',
      type: 'route',
      route: '',
      action: ''
    }
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
