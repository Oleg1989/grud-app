import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { OwnerEntity } from './interface/owner-entity';
import { ICarOwnersService } from './interface/i-car-owners-service';
import { CarEntity } from './interface/car-entity';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerService implements ICarOwnersService {

  private ownersUrl = 'api/owners';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getOwners(): Observable<OwnerEntity[]> {
    return this.http.get<OwnerEntity[]>(this.ownersUrl)
      .pipe(
        tap(_ => this.log('fetched owners')),
        catchError(this.handleError<OwnerEntity[]>('getOwners', []))
      );
  }
  getOwnerById(aId: number): Observable<OwnerEntity> {
    const url = `${this.ownersUrl}/${aId}`;
    return this.http.get<OwnerEntity>(url).pipe(
      tap(_ => this.log(`fetched owner id=${aId}`)),
      catchError(this.handleError<OwnerEntity>(`getOwner id=${aId}`))
    );
  }
  createOwner(aLastName: string, aFirstName: string, aMiddleName: string, aCars: CarEntity[]): Observable<OwnerEntity> {
    return this.http.post<OwnerEntity>(this.ownersUrl, { aLastName: aLastName, aFirstName: aFirstName, aMiddleName: aMiddleName, aCars: aCars }, this.httpOptions).pipe(
      tap((newOwner: OwnerEntity) => this.log(`added owner w/ id=${newOwner.id}`)),
      catchError(this.handleError<OwnerEntity>('addOwner'))
    );
  }
  editOwner(aOwner: OwnerEntity): Observable<null | OwnerEntity> {
    return this.http.put(this.ownersUrl, aOwner, this.httpOptions).pipe(
      tap(_ => this.log(`updated owner id=${aOwner.id}`)),
      catchError(this.handleError<any>('updateOwner'))
    );
  }
  deleteOwner(aOwnerId: number): Observable<OwnerEntity[]> {
    const url = `${this.ownersUrl}/${aOwnerId}`;

    return this.http.delete<OwnerEntity>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted owner id=${aOwnerId}`)),
      catchError(this.handleError<any>('deleteOwner'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`OwnerService: ${message}`);
  }
}
