import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [],
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.css'
})
export class GuideComponent {
  currentImage:string = '../../../assets/slider4.jpg';
  changeImage(newImage:string){
    this.currentImage = newImage;
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const image = document.querySelector('.image');
    const svg = document.querySelector('.svg');

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
