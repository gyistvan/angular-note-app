import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() {}

  clearLog(): void {
    localStorage.removeItem('logs');
  }

  createNewLog(log: string): void {
    let logs = JSON.parse(localStorage.getItem("logs") ?? "[]");
    let createdAt = new Date();
    logs.push({log, createdAt});
    localStorage.setItem("logs", JSON.stringify(logs))
  }
}
