import { Component } from '@angular/core';
import { Post } from 'src/app/models/featured-post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent {

  selectedDestination: string | null = null;
  articles: Post[] = [];

  constructor(private postService: PostService) { }

  loadArticles(destination: string) {
    console.log('Loading articles for:', destination);
    this.selectedDestination = destination;
    this.postService.loadPostsByDestination(destination).subscribe(articles => {
      console.log('Articles received:', articles);
      this.articles = articles;
    });
  }
  
}
