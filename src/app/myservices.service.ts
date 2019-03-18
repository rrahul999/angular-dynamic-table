import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {

  constructor() { }
  jason = [{
      "FirstName": "ritesh",
      "LastName": "kumar",
      "Email": "ritesh12@gmail.com",
      "Id": 1,
      "PhoneNumber": 7638924511,
      "Designation": "Software Engineer",
      "DOB": 22091997
  },
  {
      "FirstName": "rohan",
      "LastName": "singh",
      "Email": "rohan65@gmail.com",
      "Id": 2,
      "PhoneNumber": 8099567432,
      "Designation": "system engineer",
      "DOB": 18061995
  },
  {
      "FirstName": "sajal",
      "LastName": "jha",
      "Email": "jhasajal@gmail.com",
      "Id": 3,
      "PhoneNumber": 7645998720,
      "Designation": "Software engineer",
      "DOB": 29031996
  },
  {
      "FirstName": "raj",
      "LastName": "gupta",
      "Email": "raj345@gmail.com",
      "Id": 4,
      "PhoneNumber": 7463830763,
      "Designation": "Software engineer",
      "DOB": 13071998
  },
  {
      "FirstName": "vimal",
      "LastName": "sinha",
      "Email": "vimal99@gmail.com",
      "Id": 5,
      "PhoneNumber": 9554899889,
      "Designation": "Software engineer",
      "DOB": 11021995
  },]
  
    array;
  
    setdata() {
      this.array = this.jason;
    }
    getdata() {
      return this.array;
    }
  }
  
