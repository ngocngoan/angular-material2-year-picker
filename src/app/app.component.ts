import {Component, OnInit} from '@angular/core';
import {VERSION} from '@angular/material';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  version = VERSION;
  date = new Date();
  chosenYearDate: Date;
  chosenMonthDate: Date = new Date(2020,0,1);
  chosenSemesterDate: Date;
  chosenWeekDate: Date;
  chosenDate: Date;
  monthInputCtrl: FormControl = new FormControl(new Date(2020,0,1));

  visible = true;

  ngOnInit() { }
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
