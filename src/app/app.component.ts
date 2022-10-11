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
  private _isUserAuthenticated;

  constructor(private postService: PostService) {
    this._posts = [];
    this._isUserAuthenticated = false;
  }

  ngOnInit() {
    this.getPosts();
    this.authenticateUser();
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

  public authenticateUser() {
    console.log('Authenticating...', this._isUserAuthenticated);
  }

  public get isUserAuthenticated() {
    return this._isUserAuthenticated;
  }

  public get posts() {
    return this._posts;
  }

  public set posts(newPosts: Post[]) {
    this._posts = newPosts;
  }
}
