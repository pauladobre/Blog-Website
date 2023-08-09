import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categories } from 'src/app/models/categories';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  catgeoryArray: Categories[] | undefined;
    constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val => {
      this.catgeoryArray = val;
    })
  }

}
