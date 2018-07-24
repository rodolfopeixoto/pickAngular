import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: "http://davemosher.com/blog/wp-content/uploads/2011/11/sombrero-galaxy-200x200.jpg",
      description: "Andromeda Galaxy"
    },
    {
      url:"https://c.slashgear.com/wp-content/uploads/2015/09/andromeda-galaxy-1-200x200.jpg",
      description: "Milky Way Galaxy"
    },
    {
      url: "http://dlandroid.com/wp-content/uploads/2017/07/Galaxy-Pack-3-200x200.jpg",
      description: "Tatatoo Galaxy"
    },
    {
      url: "https://avatarfiles.alphacoders.com/973/thumb-97346.jpg",
      description: "Sfaeg Galaxy"
    }
  ]
}
