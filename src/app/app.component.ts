import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';



public origin;
public destination;



ngOnInit() {
  this.getDirection()
}

getDirection() {
  this.origin;
  this.destination;

 
}

}
