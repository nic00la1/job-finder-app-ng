import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonItem,
  IonLabel,
  IonChip,
  IonButton,
  IonIcon,
  IonThumbnail,
  IonText,
  IonList,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonItem,
    IonLabel,
    IonChip,
    IonButton,
    IonIcon,
    IonThumbnail,
    IonText,
    IonList,
  ],
})
export class JobComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
