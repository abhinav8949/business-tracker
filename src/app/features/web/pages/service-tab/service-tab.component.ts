import { Component } from '@angular/core';
import { ServiceComponent } from "../../components/service/service.component";
import { AppoinmentComponent } from "../../components/appoinment/appoinment.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-service-tab',
  imports: [ServiceComponent, AppoinmentComponent, HeaderComponent, FooterComponent],
  templateUrl: './service-tab.component.html',
  styleUrl: './service-tab.component.css'
})
export class ServiceTabComponent {

}
