import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRow,
  IonSearchbar,
  IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { appsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle,
    IonButtons,
    IonButton,
    IonThumbnail,
    IonIcon,
    IonRow,
    IonCol,
    IonLabel,
    IonText,
    IonSearchbar,
  ],
})
export class HomePage implements OnInit {
  constructor() {
    addIcons({ appsOutline });
  }

  ngOnInit() {}
}
