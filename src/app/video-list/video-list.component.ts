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
        <p>{{ video.video_url }}</p>

        <iframe width="560" height="315" src= "{{ video.video_url }}"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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
