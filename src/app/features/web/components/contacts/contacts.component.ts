import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_CONSTANTS } from '../../../../core/constants';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  imports: [RouterModule, CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  constant=APP_CONSTANTS
  
}
