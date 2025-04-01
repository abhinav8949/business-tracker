import { Component } from '@angular/core';
import { FeaturesComponent } from "../../components/features/features.component";
import { StatsComponent } from "../../components/stats/stats.component";
import { AboutComponent } from "../../components/about/about.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-about-tab',
  imports: [RouterModule, CommonModule, FeaturesComponent, StatsComponent, AboutComponent, HeaderComponent, FooterComponent],
  templateUrl: './about-tab.component.html',
  styleUrl: './about-tab.component.css'
})
export class AboutTabComponent {

}
