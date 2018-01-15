import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSpinner, MatCard, MatLine, MatCardAvatar, MatCardHeader, MatCardImage, MatCardFooter, MatCardTitle, MatCardContent } from '@angular/material';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  featuredLeader: Leader;

  constructor(private leaderService: LeaderService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL) { }


  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.leaderService.getLeader(id).subscribe(featureLeader => this.featuredLeader = featureLeader);
    this.leaderService.getLeaderList().subscribe(leaders => this.leaders = leaders);
  }

  goBack(): void {
    this.location.back();
  }
}
