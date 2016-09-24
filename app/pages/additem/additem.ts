import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataService} from '../../services/DataService';

@Component({
  templateUrl: 'build/pages/additem/additem.html'
})
export class AdditemPage {
  private item:string;
  constructor(private navCtrl: NavController,public dataService:DataService) {
      this.item = null;
  }
addItem(){
  console.log("Item added", this.item);
  this.dataService.addPendingList(this.item);
}

}
