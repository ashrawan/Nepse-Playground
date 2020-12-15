import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService} from '@nebular/theme';
import {filter, map, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {UserService} from '../../../@core/data/user/user.service';
import {User} from '../../../@core/data/user/user';
import {LayoutService} from '../../../@core/utils/service/layout.service';

@Component({
  selector: 'app-custom-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly = false;
  user: User;

  currentTheme = 'default';

  userMenu = [{title: 'Profile'}, {title: 'Log out'}];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserService,
              private nbMenuService: NbMenuService,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService) {
  }

  ngOnInit(): void {
    this.currentTheme = this.themeService.currentTheme;

    this.userService.getAuthUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: User) => this.user = users);

    const {xl} = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.nbMenuService.onItemClick()
      .pipe(
        filter(({tag}) => tag === 'auth-user-context-menu'),
        map(({item: {title}}) => title),
      )
      .subscribe(userMenu => {
        console.log('Clicked ', userMenu);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(event): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    window.dispatchEvent(new Event('resize'));
    return false;
  }

  navigateHome(): boolean {
    this.menuService.navigateHome();
    return false;
  }
}
