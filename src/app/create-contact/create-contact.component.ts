import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../interface/contact';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {

  editContactData: boolean = false;
  @Input() createContect: boolean;
  @Input() selectedContact: Contact;
  @Output() saveContact = new EventEmitter<Contact>();
  @Output() hideDialog = new EventEmitter<any>();
  submitted = false;


  constructor() { }

  ngOnInit(): void {
  }

  /**
   * hide the dialog
   */
  hideDialogs() {
    this.createContect = false;
    this.submitted = false;
    this.hideDialog.emit(false)
  }

  /**
   * will save the new data
   * @param contact 
   */
  saveContacts(contact: Contact) {
    this.submitted = true;
    if (this.selectedContact?.firstName && this.selectedContact?.lastName && this.selectedContact?.phone) {
      this.createContect = false;
      this.submitted = false;
      this.saveContact.emit(contact);
    }

  }

}
