import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobileScreen: boolean = false;

  ngOnInit() {
    this.isMobileScreen = window.innerWidth < 576;

    window.addEventListener('resize', () => {
      this.isMobileScreen = window.innerWidth < 576;
    });
  }
}

