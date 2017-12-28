import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';

@Injectable()
export class InstagramService {

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) { }

  getInstagramScores(area: string) {
    return this.apiService.get('/api/instagram/area/food?area=' + area);
  }
}
