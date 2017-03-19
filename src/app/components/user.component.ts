/**
 * Created by Jaromir Sima on 18.03.2017.
 */

import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent  {
  name : string;
  email : string;
  address: Address;
  hobbies: string[];
  isHobbiesShown: boolean;
  posts : Post;

  constructor(private postsService: PostsService){
    this.name = 'Jarda';
    this.name = 'Jaromir';
    this.email = 'netdedek@gmail.com';
    this.address = {
      street: 'Radonin 24',
      city: 'zdar'
    };
    this.hobbies  = ['start','lakes'];
    this.isHobbiesShown = false;

    this.postsService.getPosts().subscribe(
      posts => this.posts = posts

    );

  }

  toggleHobbies(){
    this.isHobbiesShown = ! this.isHobbiesShown;
    console.log('toggle hobbies: ' , this.isHobbiesShown);
  }

  addHobby(hobby: string){
    this.hobbies.push(hobby);
  }

  deleteHobby(hobbyIndex: number){
    console.log('delete hobby index: ', hobbyIndex )
    console.log('delete done: ', this.hobbies.splice(hobbyIndex,1));
  }
}

interface Address{
  street: String;
  city: String;
}

interface Post{
  id : number;
  title: string;
  body: string;
}

