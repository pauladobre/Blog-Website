import { Component } from '@angular/core';
import { Post } from 'src/app/models/featured-post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-latest-article',
  templateUrl: './latest-article.component.html',
  styleUrls: ['./latest-article.component.css']
})
export class LatestArticleComponent {
  featuredPosts: Array<Post> = [];

  constructor(private postService: PostService) {
    this.postService.loadFeatured().subscribe(val => {
      this.featuredPosts = val;
    });
  }
}
