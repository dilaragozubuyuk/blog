import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  providers: [BlogService],
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogList = [];
  public yearList = ['2018', '2017', '2016'];
  public selectedYear = '2018';
  public selectedMonth = 0;
  public months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };

  public headerMonths = [];
  public list = [];

  constructor(private _blogService: BlogService) {
  }

  ngOnInit() {
    this.changeMonthSort(this.selectedMonth);
  }

  changeMonthSort(monthIndex) {
    this.headerMonths = [];
    this.list = [];
    const data = this._blogService.getBlogList(monthIndex);
    data.forEach(element => {
      if (element) {
        const blog = new Blog();
        blog.setProperties(element);
        this.list.push(blog);
      }
    });

    for (let index = 0; index < 7; index++) {
      this.headerMonths.push(monthIndex);
      if (monthIndex !== 0) {
        monthIndex--;
      } else {
        monthIndex = 11;
      }
    }

    this.headerMonths = this.headerMonths.reverse();
  }

  getDay(date: string) {
    return new Date(date).getDate();
  }
}
