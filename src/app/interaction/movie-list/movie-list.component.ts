import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  listMovie = [
    {
      maPhim: 1328,
      tenPhim: 'Ted New',
      biDanh: 'ted-new',
      trailer: 'https://www.youtube.com/embed/S3AVcCggRnU',
      hinhAnh: 'http://movieapi.cyberlearn.vn/hinhanh/ted-new_gp01.jpg',
      moTa: "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
      maNhom: 'GP01',
      ngayKhoiChieu: '2021-09-11T00:00:00',
      danhGia: 10,
      hot: true,
      dangChieu: false,
      sapChieu: true,
      like: 0,
      dislike: 0,
    },
    {
      maPhim: 1343,
      tenPhim: 'Bright',
      biDanh: 'bright',
      trailer: 'https://www.youtube.com/embed/2MxnhBPoIx4',
      hinhAnh: 'http://movieapi.cyberlearn.vn/hinhanh/trainwreck.jpg',
      moTa: 'Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.',
      maNhom: 'GP01',
      ngayKhoiChieu: '2021-09-09T13:21:37.273',
      danhGia: 5,
      hot: false,
      dangChieu: true,
      sapChieu: false,
      like: 0,
      dislike: 0,
    },
    {
      maPhim: 5030,
      tenPhim: 'Godzilla vs. Kong 1',
      biDanh: 'godzilla-vs-kong-1',
      trailer: 'https://www.youtube.com/embed/odM92ap8_c0',
      hinhAnh:
        'http://movieapi.cyberlearn.vn/hinhanh/godzilla-vs-kong_gp01.jpg',
      moTa: 'King Kong is transported out of his containment zone after Godzilla resurfaces and creates mayhem. Humans need his help to reach Hollow Earth and find a way to subdue the king of the monsters.',
      maNhom: 'GP01',
      ngayKhoiChieu: '2021-09-15T00:00:00',
      danhGia: 10,
      hot: true,
      dangChieu: false,
      sapChieu: true,
      like: 0,
      dislike: 0,
    },
    {
      maPhim: 5031,
      tenPhim: 'The Croods: New Age Section 2',
      biDanh: 'the-croods-new-age-section-2',
      trailer: 'https://www.youtube.com/embed/Fp9pNPdNwjI',
      hinhAnh:
        'http://movieapi.cyberlearn.vn/hinhanh/the-croods-new-age_gp01.jpg',
      moTa: 'Sinh tồn trong một thế giới tiền sử luôn rình rập hiểm nguy từ đủ loài quái thú hung dữ cho tới thảm họa ngày tận thế, Nhà Croods chưa từng một lần chùn bước. Nhưng giờ đây họ sẽ phải đối mặt với thử thách lớn nhất từ trước tới nay: chung sống với một gia đình khác. Để tìm kiếm một mái nhà an toàn hơn, Nhà Croods bắt đầu hành trình khám phá thế giới tiến tới những vùng đất xa xôi đầy tiềm năng. Một ngày nọ, họ tình cờ lạc vào một nơi yên bình có đầy đủ mọi tiện nghi hiện đại và biệt lập với tường vây bao quanh. Tưởng rằng mọi vấn đề trong cuộc sống sẽ được giải quyết thì Nhà Croods lại phải chấp nhận với sự thật rằng đã có một gia đình khác định cư ở đây đó chính là Nhà Bettermans.',
      maNhom: 'GP01',
      ngayKhoiChieu: '2021-09-08T13:00:59.943',
      danhGia: 10,
      hot: false,
      dangChieu: true,
      sapChieu: false,
      like: 0,
      dislike: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleLike(maPhim: number) {
    const idx = this.listMovie.findIndex((movie) => movie.maPhim === maPhim);

    if (idx !== -1) {
      this.listMovie[idx].like += 1;
    }
  }

  handleDislike(maPhim: number) {
    const idx = this.listMovie.findIndex((movie) => movie.maPhim === maPhim);

    if (idx !== -1) {
      this.listMovie[idx].dislike += 1;
    }
  }
}
