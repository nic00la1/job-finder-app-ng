import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
  IonSearchbar,
  IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  IonicSlides,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { appsOutline, options } from 'ionicons/icons';
import { JobComponent } from 'src/app/components/job/job.component';

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
    IonList,
    IonListHeader,
    JobComponent,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];
  popular: any[] = [];
  recent: any[] = [];

  constructor() {
    addIcons({ appsOutline, options });
  }

  ngOnInit() {
    this.popular = [
      {
        id: 1,
        company: 'TikTok',
        location: 'Warszawa',
        expires_on: '3/02/24',
        post: 'Senior UX Designer',
        type: 'Full Time',
        salary: 'PLN 14K/mo',
        logo_dark: 'tiktok_dark.png',
        logo_light: 'tiktok_light.png',
      },
      {
        id: 2,
        company: 'Uber Technologies',
        location: 'Wrocław',
        expires_on: '07/12/24',
        post: 'Full-Stack Developer',
        type: 'Full Time',
        salary: 'PLN 22K/mo',
        logo_dark: 'uber_dark.png',
        logo_light: 'uber_light.png',
      },
      {
        id: 3,
        company: 'LinkedIn Corp.',
        location: 'Gdańsk',
        expires_on: '15/12/24',
        post: 'Lead UX Designer',
        type: 'Part Time',
        salary: 'PLN 11K/mo',
        logo_dark: 'linkedin_dark.png',
        logo_light: 'linkedin_light.png',
      },
    ];
    this.recent = [
      {
        id: 1,
        company: 'TikTok',
        location: 'Warszawa',
        expires_on: '3/02/24',
        post: 'Senior UX Designer',
        type: 'Full Time',
        salary: 'PLN 14K/mo',
        logo_dark: 'tiktok_dark.png',
        logo_light: 'tiktok_light.png',
      },
      {
        id: 2,
        company: 'Uber Technologies',
        location: 'Wrocław',
        expires_on: '07/12/24',
        post: 'Full-Stack Developer',
        type: 'Full Time',
        salary: 'PLN 22K/mo',
        logo_dark: 'uber_dark.png',
        logo_light: 'uber_light.png',
      },
      {
        id: 3,
        company: 'LinkedIn Corp.',
        location: 'Gdańsk',
        expires_on: '15/12/24',
        post: 'Lead UX Designer',
        type: 'Part Time',
        salary: 'PLN 11K/mo',
        logo_dark: 'linkedin_dark.png',
        logo_light: 'linkedin_light.png',
      },
    ];
  }
}
