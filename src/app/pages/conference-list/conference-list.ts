
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceList {

  searchTitle: string = '';

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Conférence sur Angular 21',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 30,
      nbParticipants: 5
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier sur les Signals Angular',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 10,
      nbParticipants: 4
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Conférence sur le développement web',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 20,
      nbParticipants: 20
    }
  ];

  get filteredConferences(): Conference[] {
    return this.conferences.filter(conference =>
      conference.title.toLowerCase()
        .includes(this.searchTitle.trim().toLowerCase())
    );
  }

  placesRestantes(conference: Conference): number {
    return Math.max(
      0,
      conference.maxParticipants - conference.nbParticipants
    );
  }

  inscrire(conference: Conference): void {
    if (this.placesRestantes(conference) > 0) {
      conference.nbParticipants++;
    }
  }
}
