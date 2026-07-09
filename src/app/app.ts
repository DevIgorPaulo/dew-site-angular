import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './pages/cabecalho/cabecalho';
import { RodapeComponent } from './pages/rodape/rodape';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }
