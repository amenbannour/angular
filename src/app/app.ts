
import { Component } from '@angular/core';

import { Header } from './sharedcomponent/header/header';
import { Menu } from './sharedcomponent/menu/menu';
import { Footer } from './sharedcomponent/footer/footer';

import { Profil } from './pages/profil/profil';
import { Amis } from './pages/amis/amis';
import { Notifications } from './pages/notifications/notifications';

// Import du composant des conférences
import { ConferenceList } from './pages/conference-list/conference-list';

@Component({
  selector: 'app-root',
  standalone: true,

 
  imports: [
    Header,
    Menu,
    Profil,
    Amis,
    Notifications,
    ConferenceList,
    Footer
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
