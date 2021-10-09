import { RestoService } from './../resto.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css'],
})
export class AddRestroComponent implements OnInit {
  alert: boolean = false;
  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private resto: RestoService) {}

  ngOnInit(): void {}
  collectResto() {
    // console.warn(this.addResto.value);
    this.resto.saveResto(this.addResto.value).subscribe((result) => {
      // console.warn('result is here', result);
      this.alert = true;
      this.addResto.reset({});
    });
  }
  closeAlert() {
    this.alert = false;
  }
}
