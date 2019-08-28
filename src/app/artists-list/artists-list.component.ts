import { Component, OnInit } from '@angular/core';
import { ArtistSearchService } from '../artist-search.service'

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss']
})
export class ArtistsListComponent implements OnInit {

  constructor(public myArtistSearch: ArtistSearchService) { }

  ngOnInit() {
     document.getElementById('textWithArtist').innerText = 'You are currently searching: ' + this.myArtistSearch.currentArtist
  }

}
