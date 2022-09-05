import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  welcomecompounent(component : string){
    // ${component}

    console.log('welcome');
    ;
  }
}
