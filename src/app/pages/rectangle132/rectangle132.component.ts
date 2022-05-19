import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-rectangle132',
  templateUrl: 'rectangle132.component.html',
  styleUrls: ['rectangle132.component.css'],
})
export class Rectangle132 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
