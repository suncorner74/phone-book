import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { PhoneBookService } from './../phone-book.service';
import { Contact } from './../interface/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, OnDestroy {

  phoneListSubscription: any;
  contactList: Contact[];
  contact: Contact = {};
  submitted: boolean = false;
  createContect: boolean = false;
  editContactData: boolean = false;

  constructor(private phoneBookService: PhoneBookService, private changeDetectorRef: ChangeDetectorRef) { }

  /**
   * initial angular execution
   */
  ngOnInit(): void {
    this.getList();
  }

  /**
   * open crate dialog
   */
  createDialog() {
    this.contact ={};
    this.createContect = true;
    // this.changeDetectorRef.detectChanges();
  }

  /**
   * hide dialog
   * @param event 
   */
  hideDialog(event: boolean) {
    this.createContect = false;
  }

  /**
   * save new contact record
   * @param contact 
   */
  saveContact(contact: Contact) {
    if (this.editContactData) {
      this.contactList.map((e) => {
        if (e.id === contact.id) {
          e.firstName = contact.firstName;
          e.lastName = contact.lastName;
          e.phone = contact.phone;
        }
      })
    } else {
      this.contactList.unshift(contact);
    }
    this.createContect = false;
    this.editContactData = false;
  }

  /**
   * edit contact
   * @param contact
   */
  editContact(contact: Contact) {
    this.editContactData = true;
    this.contact = { ...contact };
    this.createContect = true;
  }

  /**
   * delete contact from list
   * @param contact 
   */
  deleteContact(contact: Contact) {
    console.log(contact);
    this.contactList = this.contactList.filter((e: Contact) => e.id !== contact.id);
  }

  /**
   * get all list of data from service
   */
  getList() {
    this.phoneListSubscription = this.phoneBookService.getList().
      subscribe((e: any) => {
        this.contactList = e;
        console.log(this.contactList);
      }, (error) => {
        console.log(error);
      })
  }



  /**
   * to unsubscribe Observable
   */
  ngOnDestroy() {
    this.phoneListSubscription.unsubscribe();
  }


}
