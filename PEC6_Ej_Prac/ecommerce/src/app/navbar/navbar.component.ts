import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // List as default
  currentView: 'list' | 'template' | 'reactive' = 'list';

  showList() {
    this.currentView = 'list';
  }

  showTemplate() {
    this.currentView = 'template';
  }

  showReactive() {
    this.currentView = 'reactive';
  }
}
