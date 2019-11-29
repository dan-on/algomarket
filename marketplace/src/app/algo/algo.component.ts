import { Component, OnInit } from '@angular/core';
import { AlgoService } from './algo.service';
@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.css']
})
export class AlgoComponent implements OnInit {

  constructor(private algoService: AlgoService) {}

  algorithms = [];

  ngOnInit() {
    this.algorithms = this.algoService.all();
  }
}
