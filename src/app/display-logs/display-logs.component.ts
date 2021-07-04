import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-display-logs',
  templateUrl: './display-logs.component.html',
  styleUrls: ['./display-logs.component.css']
})
export class DisplayLogsComponent implements OnInit {

  constructor(loggerService: LoggerService) { this.loggerService = loggerService}

  loggerService: LoggerService
  logs: Array<{id:string}:string>
  

  ngOnInit(): void {
    this.logs = this.loggerService.getLogs()

  }

}
