import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "./login.service";

@Component({
  selector: 'ig-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: string;
  private password: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    // without this the router redirects back to /login
    //this.router.navigate([''], {skipLocationChange: true}); // TODO: work out why that happens and remove this line

  debugger
    this.loginService.login(this.user, this.password)
      .subscribe(res => {
        debugger
        if (res) {
          this.router.navigate(['/orders']);
        }
      }, err => console.log(err.json()));

  }

}
