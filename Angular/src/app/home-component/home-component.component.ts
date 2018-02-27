import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user.service';

import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';


// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { CountryService } from '../shared/country.service';

// Import json-rules-engine implementation
import { JsonRulesService } from '../shared/json-rules.service';

declare var runRulesForCriteriaMatching: any;

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  public users: any;
  public userName: string;
  public userObj: any;
  public result:string;

  name = '';
  constructor(
    private user: UserService,
    private router: Router,
    private countryService: CountryService,
    private jsonRulesImpl: JsonRulesService
  ) { }

  // setting the name of logged in user
  ngOnInit() {
    this.name = this.user.getUserLoggedIn();
    this.countryService.getUsers().subscribe(res => { 
      console.log(res.json()); 
      this.users = res.json(); 
    });
  }

  // logging out
  LogOut(): void {
    this.user.logout();
    this.router.navigate(['/']);
  }

  public getUserInfo() {
    this.countryService.getUserDetails(this.userName).subscribe(res => {
      this.userObj = res.json();
      this.jsonRulesImpl.applyFactsAndRunRuleCheckEngine(this.userObj)
        .then((response) => {
          console.log(response);
          if (response[0].params.gtValue) {
            this.result = response[0].params.message + response[0].params.gtValue;
          }            
          else if (response[0].params.newId) {
            this.result = response[0].params.message + response[0].params.newId;
          } else {
            this.result = response[0].params.message;
          }
        })
        .catch(() => {
          this.result = 'None';
        });

    });
  }

}
