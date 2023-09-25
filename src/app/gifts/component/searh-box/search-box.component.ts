import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-search-box',
  template: `
    <h5>Buscar </h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar Gifs..."
      (keyup.enter)="seachTag()"
      #tagInput
    >
  `
})

export class SearchBoxComponent  {
  constructor(
    private gifsService: GifsService
  ) { }

  @ViewChild('tagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  seachTag(){
    const tagInput = this.tagInput.nativeElement.value
    this.gifsService.searchTag(tagInput)
    this.tagInput.nativeElement.value = ""
  }
}
