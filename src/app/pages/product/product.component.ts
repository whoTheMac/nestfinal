import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(public api: ApiService,private route: ActivatedRoute) { }
  item: any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')

this.api.getDataById(id).subscribe((data) =>{
  this.item = data;
  console.log(this.item);
})  }
}
