import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataService} from '../../services/DataService';
import {Page} from 'ionic-angular';
import {AdditemPage} from '../additem/additem';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
   
  private currentList:any[];
   private tab:Tabs;

  constructor(public navCtrl: NavController,public dataService:DataService) { 
      this.currentList = dataService.getData();
      //this.currentList =[1,2,3,4,5,6,7,8];
      this.tab = Tabs.PENDING;
  }


  showScheduledItems(){
    this.currentList = this.dataService.getScheduledList();
    this.tab = Tabs.SCHEDULE;
  }

  showPendingList(){
    this.currentList= this.dataService.getPendingList();
    this.tab = Tabs.PENDING;
  }

  showCompletedList(){
    this.currentList = this.dataService.getCompletedList();
    this.tab = Tabs.COMPLETED;
  }

  rightSwipe(item){
    console.log("right",item);

    if(this.tab === Tabs.PENDING){
        this.dataService.addScheduleList(item);
        this.dataService.removeFromPendingList(item);
        this.currentList = this.dataService.getPendingList();//refreshing the list
    }else if(this.tab === Tabs.COMPLETED){
        this.dataService.addScheduleList(item);
        this.dataService.removeFromCompletedList(item);
        this.currentList = this.dataService.getCompletedList();
    }else if(this.tab === Tabs.SCHEDULE){
      //do nothing since this task is already scheduled
    }

  }
  leftSwipe(item){
    console.log("left",item);

    if(this.tab === Tabs.PENDING){
        this.dataService.addCompletedList(item);
        this.dataService.removeFromPendingList(item);
        this.currentList = this.dataService.getPendingList();//refreshing the list
    }else if(this.tab === Tabs.SCHEDULE){
        this.dataService.addCompletedList(item);
        this.dataService.removeFromScheduleList(item);
        this.currentList = this.dataService.getScheduledList();//refreshing the list
    }else if(this.tab === Tabs.COMPLETED){
      // do nothing since it is already been completed
    }
  }


  addItem(){
    this.navCtrl.push(AdditemPage);
  }

}
enum Tabs {SCHEDULE, PENDING, COMPLETED}