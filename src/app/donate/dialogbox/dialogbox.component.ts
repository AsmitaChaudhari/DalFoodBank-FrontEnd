import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'workers-dialogbox',
  templateUrl: 'dialogbox.component.html',
  styleUrls: ['dialogbox.component.scss'],
})
export class dialogbox {
  constructor(
    private router: Router,
    public dialog: MatDialog) {}

  onClick(){
    this.router.navigate(['home']);
  }
}
