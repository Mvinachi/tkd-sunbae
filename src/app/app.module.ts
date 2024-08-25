import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { InscripcionesComponent } from './pages/inscripciones/inscripciones.component';
import { TotalPeleadoresComponent } from './pages/total-peleadores/total-peleadores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { StageType } from 'brackets-model';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { HttpClientModule } from '@angular/common/http';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { MenuComponent } from './pages/menu/menu.component';

registerLocaleData(es);

declare global {
  interface Window {
    bracketsViewer?: any | undefined;
  }

  interface Dataset {
    title: string;
    type: StageType;
    roster: { id: number; name: string }[];
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    InscripcionesComponent,
    TotalPeleadoresComponent,
    LeaderboardComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzGridModule,
    NzInputModule,
    NzSelectModule,
    NzRadioModule,
    NzDividerModule,
    NzDatePickerModule,
    NzTableModule,
    NzIconModule,
    NzInputNumberModule,
    NzButtonModule,
    NzModalModule,
    HttpClientModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
