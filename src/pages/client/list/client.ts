import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IClient } from '../IClient';
import { ClientNewPage } from '../new/clientNew';
import { Pipe, PipeTransform } from '@angular/core';

export interface ClientsByLetter{
  letter:string,
  clients: IClient[]
}

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
      if(!items) return [];
      if(!searchText) return items;
      searchText = searchText.toLowerCase();
      return items.filter( it => {
        return it['nome'].toLowerCase().includes(searchText);
      });
   }
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
              nome: "Adriel Cardoso",
              endereco: "alksdjlkasd",
              telefone: "asdasd",
              email: "asdasd",
              cnpjcpf: "asd",
              dtNascimento  : "asd",
              senha : "asd",
              idCliente : "asd",
              id: 1,
              uk: "asdasd",
          },
        ]
      },
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

  private updateClientNew(client: IClient): void
  {
    this.navCtrl.push(ClientNewPage, {"client" : client});
  }
}
