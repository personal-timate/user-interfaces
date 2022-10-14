import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {selectKeycloakUserDisplayName} from "../../../../../../libs/common/src/lib/keycloak";
import {animate, style, transition, trigger, useAnimation} from '@angular/animations';
import {transitionAnimationRotate, transitionAnimationWidth} from "../../../../../../libs/common/src/lib/animations";
import {selectTheme} from "../../../../../../libs/common/src/lib/theme/store/selectors/theme.selectors";
import {Theme} from "../../../../../../libs/common/src/lib/theme/store/theme.state";
import {map} from "rxjs/operators";
import {actionSwitchTheme} from "../../../../../../libs/common/src/lib/theme/store/actions/theme.actions";

@Component({
  selector: 'timate-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  animations: [
    trigger('rotate', [
      transition('default => rotated', [
        useAnimation(transitionAnimationRotate, {
          params: {
            degree: '-180deg',
            time: '0.2s'
          }
        })
      ]),
      transition('rotated => default', [
        useAnimation(transitionAnimationRotate, {
          params: {
            degree: '180deg',
            time: '0.2s'
          }
        })
      ]),
    ]),
    trigger('expand', [
      transition(
        ':enter',
        [
          style({ width: '0', opacity: 0 }),
          animate('0.25s',
            style({ width: '*', opacity: 1 }))
        ]
      ),
      transition(
        ':leave',
        [
          style({ width: '*', opacity: 1 }),
          animate('0.25s',
            style({ width: '0', opacity: 0 })
          ),
        ]
      )
    ]),
    trigger('openCloseWidthBackground',[
      transition('open => closed', [
        useAnimation(transitionAnimationWidth, {
          params: {
            width: 100,
            opacity: 1,
            time: '0.5s'
          }
        })
      ]),
    ]),
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({transform: 'translateX(100%)'}),
            animate('250ms ease-in', style({transform: 'translateX(0%)'}))
          ]
        ),
        transition(
          ':leave',
          [
            animate('250ms ease-in', style({transform: 'translateX(100%)'}))
          ]
        )
      ]
    )
  ]
})
export class RootComponent implements OnInit {

  $theme: Observable<Theme> | undefined;
  slimSidebar: boolean = true;
  opened: boolean = false;
  smallScreen: boolean = false;
  userDisplayName: Observable<string | undefined> | undefined;
  toolbarMenuVisible: boolean = false;

  sidebarItems = [
    {
      name: 'APPLICATION.GENERAL.SIDEBAR.DASHBOARD',
      icon: 'dashboard',
      subpath: '/dashboard'
    },
    {
      name: 'APPLICATION.GENERAL.SIDEBAR.SCHEDULE',
      icon: 'schedule',
      subpath: '/schedule'
    },
    {
      name: 'APPLICATION.GENERAL.SIDEBAR.TASKS',
      icon: 'assignment',
      subpath: '/tasks'
    },
    {
      name: 'APPLICATION.GENERAL.SIDEBAR.STATISTICS',
      icon: 'analytics',
      subpath: '/stats'
    },
    {
      name: 'APPLICATION.GENERAL.SIDEBAR.COMMITS',
      icon: 'commit',
      subpath: '/commits'
    }
  ]

  constructor(public breakpointObserver: BreakpointObserver, public route: ActivatedRoute, public store: Store) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.XLarge]).subscribe(res => {
      this.smallScreen = !res.matches;
      this.opened = res.matches;
    })
    this.userDisplayName = this.store.select(selectKeycloakUserDisplayName)
    // @ts-ignore
    this.$theme = this.store.select(selectTheme).pipe(
      map(theme => {
        if (theme == Theme.LIGHT) {
          return 'theme-light'
        } else {
          return 'theme-dark'
        }
      })
    )
  }

  changeTheme(): void {
    this.store.dispatch(actionSwitchTheme())
  }

}
