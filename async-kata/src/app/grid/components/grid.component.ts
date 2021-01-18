import { Component, OnInit } from '@angular/core';
import { Fact } from '../interfaces/fact.interface';
import { GridService } from '../services/grid-service.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public facts: Fact[];
  public error: string;
  public loading: boolean;

  constructor(
    private gridService: GridService
  ) { }

  ngOnInit(): void {
    this.getFacts();
  }

  public getFacts(): void {
    this.loading = true;
    this.facts = null;
    this.error = null;

    this.gridService.getFacts()
      .subscribe((facts) => {
        this.facts = facts;
      }, (error) => {
        this.error = error.error.message;
      }, () => {
        this.loading = false;
      });
  }

  public getFactsWithError(): void {
    this.loading = true;
    this.facts = null;
    this.error = null;

    this.gridService.getFactsWithError()
      .subscribe((facts) => {
        this.facts = facts;
      }, (error) => {
        this.error = error.error.message;
        this.loading = false;
      });
  }

  public onGetFact(): void {
    this.getFacts();
  }

  public onGetFactWithError(): void {
    this.getFactsWithError();
  }

}
