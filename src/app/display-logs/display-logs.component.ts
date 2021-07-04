import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import * as moment from 'moment';

@Component({
  selector: 'app-display-logs',
  templateUrl: './display-logs.component.html',
  styleUrls: ['./display-logs.component.css']
})
export class DisplayLogsComponent implements OnInit {
  constructor(public loggerService: LoggerService) {}

  ngOnInit(): void {}

  formatDate = (date: Date, format: string) => moment(date).format(format);
}
