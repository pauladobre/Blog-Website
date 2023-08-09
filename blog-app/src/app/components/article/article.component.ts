import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/featured-post';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  destinationPosts: Array<Post> = [];
  postData: any;
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.route.params.subscribe(val => {
      this.postService.loadOnePost(val['id']).subscribe(post => {
        this.postData=post;
      })
    })
  }
}
