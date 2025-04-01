import { Component } from '@angular/core';
import { DepartmentComponent } from "../../components/department/department.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-department-tab',
  imports: [RouterModule, CommonModule, DepartmentComponent, TestimonialsComponent, HeaderComponent, FooterComponent],
  templateUrl: './department-tab.component.html',
  styleUrl: './department-tab.component.css'
})
export class DepartmentTabComponent {

}
