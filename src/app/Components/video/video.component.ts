import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  thumbnail: string = '../../../assets/thumbnail.png';
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const videoElement = document.querySelector('.video-container') as HTMLElement;
    const videoRect = videoElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (videoRect.top <= viewportHeight && videoRect.bottom >= 0) {
      videoElement.classList.add('rotate');
    } else {
      videoElement.classList.remove('rotate');
    }
  }
}
