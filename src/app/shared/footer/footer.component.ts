import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  ngOnInit(): void {
    const today = new Date();
    this.age = today.getFullYear();
  }

  navigateWhasa() {
    window.location.href = 'https://wa.me/573005161540';
  }

  navigateWhasa2() {
    window.location.href = 'https://wa.me/573014267490';
  }

  navigateMap() {
    window.location.href = 'https://maps.app.goo.gl/swqRMz6qhfZhCkmL8'
  }

  navigateMaps() {
    window.location.href = 'https://maps.app.goo.gl/Wyn1fVAiQsrJVj4F6'
  }

  navigateFB() {
    window.location.href = 'https://www.facebook.com/tkd.sunbae?locale=es_LA'
  }

  navigateInsta() {
    window.location.href = 'https://www.instagram.com/club_taekwondo_sunbae/'
  }
}
