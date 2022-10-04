import { Post } from '../model/Post';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl: string = '';

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/post`);
  }

  public addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/post`, post);
  }
}
