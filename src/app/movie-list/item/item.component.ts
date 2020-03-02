import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.styl']
})
export class ItemComponent implements OnInit {
  @Input() movie
  @Output() showModal = new EventEmitter<boolean>()
  
  test1 = "zzzz"

  constructor() { }

  ngOnInit() {
  }

  testEnv (e){
    this.showModal.emit(e)
  }

}
