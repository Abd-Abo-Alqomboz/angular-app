import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-new';
  age :number = 22 ;
  user : any ={ name :"abdullah", age :22};
  names: string[]=["abdullah","mohammed","Ahamed","moin"];
  isloding: boolean = false;
  isdasebeld: boolean =true ;
  htmldata="<h1>Abdullah Aref Abo Al-qopmez</h1>";
 @Input() userdata :string='Abdullah Aref';


  newclick():void{
    console.log(" hi abdullah");

  }
  onalret():void{
    alert("Hi abdullah welcome");
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.user={name : "mohammed", age:25};
      this.names=["Ali","mostfa","Adham","Abood"];
      this.isloding=true;
      this.isdasebeld =false ;
      this.htmldata ="<h1><i>Abdullah Aref Abo Al-qopmez</i></h1>"
      
    }, 5000);
    
  }
}
