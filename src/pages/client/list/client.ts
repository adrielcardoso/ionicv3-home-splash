import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Client } from '../IClient';
import { ClientNewPage } from '../new/clientNew';

export interface ClientsByLetter{
  letter:string,
  clients: Client[]
}

@Component({
  selector: 'page-client',
  templateUrl: 'client.html'
})
export class ClientPage 
{
  private clientsByLetter:ClientsByLetter[];
  constructor(public navCtrl: NavController) 
  {
    this.clientsByLetter = [
      {
        letter: "A",
        clients: [
          {
            id: 1,
            firstName: 'Adriel',
            lastName: 'Cardoso',
            email: 'adrielcardoso99@gmail.com'
          },
        ]
      },

      {
        letter: "C",
        clients: [
          {
            id: 1,
            firstName: 'Cardoso',
            lastName: 'Adriel',
            email: 'adrielcardoso99@gmail.com'
          },
        ]
      }
    ]
  }

  private onInput(event: Event)
  {
    console.log('onInput', event);
  }

  private onCancel(event: Event)
  {
    console.log('onCancel', event);
  }

  private addClientNew(): void
  {
    this.navCtrl.push(ClientNewPage);
  }
}
