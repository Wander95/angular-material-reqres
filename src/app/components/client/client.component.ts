import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../../interface/client';
import { ClientService } from '../../service/client.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ClientEditFormComponent } from '../client-edit-form/client-edit-form.component';

@Component({
  selector: 'app-ui-test',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @Input() public lastName: string;

  isDisabled = false;
  message = 'Welcome to the real world';
  name = '';
  visible = true;

  clients: Client[] = [];

  @Output() public outside = new EventEmitter();

  constructor(
    private clientService: ClientService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      (res: any) => {
        this.clients = res.data;
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  openDialog(client: Client): void {
    const dialogRef = this.dialog.open(
      ClientEditFormComponent,
      {
        width: '300px',
        data: client,
      }
    );

    dialogRef.afterClosed().subscribe(
      res => console.log('res', res),
      err => console.log('err', err)
    );
  }

  handleClick(evt: any): void {
    this.visible = !this.visible;
    this.outside.emit(this.message);
    this.message = 'Supossed to be working';
  }
}


