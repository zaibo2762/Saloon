import { Component } from '@angular/core';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [MatSlideToggleModule,FontAwesomeModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  circle = faCheckCircle;
  plans = [
    {
      title: 'Personal',
      monthlyPrice: 12,
      yearlyPrice: 10,
      description: 'Limited Access',
      features: ['100 GB Disk Space', '2 Sub domains', '5 Email Accounts', 'No License', 'Phone & Mail Support']
    },
    {
      title: 'Business',
      monthlyPrice: 22,
      yearlyPrice: 30,
      description: 'Limited Access',
      features: ['200 GB Disk Space', '5 Sub domains', '10 Email Accounts', '6 Month License', 'Phone & Mail Support']
    },
    {
      title: 'Enterprise',
      monthlyPrice: 32,
      yearlyPrice: 40,
      description: 'Unlimited Access',
      features: ['300 GB Disk Space', '15 Sub domains', '15 Email Accounts', '2 Year License', 'Phone & Mail Support']
    }
  ];
  priceType: 'Monthly' | 'Yearly' = 'Monthly';

  onToggleChange(event: MatSlideToggleChange) {
    this.priceType = event.checked? 'Yearly' : 'Monthly';
  }

}
