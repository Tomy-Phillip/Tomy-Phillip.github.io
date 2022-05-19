import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links4',
  templateUrl: 'navigation-links4.component.html',
  styleUrls: ['navigation-links4.component.css'],
})
export class NavigationLinks4 {
  @Input()
  text: string = 'About'
  @Input()
  text3: string = 'Team'
  @Input()
  text4: string = 'Blog'
  @Input()
  text1: string = 'Features'
  @Input()
  rootClassName: string = ''
  @Input()
  text2: string = 'Pricing'

  constructor() {}
}
