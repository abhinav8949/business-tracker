import { Component } from '@angular/core';
import { ContactsComponent } from "../../components/contacts/contacts.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-contact-tab',
  imports: [RouterModule, CommonModule, ContactsComponent, FaqComponent, HeaderComponent, FooterComponent],
  templateUrl: './contact-tab.component.html',
  styleUrl: './contact-tab.component.css'
})
export class ContactTabComponent {

}
