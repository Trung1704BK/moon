import { Component, OnInit } from '@angular/core';
import {TestapiService} from '../../components/testapi.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Product} from '../../components/testapi.model';

@Component({
  selector: 'app-japan',
  templateUrl: './japan.component.html',
  styleUrls: ['./japan.component.css']
})
export class JapanComponent implements OnInit {
  focus: any;
  focus1: any;
  data1: Product[] = [];
  constructor(private tapi: TestapiService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.tapi.getListjapan().subscribe((res) => {
      this.data1 = res;
    })
  }

}
