import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey = 'ALb6Ut8ONsOmxwstVMWh0F0lOWgTmVdS'
  private url = 'http://api.giphy.com'
  private _tagHistory: string[] = []

  public gifsList: Gif[] = []

  constructor(
    private http: HttpClient
  ) {
    this.loadLocalStorage()
   }

  get tagHistory(){
    return [...this._tagHistory]
  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagHistory ))
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return
     this._tagHistory = JSON.parse(localStorage.getItem('history')!);
     this.searchTag(this._tagHistory[0])
  }

  private organizeHistory(tag:string){

    tag = tag.toLocaleLowerCase()

    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldTag)=> oldTag !== tag)
    }
    this._tagHistory.unshift(tag)
    this._tagHistory = this._tagHistory.splice(0, 10)
    this.saveLocalStorage()
  }

  getItemLocalStorage(){
    return localStorage.getItem('history')
  }

  searchTag(tag:string):void{
    //validar
    if(tag.length == 0) return
    this.organizeHistory(tag)

    const params = new HttpParams()
    .set("api_key", this.apiKey)
    .set("limit", '10')
    .set("q", tag);

    this.http.get<SearchResponse>(`${this.url}/v1/gifs/search`, {params})
      .subscribe((res: SearchResponse) =>{
        this.gifsList = res.data
        console.log(this.gifsList)
      })
  }
}
