import { Component, OnInit } from '@angular/core';
import { faTwitter, faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  faWhatsapp = faWhatsapp;
  faLocationDot = faLocationDot;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;

  age: number = 0

  ngOnInit(): void {
    const today = new Date();
    this.age = today.getFullYear();
  }
}
