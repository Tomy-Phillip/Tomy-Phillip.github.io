import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.css'],
})
export class Page {
  rawcd0j: string = ' '
  rawpj9a: string = ' '
  raw8sx3: string = ' '
  rawsmw1: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Page - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Page - exported project',
      },
    ])
  }
}
