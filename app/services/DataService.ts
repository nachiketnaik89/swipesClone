import { Component } from '@angular/core';


export class DataService {
    private pendingList:any[];
    private completedList:any[];
    private scheduledList:any[];
  constructor() {
      this.pendingList = [];
      this.completedList =[];
      this.scheduledList =[];
      this.init();
  }

  init(){
      this.pendingList = ['this Pending1', 'this Pending2', 'this Pending3'];
      this.completedList =['completed1','completed2','completed3'];
      this.scheduledList =['schedule1', 'schedule2', 'schedule3'];
  }

  getData() {
    return this.pendingList;
  }

  getPendingList(){
    return this.pendingList;
  }

  getCompletedList(){
      return this.completedList;
  }

  getScheduledList(){
      return this.scheduledList;
  }

  addCompletedList(item){
      if(item){
          this.completedList.push(item);
      }
  }

  addScheduleList(item){
        if(item){
          this.scheduledList.push(item);
      }
  }

addPendingList(item){
        if(item){
          this.pendingList.push(item);
      }
  }

  removeFromPendingList(item){
      if(item){
          var index = this.pendingList.indexOf(item);
          if(index!=-1){
              this.pendingList = this.pendingList.splice(index,1);
          }
      }
  }
  
  removeFromScheduleList(item){
      if(item){
          var index = this.scheduledList.indexOf(item);
          if(index!=-1){
              this.scheduledList = this.scheduledList.splice(index,1);
          }
      }
  }

    removeFromCompletedList(item){
      if(item){
          var index = this.completedList.indexOf(item);
          if(index!=-1){
              this.completedList = this.completedList.splice(index,1);
          }
      }
  }

}