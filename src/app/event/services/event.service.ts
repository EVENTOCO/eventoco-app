import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';
import { EventResponse } from '../model/event-response.model';
import { Observable } from 'rxjs';
import { EventRequest } from '../model/event-request.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = enviroment.baseUrl;
  
  constructor(private http:HttpClient) { }

  getAllEvents():Observable<EventResponse[]>{
   return this.http.get<EventResponse[]>(`${this.baseUrl}/users`);
  }

  
  getEventById(id: number): Observable<EventResponse> {
    return this.http.get<EventResponse>(`${this.baseUrl}/events/${id}`);
  }

  getEventByTitle(title: string): Observable<EventResponse> {
    return this.http.get<EventResponse>(`${this.baseUrl}/events/title/${title}`);
  }

  getEventByDate(date: Date): Observable<EventResponse> {
    return this.http.get<EventResponse>(`${this.baseUrl}/events/date/${date}`);
  }

  createEvent(eventDTO: EventRequest): Observable<EventResponse> {
    return this.http.post<EventResponse>(`${this.baseUrl}/events`, eventDTO);
  }

  updateEvent(id: number, eventDTO: EventRequest): Observable<EventResponse> {
    return this.http.put<EventResponse>(`${this.baseUrl}/events/${id}`, eventDTO);
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/events/${id}`);
  }

  
}

