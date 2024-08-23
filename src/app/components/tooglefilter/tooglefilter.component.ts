import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tooglefilter',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tooglefilter.component.html',
  styleUrl: './tooglefilter.component.scss'
})
export class TooglefilterComponent {

}
