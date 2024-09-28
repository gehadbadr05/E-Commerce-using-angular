import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
  export class PostsComponent implements OnInit {
    [x: string]: any;
    posts: any[] = [];
  
    constructor(private http: HttpClient, private router: Router) { }
  
    ngOnInit(): void {
      this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
        .subscribe(posts => {
          this.posts = posts;
        });
    }
    viewComments(postId: number) {
      this.router.navigate(['/comments', postId]);
    };
   
  
  }

