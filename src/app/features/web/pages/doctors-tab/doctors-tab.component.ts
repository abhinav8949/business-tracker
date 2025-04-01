import { Component } from '@angular/core';
import { DoctorsComponent } from "../../components/doctors/doctors.component";
import { GalleryComponent } from "../../components/gallery/gallery.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-doctors-tab',
  imports: [RouterModule, CommonModule, DoctorsComponent, GalleryComponent, HeaderComponent, FooterComponent],
  templateUrl: './doctors-tab.component.html',
  styleUrl: './doctors-tab.component.css'
})
export class DoctorsTabComponent {

}
