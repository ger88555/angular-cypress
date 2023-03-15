import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomInputComponent {
  private static nextID = 0;
  nativeID = CustomInputComponent.nextID++;
  
  value = '';
}
