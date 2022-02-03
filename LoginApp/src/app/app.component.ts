import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Car Pricing System';
  hide = true;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit() {
  }

  CalculatePrice() {
    $('#spnValue').html('50000 Rs.')
  }
}
