import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: []
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    document.body.className = 'page-home';
  }

  ngOnDestroy(): void {
    document.body.classList.remove('page-home');
  }
}
