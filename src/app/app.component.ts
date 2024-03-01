import { Component } from '@angular/core';
// import { UsersdataService } from './usersdata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'projectAssesment';
  apiUrl='https://api.spoonacular.com/recipes/complexSearch?query=paner&number=10&apiKey=0d618f0c9460429db99509ec40e401f0';
apidata:any;
  constructor(private http:HttpClient){
 
    }
    ngOnInit()
    {
      this.http.get(this.apiUrl).subscribe((data)=>{
          console.warn(data);
        // this.apidata=data;  
      })
    }

    submitsearch(data:any){
      console.warn(data);
      

    }
  }



