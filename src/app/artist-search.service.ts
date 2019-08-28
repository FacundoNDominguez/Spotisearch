import { Injectable } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ArtistSearchService {

  constructor() { }

  public clientID = '8d330a39185443708b068dd660655bd4'
  public clientSecret = '995bcbc989264bb1b34e8b08b0d4fcb2'
  public http = new XMLHttpRequest() 

  public currentArtist: string

  recieveArtist(artist: string){
    this.currentArtist = artist
  }
}
