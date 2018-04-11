import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'page-clientNew',
  templateUrl: 'clientNew.html'
})
export class ClientNewPage 
{
  constructor(
    private viewControl: ViewController  
  ) 
  {
  }
}
