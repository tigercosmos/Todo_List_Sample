import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  public title: string;
  public description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let id: number = navParams.get('id');
    let todoList: any = JSON.parse(localStorage.getItem("todos"));
    this.title = todoList[id].title;
    this.description = todoList[id].des;
    console.log(this.title);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DetailPage');
  }

  close(){
    this.navCtrl.pop();
  }

}
