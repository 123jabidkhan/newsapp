import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategorysService {

  constructor(private _http:HttpClient) { }

  // get all business of INDIA
  getIndiaBussiness():Observable<any>{
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=17d9181302024344880ef1efaec9ac0c';
    return this._http.get<any>(apiUrl);
  }

// get all entertainment of INDIA
getIndiaEntertainment():Observable<any>{
  const apiUrl = '  https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=17d9181302024344880ef1efaec9ac0c';
  return this._http.get<any>(apiUrl);
}

// get all sports of INDIA
getIndiaSports():Observable<any>{
  const apiUrl = '  https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=17d9181302024344880ef1efaec9ac0c';
  return this._http.get<any>(apiUrl);
}

// get all health of INDIA
getIndiaHealth():Observable<any>{
  const apiUrl = '  https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=17d9181302024344880ef1efaec9ac0c';
  return this._http.get<any>(apiUrl);
}

// get all science of INDIA
getIndiaScience():Observable<any>{
  const apiUrl = '  https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=17d9181302024344880ef1efaec9ac0c';
  return this._http.get<any>(apiUrl);
}

// get all technology of INDIA
getIndiaTechnology():Observable<any>{
  const apiUrl = '  https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=17d9181302024344880ef1efaec9ac0c';
  return this._http.get<any>(apiUrl);
}


}
