import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": 120000
    },
    {
      "Id": 2,
      "Name": "Green Acres Resort",
      "Type": "Resort",
      "Price": 150000
    },
    {
      "Id": 3,
      "Name": "Sunnyvale Cottage",
      "Type": "Cottage",
      "Price": 95000
    },
    {
      "Id": 4,
      "Name": "Oceanview Villa",
      "Type": "Villa",
      "Price": 200000
    },
    {
      "Id": 5,
      "Name": "Mountain Retreat",
      "Type": "Retreat",
      "Price": 175000
    },
    {
      "Id": 6,
      "Name": "Lakeside Bungalow",
      "Type": "Bungalow",
      "Price": 130000
    }
  ]
}
