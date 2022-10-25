import { Component, OnInit } from '@angular/core';
import {TestapiService} from '../components/testapi.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../components/testapi.model';

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit {

  viewdetail2: Product | undefined
  unserId: any
  id: bigint | undefined;
  image: string | undefined;
  content: string | undefined;
  introduce: string | undefined;
  title: string | undefined;

  constructor(private view2: TestapiService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(param => {
      this.unserId = param.get('id');

    })
    this.getID1(this.unserId);
  }
  getID1(id1: any ) {
    this.view2.viewdetailIDvietnam(id1).subscribe(( res: any ) => {
      console.log(res);
      this.id = res.id;
      this.image = res.image;
      this.content = res.content;
      this.introduce = res.introduce;
      this.title = res.title;
    })
  }

}
