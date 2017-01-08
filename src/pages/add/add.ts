import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
 
    public todoList: Array<any>;
    public todoTitle: string;
    public todoDes: string;
 
    constructor(private navCtrl: NavController) {
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        if(!this.todoList) {
            this.todoList = [];
        }
        this.todoTitle = "";
        this.todoDes = ""; // description
    }
 
    save() {
        if(this.todoTitle != "" && this.todoDes != "") {
            this.todoList.push(
              {
                title: this.todoTitle,
                des: this.todoDes
              } 
            );
            localStorage.setItem("todos", JSON.stringify(this.todoList));
            this.navCtrl.pop();
        } else if(this.todoTitle == "") {
            alert("No Title!"); 
        } else if(this.todoDes == ""){
            alert("No Description!");
        }
    }
 
}