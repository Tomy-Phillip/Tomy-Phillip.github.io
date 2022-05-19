import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Page } from './page.component'

const routes = [
  {
    path: '',
    component: Page,
  },
]

@NgModule({
  declarations: [Page],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Page],
})
export class PageModule {}
