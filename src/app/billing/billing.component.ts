import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  standalone: false,
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent {
  showMyContainer=false;
  showEMoney=false
  cart:any[]=[];
  ngOnInit(){
    this.cart = JSON.parse(localStorage.getItem("cart") || "[]");


  }
  total(): number {
    return this.cart.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);
  }

  vat(): number {
    return Math.round(this.total() * 0.2);
  }

  getGrandTotal():number{
    return this.total()+this.vat()+50;
  }

}
