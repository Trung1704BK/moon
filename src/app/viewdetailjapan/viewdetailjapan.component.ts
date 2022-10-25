import { Component, OnInit } from '@angular/core';
import {TestapiService} from '../components/testapi.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../components/testapi.model';

@Component({
  selector: 'app-viewdetailjapan',
  templateUrl: './viewdetailjapan.component.html',
  styleUrls: ['./viewdetailjapan.component.css']
})
export class ViewdetailjapanComponent implements OnInit {

  viewdetail2: Product | undefined
  unserId: any
  id: bigint | undefined;
  image: string | undefined;
  content: string | undefined;
  introduce: string | undefined;
  title: string | undefined;
  constructor(private view2: TestapiService, private activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(param => {
      this.unserId = param.get('id');
    })
    this.getId1(this.unserId);
  }
  getId1(id1: any) {
    this.view2.viewdetailIDjapan(id1).subscribe(( res: any ) => {
      console.log(res);
      this.id = res.id;
      this.image = res.image;
      this.content = res.content;
      this.introduce = res.introduce;
      this.title = res.title;
    })
  }
}
