import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre-css',
  imports: [RouterLink],
  templateUrl: './sobre-css.html',
  styleUrls: []
})
export class SobreCssComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    document.body.className = 'page-css';
  }

  ngOnDestroy(): void {
    document.body.classList.remove('page-css');
  }
}
