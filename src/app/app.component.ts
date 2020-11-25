import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
images = ['code.jpg', 'desk.jpg', 'team.jpg'];
currentImage = 0;
showImage = true;

ngOnInit() {
  this.updateImage();
}

updateImage() {
  setInterval(() => {
    this.currentImage++;
    this.currentImage = this.currentImage % this.images.length;
    this.showImage = false;

    setTimeout(() => {
      this.showImage = true;
    }, 10)
  }, 8000);
}

}
