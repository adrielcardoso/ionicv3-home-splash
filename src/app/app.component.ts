import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Nav } from 'ionic-angular/navigation/nav-interfaces';
import { HomePage } from '../pages/home/home';

export interface IMenu{
  icon: string;
  component: any;
  hint: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  rootPage:any = TabsPage;

  @ViewChild(Nav) nav: Nav;

  private menu: Array<IMenu> = [];
  static menuCurrent: IMenu;

  constructor(
    private platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  ngOnInit()
  {
    this.menu.push(
      {component: HomePage, hint: 'Inicial', icon: 'home'},
    )
  }

  private _defineColor(menu: IMenu): string
  {
    if(MyApp.menuCurrent) return (typeof MyApp.menuCurrent.component != 'undefined' && MyApp.menuCurrent.component == menu.component ? 'red' : '');

    return (this.rootPage == menu.component ? 'red' : '');
  }

  private _goTo(menu: IMenu)
  {
    MyApp.menuCurrent = menu;
    this.menuCtrl.close();
    this.nav.setRoot(menu.component);
  }

  private _parseIcon(object: IMenu): string{
    return object.icon;
  }

  private _goToHome(){
    this._goTo({component: HomePage, hint: 'Inicial', icon: 'home'});
  }
}
