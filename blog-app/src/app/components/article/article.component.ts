import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/featured-post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  destinationPosts: Array<Post> = [];
  postData: any;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postService.loadPostsByCategory('Destinations').subscribe(posts => {
      this.destinationPosts = posts.slice(0, 3);
    });

    this.route.params.subscribe(params => {
      const postId = params['id'];
      this.postService.loadOnePost(postId).subscribe(post => {
        this.postData = post;
      });
    });
  }
}
