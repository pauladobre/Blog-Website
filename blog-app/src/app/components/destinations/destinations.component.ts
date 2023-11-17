import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/featured-post';
import { PostService } from 'src/app/services/post.service';
import { ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  selectedDestination: string | null = null;
  articles: Post[] = [];

  constructor(private postService: PostService, private el: ElementRef, private renderer: Renderer2) { }
  isMobileScreen: boolean = false;
  
  loadArticles(destination: string) {
    console.log('Loading articles for:', destination);
    this.selectedDestination = destination;
    this.postService.loadPostsByDestination(destination).subscribe(articles => {
      console.log('Articles received:', articles);
      this.articles = articles;


      const articlesSection = this.el.nativeElement.querySelector('#articles-section');
      if (articlesSection) {
        articlesSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    });
  }

  ngOnInit() {
    this.isMobileScreen = window.innerWidth < 576;

    window.addEventListener('resize', () => {
      this.isMobileScreen = window.innerWidth < 576;
    });
  }
}
  

