import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
url='https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=5&apiKey=0d618f0c9460429db99509ec40e401f0';

  constructor(private http:HttpClient) { }

  users()
{
  return this.http.get(this.url)
}

}

