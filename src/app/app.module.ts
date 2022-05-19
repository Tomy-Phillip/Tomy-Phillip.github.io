import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component';

const routes = [
  {
    path: 'rectangle132',
    loadChildren: () =>
      import('./pages/rectangle132/rectangle132.module').then(
        (m) => m.Rectangle132Module
      ),
  },
  {
    path: 'rectangle235',
    loadChildren: () =>
      import('./pages/rectangle235/rectangle235.module').then(
        (m) => m.Rectangle235Module
      ),
  },
  {
    path: 'test34',
    loadChildren: () =>
      import('./pages/test34/test34.module').then((m) => m.Test34Module),
  },
  {
    path: 'page',
    loadChildren: () =>
      import('./pages/page/page.module').then((m) => m.PageModule),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
