import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [
    MatButton
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {
  protected invalidPath: string = '';
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  ngOnInit(): void {
    this.invalidPath = this.route.snapshot.url.map(urlSegment => urlSegment.path).join('/');
}

protected onNavigateHome(): void {
    this.router.navigate(['/home']).then();
  }
}
