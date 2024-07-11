import { Component, HostListener, ElementRef, ViewContainerRef  } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  animations:[
    trigger('counterAnimation', [
      transition('* => *', [
        animate('1s ease-in-out', style({
          transform: 'translateY(0)'
        }))
      ])
    ]),
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('500ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ]
  
})
export class AboutUsComponent {
  numbers = [
    { value: 0, target: 1265, label: 'Users' },
    { value: 0, target: 1000, label: 'Downloads' },
    { value: 0, target: 508, label: 'Likes' },
    { value: 0, target: 809, label: '5 Star Rating' }
  ];

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.updateCounter();
    this.triggerCardAnimation();
  }

  updateCounter() {
    const scrollPosition = window.scrollY;
    const aboutSection = document.querySelector('.about') as HTMLElement | null;
  
    if (aboutSection) {
      const aboutSectionOffsetTop = aboutSection.offsetTop;
      const aboutSectionHeight = aboutSection.offsetHeight;
  
      if (scrollPosition > aboutSectionOffsetTop - aboutSectionHeight && scrollPosition < aboutSectionOffsetTop + aboutSectionHeight) {
        this.numbers.forEach((number) => {
          let start = 0;
          let end = number.target;
          let duration = 2000; // duration of the animation in milliseconds
          let startTime: number | null = null;
  
          function animate(time: number) {
            if (!startTime) {
              startTime = time;
            }
            let timeElapsed = time - (startTime as number);
            let progress = Math.min(timeElapsed / duration, 1);
            let currentValue = start + (end - start) * progress;
            number.value = Math.round(currentValue);
  
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }
  
          requestAnimationFrame(animate);
        });
      }
    }
  }
  triggerCardAnimation() {
    const cardConSection = document.querySelector('.cardcon') as HTMLElement | null;
  
    if (cardConSection) { // Add a null check
      const scrollPosition = window.scrollY;
      const cardConSectionOffsetTop = cardConSection.offsetTop;
      const cardConSectionHeight = cardConSection.offsetHeight;
  
      if (scrollPosition > cardConSectionOffsetTop - cardConSectionHeight && scrollPosition < cardConSectionOffsetTop + cardConSectionHeight) {
        cardConSection.classList.add('animate');
      } else {
        cardConSection.classList.remove('animate');
      }
    }
  }
 
}
 

