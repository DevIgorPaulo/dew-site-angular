import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho';
import { RodapeComponent } from './rodape/rodape';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }
