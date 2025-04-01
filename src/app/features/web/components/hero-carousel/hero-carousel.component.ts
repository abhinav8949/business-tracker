import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-carousel',
  imports: [RouterModule, CommonModule],
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.css'
})
export class HeroCarouselComponent {

}
