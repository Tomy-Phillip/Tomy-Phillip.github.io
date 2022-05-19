import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Rectangle235 } from './rectangle235.component'

const routes = [
  {
    path: '',
    component: Rectangle235,
  },
]

@NgModule({
  declarations: [Rectangle235],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Rectangle235],
})
export class Rectangle235Module {}
