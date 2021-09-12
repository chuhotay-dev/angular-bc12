import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input('movie') movieItem: {
    maPhim: number;
    tenPhim: string;
    biDanh: string;
    trailer: string;
    hinhAnh: string;
    moTa: string;
    maNhom: string;
    ngayKhoiChieu: string;
    danhGia: number;
    hot: boolean;
    dangChieu: boolean;
    sapChieu: boolean;
    like: number;
    dislike: number;
  };

  @Output('handleLike') onHandleLike = new EventEmitter<number>();
  @Output('handleDislike') onHandleDislike = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  handleLike(maPhim: number) {
    this.onHandleLike.emit(maPhim);
  }

  handleDislike(maPhim: number) {
    this.onHandleDislike.emit(maPhim);
  }
}
