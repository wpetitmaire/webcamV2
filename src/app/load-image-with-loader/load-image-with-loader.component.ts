import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-image-with-loader',
  templateUrl: './load-image-with-loader.component.html',
  styleUrls: ['./load-image-with-loader.component.scss']
})
export class LoadImageWithLoaderComponent implements OnInit {


  @Input() image: string;
  @Input() title: string;
  @Input() altText: string;
  @Input() name: string;

  isLoading: boolean;

  constructor() {
    this.isLoading = true;
  }

  ngOnInit(): void {
  }

  hideLoading(): void {
    this.isLoading = false;
  }
}
