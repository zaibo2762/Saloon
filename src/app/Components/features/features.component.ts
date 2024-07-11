import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const firstDivs = document.querySelectorAll('.first');
    const imgDivs = document.querySelectorAll('.head img');

    firstDivs.forEach((div, index) => {
      const rect = div.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        div.classList.add('animate-fade-in');
      } else {
        div.classList.remove('animate-fade-in');
      }
    });

    imgDivs.forEach((img, index) => {
      const rect = img.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        img.classList.add('animate-slide-in');
      } else {
        img.classList.remove('animate-slide-in');
      }
    });
  }
}
