import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  propertyTypes: Array<string> = ["House", "Apartment", "Duplex"];
  furnishTypes: Array<string> = ["Fully", "Semi", "Unfurnished"];

  propertyView = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Form submitted! You Rock!');
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

}