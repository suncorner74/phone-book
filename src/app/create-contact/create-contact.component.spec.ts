import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContactComponent } from './create-contact.component';

describe('CreateContactComponent', () => {
  let component: CreateContactComponent;
  let fixture: ComponentFixture<CreateContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hideDialogs() : ', () => {
    component.hideDialogs();
    expect(component.createContect).toBeFalsy();
    expect(component.submitted).toBeFalsy();
  });

  it('saveContacts() ', () => {
    component.selectedContact ={
      firstName:'suraj',
      lastName:'kumar',
      phone:'99887766555'
    }
    component.saveContacts({});
    expect(component.submitted).toBeFalse();
    expect(component.createContect).toBeFalse();    
  });

  

});
