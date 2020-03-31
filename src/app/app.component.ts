import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Film';
  apiAddress: string;
  public results: Array<Object> = [];
  screenHeight: string;
  scWidth: string;

  constructor(private _http: HttpClient){
		this.apiAddress = 'https://api.themoviedb.org/3/search/movie?api_key=02e8a2556f41fbe7ab07e6899aceaab0&query=';
  }

  ngOnInit() {
    this.screenHeight = window.innerHeight + "px"
    this.scWidth = window.innerWidth + "px"
  }
  
  getData(searchMovie){
    return this._http.get(this.apiAddress+searchMovie).subscribe(response => 
      this.results = response['results']
    );
  }

  onSearch(searching){
    this.getData(searching);
    //this.route.navigate(['/search',searching])
  }
 
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenHeight = window.innerHeight + "px"
    this.scWidth = window.innerWidth + "px"
  }

}
