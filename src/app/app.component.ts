import { Component, OnInit} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  FormControl
} from "@angular/forms";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  config1 ={
    name: 'ctrl1',
    placeholder: 'one',
    controllerName: 'control_1',
    className: 'lg'
  }
  config2 ={
    name: 'ctrl2',
    placeholder: 'two',
    controllerName: 'control_2',
    appearance: 'standard'

  }
  config3 ={
    name: 'something',
    placeholder: 'three',
    controllerName: 'control_3',
    className: 'sm'
  }
  
  configSelect1 = {
    name: 'select1',
    controllerName: 'select_1',
    required: true,
    multiple: true,
  }
  configSelect2 = {
    name: 'select2',
    controllerName: 'select_2',
    required: false,
    multiple: false,
  }
  configSelect3 = {
    name: 'select3',
    controllerName: 'select_3',
  }
  mainGroup: FormGroup;
  constructor(private fb: FormBuilder){

  }

  ngOnInit(){
    this.mainGroup = this.fb.group({
      control_1: '',
      control_2: '',
      control_3: '',
      select_1: [],
      select_2: '',
      select_3: '',
    })

    //this.mainGroup.patchValue({})
    this.mainGroup.updateValueAndValidity();
  }

  resetForm(){
    this.mainGroup.reset();
  }

  setValue(){
    this.mainGroup.patchValue({select_1: [{text:'two', id:2}]});
    this.mainGroup.patchValue({select_2: { id:3}, control_3:{id:2}});
  }
}

// TODO add routing 