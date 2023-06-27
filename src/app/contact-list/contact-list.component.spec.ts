import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactListComponent } from './contact-list.component';
import { PhoneBookService } from './../phone-book.service';
import { Contact } from '../interface/contact';
import { Observable, of } from 'rxjs';
HttpClientTestingModule
describe('ContactListComponent', () => {
  let phoneBookService: PhoneBookService;

  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactListComponent],
      imports: [HttpClientTestingModule],
      providers: [PhoneBookService, HttpClientTestingModule]
    })
      .compileComponents();

    phoneBookService = TestBed.get(PhoneBookService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('createDialog() : ', () => {
    component.createDialog();
    expect(component.contact).toEqual({});
    expect(component.createContect).toBeTrue();
  });

  it('hideDialog() : ', () => {
    component.hideDialog(true);
    expect(component.createContect).toBeFalse();
  });


  it('editContact() : ', () => {
    let contact: Contact = {
      firstName: 'suraj',
      lastName: 'gupta',
      phone: '9988776655'
    }
    component.editContact(contact);
    expect(component.editContactData).toBeTrue();
    expect(component.contact).toBeDefined();
    expect(component.createContect).toBeTrue();
  });

  it('deleteContact() : ', () => {
    let contact: Contact = {
      firstName: 'suraj',
      lastName: 'gupta',
      phone: '9988776655'
    }
    component.contactList = [];
    component.contactList.push(contact);
    component.deleteContact(contact);
    expect(component.contactList.length).toEqual(0);
  });

  it('getList() : ', () => {
    let contactList = [{
      firstName: 'suraj',
      lastName: 'gupta',
      phone: '9988776655'
    }]
    spyOn(phoneBookService, 'getList').and.returnValue(of(contactList))
    component.getList();
    expect(phoneBookService.getList).toHaveBeenCalled();
    expect(component?.contactList?.length).toEqual(1);
  });


  it('saveContact() for create new : ', () => {
    let contact: Contact = {
      firstName: 'suraj',
      lastName: 'gupta',
      phone: '9988776655'
    }
    component.contactList = [];
    component.editContactData = false;
    component.saveContact(contact);
    expect(component?.contactList?.length).toEqual(1);
  });

  it('saveContact() for edit : ', () => {
    let contact: Contact = {
      firstName: 'rahul',
      lastName: 'gupta',
      phone: '4333434',
      id: '1'
    }
    component.contactList = [{
      firstName: 'suraj',
      lastName: 'gupta',
      phone: '9988776655',
      id:'1'
    }];
    component.editContactData = true;
    component.saveContact(contact);
    expect(component?.contactList[0].firstName).toEqual(contact.firstName);
  });

});
