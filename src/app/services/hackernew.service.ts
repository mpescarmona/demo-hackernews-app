import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// ver https://coursetro.com/posts/code/171/Angular-7-Tutorial---Learn-Angular-7-by-Example

@Injectable({
  providedIn: 'root'
})
export class HackernewService {
  hackerNews:Object;

  constructor(private http: HttpClient) {
    this.getHackerNews();
   }

  public getHackerNews() {
    return this.http.get("http://localhost:8080/hackernews-service/api/hacker-news");
  }

  public deactivateHackerNew(hackernewId: String) {
    return this.http.delete("http://localhost:8080/hackernews-service/api/hacker-news/" + hackernewId);
  }
}
