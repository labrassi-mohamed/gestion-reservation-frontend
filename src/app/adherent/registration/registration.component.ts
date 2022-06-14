import {Component, OnInit} from '@angular/core';
import {RegistrationService} from "../../controller/service/registration.service";
import {Registration} from "../../controller/model/registration.model";
import {NgForm} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [MessageService]
})
export class RegistrationComponent implements OnInit {

  constructor(private service: RegistrationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  onRegister(registerForm: NgForm) {
    console.log(registerForm.value)
  }

  register() {
    this.service.persist().subscribe(
      data => {
        if (data == -1) {
          console.log("-1")
          this.messageService.add({severity:'error', summary:'Adhérent existe déjà', detail:'(essayez de vous connecter)'});
        } else if (data == -2) {
          console.log("-2")
          this.messageService.add({severity:'warn', summary:'Email non valide', detail:'Ex: exemple@uca.ma ou @uca.ac.ma'});
        } else if (data == -3) {
          console.log("-3")
          this.messageService.add({severity:'error', summary:'Email n’existe pas'});
        } else if (data == -4) {
          console.log("-4")
          this.messageService.add({severity:'error', summary:'Adhérent existe déjà ', detail:'(essayez de vous connecter)'});
        } else if (data == -5) {
          console.log("-5")
          this.messageService.add({severity:'error', summary:'Adhérent existe déjà ', detail:'(essayez de vous connecter)'});
        } else if (data == 1) {
          console.log("1")
          this.messageService.add({severity:'success', summary:'Vérifiez vos boîte email'});
          this.resetResgistration();
        }
      }, error => {
        console.log(error.message)
      }
    );
  }

  // reset input value
  resetResgistration(){
    this.service.resetResgistration();
  }

  // Getters
  get registration(): Registration {
    return this.service.registration;
  }
}
