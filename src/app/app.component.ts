import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = "Angular";

  changeUserName(ev){
    console.log(ev);
    this.username = ev.target.value;
  }
  // title = 'app';
  // visible = false;
  // counter = 0;
  // myFavLang = {
  //   // 'frontend':['html', 'css', 'js'],
  //   'backend':['nodejs','php', 'python', 'ruby']
  // }

  // toggleDiv(){
  //   // this.visible = !this.visible;
  //   this.counter++;
  // }
}
