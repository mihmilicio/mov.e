import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form!: FormGroup;
  public movie!: Movie;

  constructor(private fb: FormBuilder, private router: Router, private service: MovieService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.movie?.name, Validators.required],
      synopsis: [this.movie?.synopsis],
      year: [this.movie?.year],
      duration: [this.movie?.duration],
      photoUrl: [this.movie?.photoUrl],
      rating: [this.movie?.rating]
    });
  }

  onSubmitForm(): void {

    console.log('2');
    let movie: Movie = {
      name: this.form.get('name')?.value || null,
      synopsis: this.form.get('synopsis')?.value || null,
      year: this.form.get('year')?.value || null,
      duration: this.form.get('duration')?.value || null,
      photoUrl: this.form.get('photoUrl')?.value || null,
      rating: this.form.get('rating')?.value || null
    };

    console.log("aqui");

    this.service.create(movie).subscribe((movie) => {
        console.log(movie);
        this.router.navigate(["/"]);
    }, (err) => {
      alert("Não foi possível completar a requisição. Confira se os campos estão corretos.");
    });
  }

}
