import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';
@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

  constructor(private myservice: MyservicesService ) { }
  value: string;
  name: string;

head;
  getValue(){
    this.value = this.myservice.getdata();
    this.head = Object.keys(this.value[1]);

    }


  ngOnInit() {
    this.myservice.setdata();
  }

}
