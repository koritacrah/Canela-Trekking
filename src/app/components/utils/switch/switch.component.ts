import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @Input() first!: string;
  @Input() second!:string ;
 
  constructor() { }

  ngOnInit(): void {
  }

}
