import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  isValid(): boolean {
    return this.name.trim() !== ''
      && this.email.trim() !== ''
      && this.message.trim() !== '';
  }

  sendMessage() {
    // Hier können Sie Ihre Logik für das Senden der Nachricht einfügen
    // Sie können die Werte von 'this.name', 'this.email' und 'this.message' verwenden
    console.log('Message sent:', this.name, this.email, this.message);
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
