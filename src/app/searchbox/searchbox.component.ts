import { Component, OnInit } from '@angular/core';
import { ArtistSearchService } from '../artist-search.service'

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {

  constructor(public myArtistSearch: ArtistSearchService) { }

  ngOnInit() {
  }

  searchArtist(){
    let artist = (<HTMLInputElement> document.getElementById("artistToSearch")).value
    
    this.myArtistSearch.recieveArtist(artist)

  }
}
