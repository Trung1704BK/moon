import { Component, OnInit, ElementRef, OnDestroy } from "@angular/core";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isLoggedIn$:Observable<boolean>;
  isAuthenticated = false;
  searchText;
  title = "recourse5_angular";
  value: any;

  heroes = [
    { id: 1, p: "vietnam" },
    { id: 2, p: "china" },
    { id: 3, p: "japan" },
  ];

  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(
    public location: Location,
    private element: ElementRef,
    private http: HttpClient,
    public authService: AuthService,
    private router:Router
  ) {
    this.sidebarVisible = false;
  }

  ngOnInit() {

    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
    this.getCounter();
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName("html")[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function () {
      toggleButton.classList.add("toggled");
    }, 500);
    html.classList.add("nav-open");

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName("html")[0];
    // console.log(html);
    this.toggleButton.classList.remove("toggled");
    this.sidebarVisible = false;
    html.classList.remove("nav-open");
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }
    if (titlee === "/home") {
      return true;
    } else {
      return false;
    }
  }
  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }
    if (titlee === "/documentation") {
      return true;
    } else {
      return false;
    }
  }

  getCounter() {
    this.http
      .get("https://api.countapi.xyz/update/trung/tuyet/?amount=1")
      .subscribe((value) => {
        this.value = value;
        console.log(value);
      });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate([''])
  }
  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }
}
