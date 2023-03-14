import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-list',
  template: `
    <h2>Videos</h2>
    <ul>
      <li *ngFor="let video of videos">
        <h3>{{ video.video_title }}</h3>
        <p>{{ video.video_description }}</p>
        <iframe width="560" height="315" [src]="video.video_url"></iframe>
      </li>
    </ul>
  `,
})
export class VideoListComponent {
  videos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/video.json').subscribe((data) => {
      this.videos = data;
    });
  }
}
