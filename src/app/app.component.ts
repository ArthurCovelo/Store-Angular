import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './Components/menu-bar/menu-bar.component';
import { CardComponent } from './Components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from "./Components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MenuBarComponent, CardComponent, HomeComponent, FooterComponent]
})
export class AppComponent {
  title = 'Store-Angular';
}
