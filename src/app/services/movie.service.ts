import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../models/movie.interface";

@Injectable({
    providedIn: "root",
})
export class MovieService {
    private baseURL = "http://localhost:5000/api/movie";

    constructor(private http: HttpClient) {}

    list(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${this.baseURL}`);
    }

    create(movie: Movie): Observable<Movie> {
        return this.http.post<Movie>(`${this.baseURL}`, movie);
    }
}
