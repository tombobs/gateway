import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Component({
  selector: 'ig-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  pageTitle: string;
  constructor (private router: Router) { }
  ngAfterContentInit() {
    this.router.events.subscribe((event)=> {
      console.log(event)
      if (event.constructor.name === 'RoutesRecognized') {
        let root = event['state'].root
        while (root.children[0].children.length) {
          root = root.children[0];
        }
        this.pageTitle = root.children[0].data['pageTitle']
      }
    })
  }
}
