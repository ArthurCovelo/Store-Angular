import { Component } from '@angular/core';
import { MenuBarComponent } from '../../Components/menu-bar/menu-bar.component';
import { CardComponent } from '../../Components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
