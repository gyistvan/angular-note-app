import { Injectable } from '@angular/core';
import { Log } from './types';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() {this.logs = this.getLogs()}

  logs:Log[] = []

  clearLogs(): void {
    this.logs = [];
    this.updateLogs()
  }

  updateLogs(): void{
    localStorage.setItem("logs", JSON.stringify(this.logs))
  }

  createNewLog(log: string): void {
    let createdAt = new Date();
    this.logs.push({log, createdAt});
    this.updateLogs()
  }

  getLogs(): Log[]{
    return JSON.parse(localStorage.getItem("logs") ?? "[]");
  }

  ngOnInit(){
    this.logs = this.getLogs()
  }
}
