import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre-html',
  imports: [RouterLink],
  templateUrl: './sobre-html.html',
  styleUrls: []
})
export class SobreHtmlComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    document.body.className = 'page-html';
  }

  ngOnDestroy(): void {
    document.body.classList.remove('page-html');
  }
}
