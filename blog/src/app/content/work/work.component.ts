import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  public workListPart1 = [
    'work1.png',
    'work2.png',
    'work3.png',
    'work4.png',
    'work5.png',
    'work6.png',
    'work7.png',
    'work8.png'
  ];

  public workListPart2 = [
    'work8.png',
    'work7.png',
    'work6.png',
    'work5.png',
    'work4.png',
    'work3.png',
    'work2.png',
    'work1.png'
  ];

  public workListPart3 = [
    'work5.png',
    'work2.png',
    'work6.png',
    'work4.png',
    'work8.png',
    'work1.png',
    'work7.png',
    'work3.png'
  ];
}
