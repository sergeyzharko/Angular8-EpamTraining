import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AppSettingsService } from './core/services/app-settings.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta,
    private appSettingsService: AppSettingsService
  ) { }

  @ViewChild('appTitle', {static: false})
  title: ElementRef<HTMLInputElement>;

  display = true; // надо ниже, а то, что выше не разъединять

  ngOnInit() {
    this.setPageTitles();
    console.log('Settings: ', this.appSettingsService.getSettings());
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private setPageTitles() {
    this.sub = this.router.events
      .pipe(

        filter(event => event instanceof NavigationEnd),
        map(() => this.router.routerState.root),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        switchMap(route => route.data)
      )
      .subscribe(
         data => this.titleService.setTitle(data.title)
      );
  }

  ngAfterViewInit() {
    this.title.nativeElement.textContent = 'Shop';
  }

  toggle(): void {
    this.display = !this.display;
  }

  onActivate($event: any, routerOutlet: RouterOutlet) {
    console.log('Activated Component', $event, routerOutlet);
    this.metaService.addTags(routerOutlet.activatedRouteData.meta);
  }

  onDeactivate($event: any, routerOutlet: RouterOutlet) {
    console.log('Deactivated Component', $event, routerOutlet);
  }

}
