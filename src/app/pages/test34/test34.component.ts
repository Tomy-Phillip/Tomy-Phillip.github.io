import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-test34',
  templateUrl: 'test34.component.html',
  styleUrls: ['test34.component.css'],
})
export class Test34 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
