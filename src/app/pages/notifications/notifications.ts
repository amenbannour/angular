import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {
  afficher: boolean = false;

  notifications: string[] = [
    'Nouvelle conférence disponible',
    'Votre inscription est confirmée'
  ];

  toggleNotifications() {
    this.afficher = !this.afficher;
  }
}