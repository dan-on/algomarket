import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlgoService } from '../algo.service';

@Component({
  selector: 'app-algo-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class AlgoDetailComponent implements OnInit {

  constructor(
    private algoService: AlgoService,
    private activatedRoute: ActivatedRoute
  ) { }

  algo: any;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.algo = this.algoService.getAlgo(params.get('algoId'));
    });
  }

}
