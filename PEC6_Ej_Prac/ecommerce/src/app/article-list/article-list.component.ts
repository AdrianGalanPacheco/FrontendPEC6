import { Component } from '@angular/core';
import { Article } from '../models/article';
import { ArticleQuantityChange } from '../models/article-quantity-change';
import { Observable } from 'rxjs';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-list',
  template: `
    <div class="container mt-4">
      <h1 class="text-center mb-4">Lista de artículos</h1>
      <div class="row">
        <!-- async pipe to subscribe to the articles observable -->
        <div class="col-md-4 mb-3" *ngFor="let article of articles$ | async">
          <app-article-item
            [article]="article"
            (quantityChange)="onQuantityChange($event)"
          ></app-article-item>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ArticleListComponent {
  // New observable
  articles$: Observable<Article[]>;

  // Injecting the ArticleService
  constructor(private articleService: ArticleService) {
    this.articles$ = this.articleService.getArticles();
  }

  // Handles the quantity change event and subscribes to update the article
  onQuantityChange(change: ArticleQuantityChange) {
    this.articleService
      .changeQuantity(change.article.id, change.quantityChange)
      .subscribe();
  }
}
