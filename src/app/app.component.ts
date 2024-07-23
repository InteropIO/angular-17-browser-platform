import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IOConnectStore } from '@interopio/ng';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular17';

  constructor(
    private readonly ioConnectStore: IOConnectStore
  ) {

    console.log(this.ioConnectStore.getIOConnect())
  }
}
