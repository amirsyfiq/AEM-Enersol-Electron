import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss']
})
export class FormPage implements OnInit {

  public formRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      name: this.formBuilder.group({
        first: '',
        last: ''
      }),
      email: '',
      phone: this.formBuilder.group({
        mobile: ''
      }),
      skills: this.formBuilder.array(['skill 1', 'skill 2'])
    });
  }

}
