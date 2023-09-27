import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false

  ngOnInit() {
    if (!this.url) throw ('URL property is required')
  }

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true

    }, 500);
  }


}
