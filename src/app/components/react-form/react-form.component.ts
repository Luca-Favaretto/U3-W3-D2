import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss'],
})
export class ReactFormComponent implements OnInit {
  reactForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.reactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      gender: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      profileImage: new FormControl(null, Validators.required),
      biography: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    console.log(this.reactForm);
  }
}
