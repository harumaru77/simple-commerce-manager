/*
핵심모듈 : AppModule을 더 깔끔하게 관리할 수 있도록 어떤 기능모듈에도 포함되지 않는 요소를 AppModule에서
         분리하여 하나로 묶는 것이 핵심모듈의 역할임.
         핵심모듈을 도입하면 AppModule은 순수하게 루트 모듈로서, 앵귤러 제공 모듈, 외부 라이브러리 모듈과
         애플리케이션에서 생성한 모듈을 임포트하는 역할로 한정 할 수 있음.
exports : 모듈에서 선언된 요소 중 일부를 외부의 다른 모듈에서 사용하려면 이를 반드시 exports에 선언하여야 함.
*/
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const CORE_COMPONENTS = [NavbarComponent, SidebarComponent, FooterComponent, MainDashboardComponent, PageNotFoundComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: CORE_COMPONENTS,
  exports: CORE_COMPONENTS
})
export class ScmMainModule { }
