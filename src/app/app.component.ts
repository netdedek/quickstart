import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <ul>
        <li><a routerLink="/">Home</a></li>  
        <li><a routerLink="/about">About</a></li>
          <hr/>
      </ul>
      <router-outlet></router-outlet>
  `,
})
export class AppComponent  {

}
