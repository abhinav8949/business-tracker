import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-faq',
  imports: [RouterModule, CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      once: true, // Animation happens only once
      easing: 'ease-in-out' // Easing effect
    });
    AOS.refresh();
  }
}
