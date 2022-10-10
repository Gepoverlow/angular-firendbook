import { Component, OnInit } from '@angular/core';
import { PostService } from './service/post.service';
import { Post } from './model/Post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private _posts: Post[];

  constructor(private postService: PostService) {
    this._posts = [];
  }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts() {
    console.log('Retrieving posts...');

    this.postService.getPosts().subscribe({
      next: (response: Post[]) => {
        console.log(response);
        this._posts = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public addPost(postForm: NgForm): void {
    console.log('Adding post...');

    this.postService.addPost(postForm.value).subscribe({
      next: (response: Post) => {
        console.log(response);
        this.getPosts();
        postForm.reset();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public get posts() {
    return this._posts;
  }

  public set posts(newPosts: Post[]) {
    this._posts = newPosts;
  }
}
