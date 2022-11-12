import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   * Form data
   */
  searchForm: FormGroup = new FormGroup({
    location: new FormControl(),
  });

  @Output() location!: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(formData: any): void {
    if (!formData.location) return;
    this.location = formData.location;
  }
}
