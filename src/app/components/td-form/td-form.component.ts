import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss'],
})
export class TDFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
