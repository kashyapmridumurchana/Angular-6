import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  abc=false;
  def=false;
  constructor() { }

  ngOnInit() {
  }

  hideButton()
  {

this.abc=!(this.abc);

this.def=(this.abc);
}


}
