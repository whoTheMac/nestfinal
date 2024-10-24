import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private api: ApiService) { }
  products: any = []


  ngOnInit() {
    this.api.getData().subscribe((data: any) => {
      this.products = data;
    })
  }
}
