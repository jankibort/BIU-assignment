import { Component } from '@angular/core';

@Component({
  selector: 'topbar',
  templateUrl: './Topbar.component.html',
  styleUrls: ['./Topbar.component.scss'],
})
export class TopbarComponent {
  projectName = 'System informacji pasazerskiej';

  getProjectName() {
    return this.projectName;
  }
}
