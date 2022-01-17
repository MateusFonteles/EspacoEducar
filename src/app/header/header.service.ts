import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header.data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor(private snackBar: MatSnackBar) { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }

  snackLogin(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] :['msg-success']
    })
}
}
