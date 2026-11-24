import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-amis',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './amis.html',
  styleUrl: './amis.css'
})
export class Amis {
  nom: string = 'Ahmed';
  amis: string[] = ['Sami', 'Sara', 'Amine'];
}