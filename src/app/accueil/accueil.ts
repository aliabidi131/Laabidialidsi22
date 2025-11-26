import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule
  ],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {
  constructor(private router: Router) {}

  onLogout() {
    console.log('Déconnexion');
    this.router.navigate(['/connexion']);
  }
}
