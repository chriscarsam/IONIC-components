import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event){
    console.log(event);
    console.log(new Date( event.detail.value));
  }
  
  customYearValues = [2025,2020, 2016, 2008, 2004, 2000, 1996, 1981];
  customPickerOptions = {
    backdropDismiss:false,
    buttons: [
      {
        text: 'Datos',
        handler: ( event ) => {
          console.log(event);
        }
      },
      {
        text: 'Log',
        handler: () => {
          console.log("log!");
        }
      }
    ]
  }

}
