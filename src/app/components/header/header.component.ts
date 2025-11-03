import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatIconModule,MatButtonModule,NgIf,MatMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone:true
})
export class HeaderComponent {

}
