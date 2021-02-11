import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Client } from 'src/app/interface/client';

@Component({
  selector: 'app-client-edit-form',
  templateUrl: './client-edit-form.component.html',
  styleUrls: ['./client-edit-form.component.css']
})
export class ClientEditFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ClientEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public client: Client
  ) { }

  ngOnInit(): void {}

  handleClick(): void{
    
    this.dialogRef.close();
  }
}
