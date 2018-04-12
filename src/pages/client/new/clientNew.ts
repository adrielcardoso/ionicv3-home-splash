import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { IClient } from '../IClient';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-clientNew',
  templateUrl: 'clientNew.html'
})
export class ClientNewPage 
{
  private _client: IClient;

  constructor(
    private viewControl: ViewController,
    private navParams: NavParams 
  ){
    if(this.navParams.get("client")){
      this._client = this.navParams.get("client");
      return;
    }
    this._client = {
      nome: "",
      endereco: "",
      telefone: "",
      email: "",
      cnpjcpf: "",
      dtNascimento  : "",
      senha : "",
      idCliente : "",
      id: null,
      uk: "",
    }
  }

  private _parseClient()
  {
    console.log('cliente', this._client);
  }
}
