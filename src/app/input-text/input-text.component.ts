import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }

}
