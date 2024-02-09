import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preco',
  standalone: true,
  imports: [],
  templateUrl: './preco.component.html',
  styleUrl: './preco.component.css'
})
export class PrecoComponent {
  @Input()
	gameType: string = 'DIGITAL PS4'
	@Input()
	gamePrice: string = 'R$399,90'
}
