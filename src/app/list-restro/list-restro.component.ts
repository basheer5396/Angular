import { RestoService } from './../resto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css'],
})
export class ListRestroComponent implements OnInit {
  constructor(private resto: RestoService) {}
  collection: any = {};
  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    });
  }
  deleteResto(item: any) {
    this.collection.splice(item - 1, 1);
    this.resto.deleteResto(item).subscribe((result) => {
      console.warn('result', result);
    });
  }
}
