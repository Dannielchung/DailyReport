import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PttService {

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) { }

  getPttFoods() {
    return this.apiService.get('/api/ptt/Food');
  }
}
