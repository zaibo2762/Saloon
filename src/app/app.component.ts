import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { GuideComponent } from './Components/guide/guide.component';
import { FeaturesComponent } from './Components/features/features.component';
import { VideoComponent } from './Components/video/video.component';
import { SliderComponent } from './Components/slider/slider.component';
import { PricingComponent } from './Components/pricing/pricing.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,AboutUsComponent,PricingComponent ,GuideComponent,FeaturesComponent,VideoComponent,SliderComponent,TestimonialsComponent,BlogsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Saloon';
}
