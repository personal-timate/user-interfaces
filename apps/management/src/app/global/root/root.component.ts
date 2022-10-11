import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {selectKeycloakUserDisplayName} from "../../../../../../libs/common/src/lib/keycloak";

@Component({
  selector: 'timate-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {

  slimSidebar: boolean = true;
  opened: boolean = false;
  smallScreen: boolean = false;
  userDisplayName: Observable<string | undefined> | undefined;

  sidebarItems = [
    {
      name: 'APPLICATION.GENERAL.SIDEBAR.DASHBOARD',
      icon: 'dashboard',
      subpath: '/dashboard'
    },
    {
      name: 'APPLICATION.GENERAL.SIDEBAR.TASKS',
      icon: 'task_alt',
      subpath: '/tasks'
    },
    {
      name: 'APPLICATION.GENERAL.SIDEBAR.STATISTICS',
      icon: 'trending_up',
      subpath: '/statistics'
    },
    {
      name: 'APPLICATION.GENERAL.SIDEBAR.COMMITS',
      icon: 'commit',
      subpath: '/commitments'
    }
  ]

  constructor(public breakpointObserver: BreakpointObserver, public route: ActivatedRoute, public store: Store) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.XLarge]).subscribe(res => {
      this.smallScreen = !res.matches;
      this.opened = res.matches;
    })
    this.userDisplayName = this.store.select(selectKeycloakUserDisplayName)
  }
}
