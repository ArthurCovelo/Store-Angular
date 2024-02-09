import { Component, Input } from '@angular/core';
import { LabelComponent } from './label/label.component';
import { PrecoComponent } from './preco/preco.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LabelComponent, PrecoComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
	@Input()
	gameCover: string = ''
	@Input()
	gameLabel:string = ''
	@Input()
	gameType: string = ''
	@Input()
	gamePrice: string = ''

}
