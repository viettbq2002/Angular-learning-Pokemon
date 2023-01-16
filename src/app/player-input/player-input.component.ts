import { Component } from '@angular/core';

@Component({
  selector: 'app-player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.css'],
})
export class PlayerInputComponent {
  public name = '';
  resetName() {
    this.name = '';
  }
}
