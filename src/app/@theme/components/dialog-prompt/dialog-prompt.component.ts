import {Component, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'app-dialog-prompt',
  templateUrl: './dialog-prompt.component.html',
  styleUrls: ['./dialog-prompt.component.scss']
})
export class DialogPromptComponent implements OnInit {

  title: string;
  value: any;
  isRequired: boolean;

  initialValue: any;

  constructor(protected ref: NbDialogRef<DialogPromptComponent>) {
  }

  ngOnInit(): void {
    this.initialValue = this.value;
  }

  cancel(): void {
    this.ref.close(this.initialValue);
  }

  submit(inputValue): void {
    if (this.isRequired) {
      if (inputValue && inputValue.length > 0) {
        this.ref.close(inputValue);
      }
    } else {
      const iValue = inputValue ? inputValue : '';
      this.ref.close(iValue);
    }

  }

}
