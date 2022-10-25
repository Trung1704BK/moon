import { Component, OnInit } from '@angular/core';
import {TestapiService} from '../../components/testapi.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Product} from '../../components/testapi.model';

@Component({
  selector: 'app-vietnam',
  templateUrl: './vietnam.component.html',
  styleUrls: ['./vietnam.component.css']
})
export class VietnamComponent implements OnInit {
  focus: any;
  focus1: any;
  data1: Product[] = [];


  constructor(private tapi: TestapiService, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.tapi.getListvietnam().subscribe((res) => {
      this.data1 = res;
    })
  }
}
