import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//The first file that will run in the project
//The firts module that will be started(We may have many)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
