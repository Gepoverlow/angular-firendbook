import { Post } from '../model/Post';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/post`);
  }

  public addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/post`, post);
  }

  public updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/post`, post);
  }

  public deletePost(postId: number): Observable<Post> {
    return this.http.delete<Post>(`${this.apiUrl}/post/${postId}`);
  }
}
