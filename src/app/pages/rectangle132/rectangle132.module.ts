import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Rectangle132 } from './rectangle132.component'

const routes = [
  {
    path: '',
    component: Rectangle132,
  },
]

@NgModule({
  declarations: [Rectangle132],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Rectangle132],
})
export class Rectangle132Module {}
