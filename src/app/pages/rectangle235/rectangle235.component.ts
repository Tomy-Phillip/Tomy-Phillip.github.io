import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-rectangle235',
  templateUrl: 'rectangle235.component.html',
  styleUrls: ['rectangle235.component.css'],
})
export class Rectangle235 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
