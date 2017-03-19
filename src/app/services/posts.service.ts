/**
 * Created by Jaromir Sima on 19.03.2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
  constructor(private http: Http){
    console.log("PostsService initialized ...");
  }

  getPosts(){
    let a = this.http.get('https://jsonplaceholder.typicode.com/posts');
    // console.log('http: ' , a);

    let b = a.map((response) => response.json());
    // console.log("resp: " , b);
    return b;
  }

}
