import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  next= faGreaterThan
  prev=faLessThan
  testimonials = [
    {
      image: 'assets/test1.png',
      content: 'It was a pleasure to work with the guys at Casa De Tech. They made sure you accomplish your business objectives with innovative software solutions and creative web designs!',
      author: 'Tahir Shah',
      company: 'License to Drink Inc.'
    },
    {
      image: 'assets/test2.jpg',
      content: `I found the Saloon App's services to be comprehensive and user-friendly. The range of option available for booking and managing appointment make my experience hassle-free and enjoyable `,
      author: 'Atif',
      company: 'License is ready'
    },
    {
      image: 'assets/test3.jpeg',
      content: `I found the Saloon App's services to be comprehensive and user-friendly. The range of option available for booking and managing appointment make my experience hassle-free and enjoyable `,
      author: 'Hammad',
      company: 'License is ready'
    },
    // add more testimonials here
  ];

  currentIndex = 0;
  paginationDots:any[] = [];

  constructor() {
    this.paginationDots = new Array(this.testimonials.length);
  }

  prevTestimonial() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextTestimonial() {
    if (this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
    }
  }

}
