import { Injectable, inject } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="http://localhost/3000/categories";
 http = inject(HttpClient)
 // constructor( private http:HttpClient) { }
 getAll():Observable<Category[]>{
return this.http.get<Category[]>(this.apiUrl)
  }
  getOne(id:number):Observable<Category>{
    return this.http.get<Category>(`${this.apiUrl}/${id}`)
  }
  persist(data:Category):Observable<Category>{
    return this.http.post<Category>(this.apiUrl,data)
  }
  update(id:number,data:Category):Observable<Category>{
    return this.http.put<Category>(`${this.apiUrl}/${id}`,data)
  }
delete(id:number):Observable<Category>{
  return this.http.delete<Category>(`${this.apiUrl}/${id}`)
}
}
