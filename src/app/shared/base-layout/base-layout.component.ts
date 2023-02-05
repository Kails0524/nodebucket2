//Title: nodebucket
//Author: Professor Krasso
//Modified By: Kailee Stephens
//Attribution: Code from Bellevue Web Dev sessions and
// https://github.com/buwebdev/web-450

import { Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  year: number = Date.now();

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/login']);
  }
}
