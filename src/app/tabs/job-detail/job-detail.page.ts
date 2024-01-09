import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonThumbnail,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonChip,
  IonText,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonCol,
  IonFooter,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { bookmark, bookmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonThumbnail,
    IonBackButton,
    IonList,
    IonItem,
    IonLabel,
    IonChip,
    IonText,
    IonRow,
    IonSegment,
    IonSegmentButton,
    IonCol,
    IonFooter,
    IonButton,
    IonIcon,
  ],
})
export class JobDetailPage implements OnInit {
  job: any = {};
  jobs: any[] = [];
  segment_value = 'description';
  bookmark = false;

  constructor(private route: ActivatedRoute) {
    addIcons({ bookmark, bookmarkOutline });
  }

  ngOnInit() {
    this.jobs = [
      {
        id: 1,
        company: 'TikTok',
        location: 'Warszawa, Masovian Voivodeship',
        expires_on: '21/02/24',
        post: 'Senior UX Designer',
        type: 'Full Time',
        salary: 'PLN 14K/mo',
        logo_dark: 'tiktok_dark.png',
        logo_light: 'tiktok_light.png',
        image: 'ux.jpg',
        description: [
          '3 or more years of UX design experience. Preference will be given to candidates who have experience designing engaging and interactive solutions.',
        ],
        about_the_job:
          'In this position, you will be responsible for creating engaging and interactive designs for our platform. You will work with other designers and product managers to create user-centered designs.',
      },
      {
        id: 2,
        company: 'Uber Technologies',
        location: 'Wrocław Lower Silesian Voivodeship',
        expires_on: '07/12/23',
        post: 'Full-Stack Developer',
        type: 'Part Time',
        salary: 'PLN 22K/mo',
        logo_dark: 'uber_dark.png',
        logo_light: 'uber_light.png',
        image: 'developer.jpg',
        description: [
          '5 or more years of experience needed as a Senior developer in Full Stack. Preference will be given to candidates who have experience designing complex solutions and working in a fast-paced environment.',
        ],
        about_the_job:
          'In this role, you will be responsible for developing and maintaining our web applications. You will work closely with our product and design teams to implement new features and improve existing ones.',
      },
      {
        id: 3,
        company: 'LinkedIn Corp.',
        location: 'Gdańsk, Pomeranian Voivodeship',
        expires_on: '15/12/23',
        post: 'Lead UX Designer',
        type: 'Part Time',
        salary: 'PLN 11K/mo',
        logo_dark: 'linkedin_dark.png',
        logo_light: 'linkedin_light.png',
        image: 'ux2.jpg',
        description: [
          '4 or more years of UX design experience. Preference will be given to candidates who have experience designing complex solutions for large-scale companies.',
        ],
        about_the_job:
          'As a Lead UX Designer, you will guide and mentor a team of designers to create intuitive user interfaces. You will also collaborate with other teams to ensure our designs meet user needs and business goals.',
      },
    ];

    const id = this.route.snapshot.paramMap.get('id');
    const job = this.jobs.find((x) => x.id == id);
    if (job) {
      this.job = job;
    }
  }

  changeSegment(event: any) {
    console.log(event);
    this.segment_value = event.detail.value;
  }

  toggleBookmark() {
    this.bookmark = !this.bookmark;
  }
}
