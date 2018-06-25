import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  name = '';
  id = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params);

    this.name = this.route.snapshot.params.name;
    this.id = this.route.snapshot.params.id;
  }

}
