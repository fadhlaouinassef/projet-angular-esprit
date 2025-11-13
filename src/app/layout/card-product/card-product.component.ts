import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {


 @Input() p: Product;

 //1-  preparer la notification à envoyer aux parent
@Output() notificationAcheter = new EventEmitter()
@Output() notificationLike = new EventEmitter<Product>()

//2- envoyer la notification suite clique
sendDataToParent(p:Product){
  this.notificationAcheter.emit(p)
}

//3- fonction pour gérer le like
likeProduct(p: Product) {
  p.like++;
  this.notificationLike.emit(p);
}

}
