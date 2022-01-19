import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private _http:HttpClient) { }

// country services

  // get all headlines of INDIA
  getAllIndiaHeadLines():Observable<any>{
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=17d9181302024344880ef1efaec9ac0c';
    return this._http.get<any>(apiUrl);
  }

  // get all headlines of USA
  getALLUsHeadlines():Observable<any>{
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=17d9181302024344880ef1efaec9ac0c';
    return this._http.get<any>(apiUrl);
  }

  // get all headlines of NEWZLAND
  getALLNzHeadlines():Observable<any>{
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=nz&category=business&apiKey=17d9181302024344880ef1efaec9ac0c';
    return this._http.get<any>(apiUrl);
  }

  // get all headlines of GERMAN
  getALLDeHeadlines():Observable<any>{
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=17d9181302024344880ef1efaec9ac0c';
    return this._http.get<any>(apiUrl);
  }

  // ........


// category services

 // get all tech news latest
 getAllTechNews():Observable<any>{
  const apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=17d9181302024344880ef1efaec9ac0c';
  return this._http.get<any>(apiUrl);
}




  // get all tech news latest
  // getAllTechNews():Observable<any>{
  //   const apiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=17d9181302024344880ef1efaec9ac0c';
  //   return this._http.get<any>(apiUrl);

  // }

  // get  all news headlines

  getAllNewsChannels():Observable<any>{
    const apiUrl ='https://newsapi.org/v2/top-headlines/sources?apiKey=17d9181302024344880ef1efaec9ac0c';

    return this._http.get<any>(apiUrl);

  }




}
