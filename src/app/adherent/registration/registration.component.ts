import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../../controller/service/registration.service";
import {Registration} from "../../controller/model/registration.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
  }

  onRegister(registerForm: NgForm){
    console.log(registerForm.value)
  }

  register(){
    this.service.persist().subscribe(
      data =>{
        console.log(data)
      }, error =>{
        console.log(error.message)
      }
    );
  }

  // Getters
  get registration(): Registration {
    return this.service.registration;
  }
}
