import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit, OnDestroy {
  targetDate: Date = new Date('2024-09-06T00:00:00'); // Establece aquí tu fecha objetivo

  constructor(private router: Router, private modal: NzModalService) {
    
  }

  // Inicializar timeRemaining con valores predeterminados
  timeRemaining: { weeks: number; days: number; hours: number; minutes: number; seconds: number } = {
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  private subscription: Subscription | null = null;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.subscription = interval(1000).subscribe(() => this.updateCountdown());
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  modalContactos() {
    this.modal.info({
      nzTitle: 'Lineas de Atencion',
      nzContent: `<a href='https://wa.me/573005161540'><span nz-icon nzType="whats-app" nzTheme="outline"></span> +57 3005161540</a> | <a href='https://wa.me/573014267490'><span nz-icon nzType="whats-app" nzTheme="outline"></span> +57 3014267490</a>`,
    });
  }

  navigate(){
    this.router.navigate(['/inscripciones'])
  }

  private updateCountdown() {
    const currentTime = new Date().getTime();
    const targetTime = this.targetDate.getTime();
    const timeDiff = targetTime - currentTime;

    if (timeDiff <= 0) {
      this.timeRemaining = {
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    } else {
      this.timeRemaining = {
        weeks: Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7)),
        days: Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDiff % (1000 * 60)) / 1000)
      };
    }
  }
}


