import { Component } from '@angular/core';

@Component({
  selector: 'mdv-two-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [
    { path: '/', icon: 'assignment', title: 'Projects'}
  ]
}
