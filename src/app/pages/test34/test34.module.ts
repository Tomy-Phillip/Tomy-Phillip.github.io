import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Test34 } from './test34.component'

const routes = [
  {
    path: '',
    component: Test34,
  },
]

@NgModule({
  declarations: [Test34],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Test34],
})
export class Test34Module {}
