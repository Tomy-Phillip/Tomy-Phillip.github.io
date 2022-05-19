import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavigationLinks } from './navigation-links/navigation-links.component'
import { NavigationLinks1 } from './navigation-links1/navigation-links1.component'
import { NavigationLinks2 } from './navigation-links2/navigation-links2.component'
import { NavigationLinks3 } from './navigation-links3/navigation-links3.component'
import { NavigationLinks4 } from './navigation-links4/navigation-links4.component'
import { NavigationLinks5 } from './navigation-links5/navigation-links5.component'

@NgModule({
  declarations: [
    NavigationLinks,
    NavigationLinks1,
    NavigationLinks2,
    NavigationLinks3,
    NavigationLinks4,
    NavigationLinks5,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavigationLinks,
    NavigationLinks1,
    NavigationLinks2,
    NavigationLinks3,
    NavigationLinks4,
    NavigationLinks5,
  ],
})
export class ComponentsModule {}
