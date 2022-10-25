import { Component, OnInit } from '@angular/core';
import {TestapiService} from '../components/testapi.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../components/testapi.model';

@Component({
  selector: 'app-viewdetailchina',
  templateUrl: './viewdetailchina.component.html',
  styleUrls: ['./viewdetailchina.component.css']
})
export class ViewdetailchinaComponent implements OnInit {

  viewdetail2: Product | undefined
  unserId: any
  id: bigint | undefined;
  image: string | undefined;
  content: string | undefined;
  introduce: string | undefined;
  title: string | undefined;

  constructor(private sv: TestapiService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(param => {
      this.unserId = param.get('id');
    })
    this.getId(this.unserId);
  }
  getId(id1: any) {
    this.sv.viewdetailID(id1).subscribe(( res: any ) => {
      this.id = res.id;
      this.image = res.image;
      this.content = res.content;
      this.introduce = res.introduce;
      this.title = res.title;
    })
  }

}
