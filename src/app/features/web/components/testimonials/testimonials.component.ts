import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-testimonials',
  imports: [RouterModule, CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialsComponent {

  testimonialsImages = [
    'assets/img/testimonials/testimonials-1.jpg',
    'assets/img/testimonials/testimonials-2.jpg',
    'assets/img/testimonials/testimonials-3.jpg',
    'assets/img/testimonials/testimonials-4.jpg',
    'assets/img/testimonials/testimonials-5.jpg',
    'assets/img/testimonials/testimonials-2.jpg',
  ];

  testimonialComments = [
    
  ]

  breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 0 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1200: { slidesPerView: 3, spaceBetween: 20 }
  };
}
