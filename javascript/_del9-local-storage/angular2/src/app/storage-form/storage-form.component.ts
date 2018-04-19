import { Component, OnInit,NgModule } from '@angular/core';
import { Planet } from './../Planet';
@Component({
  selector: 'app-storage-form',
  templateUrl: './storage-form.component.html',
  styleUrls: ['./storage-form.component.css']
})

export class StorageFormComponent implements OnInit {
  private planet: Planet;
  private planetsList: Planet[];

  constructor() { }
  //https://code.tutsplus.com/tutorials/introduction-to-forms-in-angular-4-template-driven-forms--cms-29766
  //https://code.tutsplus.com/tutorials/introduction-to-forms-in-angular-4-template-driven-forms--cms-29766
  //https://code.tutsplus.com/tutorials/introduction-to-forms-in-angular-4-template-driven-forms--cms-29766

  ngOnInit() {
    
    let pl = { name: 'Mercurio', size: { radius: 100000, diameter: 200000},gg:false}
    this.planet = new Planet(pl);
    console.log('ngOnInit');
    console.log(this.planet);
  }

}
