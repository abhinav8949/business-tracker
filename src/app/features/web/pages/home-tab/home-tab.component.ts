import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroCarouselComponent } from "../../components/hero-carousel/hero-carousel.component";
import { FeaturedServicesComponent } from "../../components/featured-services/featured-services.component";
import { CallToActionComponent } from "../../components/call-to-action/call-to-action.component";
import { PricingComponent } from "../../components/pricing/pricing.component";
import { AppoinmentComponent } from "../../components/appoinment/appoinment.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { ContactsComponent } from "../../components/contacts/contacts.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-tab',
  imports: [RouterModule, CommonModule, HeaderComponent, HeroCarouselComponent, FeaturedServicesComponent, CallToActionComponent, PricingComponent, AppoinmentComponent, FaqComponent, ContactsComponent, FooterComponent],
  templateUrl: './home-tab.component.html',
  styleUrl: './home-tab.component.css'
})
export class HomeTabComponent {

}
