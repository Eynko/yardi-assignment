import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-item-form',
  templateUrl: './game-item-form.component.html',
  styleUrls: ['./game-item-form.component.css']
})
export class GameItemFormComponent {
  
  @Output() graphView = new EventEmitter<boolean>();
  @Output() submitGameItemInfoEvent = new EventEmitter<Array<any>>();
  
  gameItemAnalysisForm = this.fb.group({
    items: this.fb.array([
      this.fb.group({
        userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
        itemName: ['', [Validators.required, Validators.pattern('[a-zA-Z %]*')]],
        itemPrice: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      }),
    ])
  })

  get items() {
    return this.gameItemAnalysisForm.get('items') as FormArray;
  }

  addItems() {
    const itemForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      itemName: ['', [Validators.required, Validators.pattern('[a-zA-Z %]*')]],
      itemPrice: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });
    this.items.push(itemForm);
  }

  deleteItems() {
    if(this.items.length > 1)
      this.items.removeAt(this.items.length-1);
  }

  onSubmit() {
    //console.log(this.gameItemAnalysisForm.value.items);
    this.submitGameItemInfoEvent.emit(this.gameItemAnalysisForm.value.items);
  }

  constructor(private fb: FormBuilder) { }
}
