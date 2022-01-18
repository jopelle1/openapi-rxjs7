import { Component } from '@angular/core';
import { DefaultApi } from 'api-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'openapi-rxjs7';

  constructor(private defaultApi: DefaultApi) {
    this.defaultApi.usersGet().subscribe();
  }
}
