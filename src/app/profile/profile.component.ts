import { Component, OnInit } from '@angular/core';
import { Contact } from  "../entities/contact";
  import { NgForm } from "@angular/forms";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  contact: Contact;

  constructor() {
    this.contact= new Contact()
   }

  ngOnInit() {
  }

  onSubmit(Contactform: NgForm) {
      console.log(Contactform.value);
}
  }