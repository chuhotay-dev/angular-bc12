import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieDetail: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.movieId);
      // request an api to get movie detail
      this.movieService.getMovieDetail(params.movieId).subscribe(
        (data) => {
          this.movieDetail = data.content;
          console.log(this.movieDetail);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
