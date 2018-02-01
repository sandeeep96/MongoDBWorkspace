import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {UserService} from '../user.service';

import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';


// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  private searchTerms = new Subject<string>();
  name = '';
  constructor(private user: UserService,private router: Router
  ) { }

  ngOnInit() {
    this.name = this.user.getUserLoggedIn();

  }

  LogOut():void{
    this.user.logout();
    this.router.navigate(['/']);
  }

}
