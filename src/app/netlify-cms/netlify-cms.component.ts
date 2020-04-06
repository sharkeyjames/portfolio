import { Component, OnInit } from '@angular/core';
import CMS from 'netlify-cms';

@Component({
  selector: 'app-netlify-cms',
  templateUrl: './netlify-cms.component.html',
  styleUrls: ['./netlify-cms.component.scss']
})
export class NetlifyCMSComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    CMS.registerPreviewTemplate('my-template', NetlifyCMSComponent)
  }

}
