import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import names from '../../assets/names.json'

@Component({
  selector: 'app-image-presentation',
  templateUrl: './image-presentation.component.html',
  styleUrls: ['./image-presentation.component.css']
})
export class ImagePresentationComponent implements OnInit {
  items = [];
  nameList = names.name;
  page = 1;
  pageSize =5;
  itemArray = [];

  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings;

 
  constructor() { 
      }
  ngOnInit() {
    this.items = Array(this.nameList.length).fill(0).map((x, i) => ({ id: (i + 1), fileName: this.nameList[i]}));
   
    this.dropdownList = [
      { item_id: 1, item_text: 'LR_x2 folder image' },
      { item_id: 2, item_text: 'LR_x2_Bicubic folder imag' },
      { item_id: 3, item_text: 'HR folder image' }
    ];
    this.selectedItems = this.dropdownList;
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.itemArray = new Array(this.dropdownList.length + 1).fill(true);
  }
  onItemSelect(event) {
   let inputId:string = event.item_id;
   this.itemArray[inputId] = true;
   console.log(document.getElementById(inputId));
  }
  onItemDeSelect(event) {
    let inputId:string = event.item_id;
    this.itemArray[inputId] = false;
  }

  onSelectAll(event) {
    this.itemArray.fill(true);
  }

  onDeSelectAll(event) {
    this.itemArray.fill(false);
  }

}
