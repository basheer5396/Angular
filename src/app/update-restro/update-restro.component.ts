import { RestoService } from './../resto.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css'],
})
export class UpdateRestroComponent implements OnInit {
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private router: ActivatedRoute, private resto: RestoService) {}

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.resto
      .getCurrentResto(this.router.snapshot.params.id)
      .subscribe((result: any) => {
        this.editResto = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          address: new FormControl(result['address']),
        });
        //console.warn('result', result);
      });
  }
  collection() {
    console.warn(this.editResto.value);
    this.resto
      .updateResto(this.router.snapshot.params.id, this.editResto.value)
      .subscribe((result) => console.warn(result));
  }
}
