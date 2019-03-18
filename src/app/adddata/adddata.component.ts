import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  constructor(private myservice: MyservicesService) { }
  json =
    {
      FirstName: "",
      LastName: "",
      Email: "",
      Id: "",
      PhoneNumber: "",
      Designation: "",
      DOB: ""

    }
    value;

  ngOnInit() {
  }
add()
{
this.value=this.myservice.getdata();
this.value.push(this.json);
console.log(this.value);


}
}

