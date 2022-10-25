import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    private userSub:Subscription;
    test : Date = new Date();
    isAuthenticated = false;

    constructor(  public authService: AuthService) { }

    ngOnInit() {
        this.userSub = this.authService.user.subscribe((user) => {
            this.isAuthenticated = !!user;
          });

    }
   
    ngOnDestroy() {
        if (this.userSub) {
          this.userSub.unsubscribe();
        }
      }
}
