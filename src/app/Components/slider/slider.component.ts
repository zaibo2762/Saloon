import { CommonModule } from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, Component, HostListener, } from '@angular/core';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent  {
  
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const image = document.querySelector('.first');
    const svg = document.querySelector('.second');

    if (image && svg) {
      const imageTop = image.getBoundingClientRect().top;
      const svgTop = svg.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (imageTop < windowHeight && svgTop < windowHeight) {
        image.classList.add('animate');
        svg.classList.add('animate');
      } else {
        image.classList.remove('animate');
        svg.classList.remove('animate');
      }
    }
  }
}
