import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  template: `
  <div *ngIf="message">
    {{ message }}
  </div>
  `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [CommonModule, RouterModule]

})

export class AppComponent implements OnInit {
  message!: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMessage().subscribe(data => {
      this.message = data.message;
    });
  }
}
