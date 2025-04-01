import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  imports: [RouterModule, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryComponent {
  galleryImages = [
    'assets/img/gallery/gallery-1.jpg',
    'assets/img/gallery/gallery-2.jpg',
    'assets/img/gallery/gallery-3.jpg',
    'assets/img/gallery/gallery-4.jpg',
    'assets/img/gallery/gallery-5.jpg',
    'assets/img/gallery/gallery-6.jpg',
    'assets/img/gallery/gallery-7.jpg',
    'assets/img/gallery/gallery-8.jpg'
  ];

  breakpoints = {
    320: { slidesPerView: 0, spaceBetween: 0 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1200: { slidesPerView: 5, spaceBetween: 20 }
  };
}
