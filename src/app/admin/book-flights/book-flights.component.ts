import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-flights',
  templateUrl: './book-flights.component.html',
  styleUrls: ['./book-flights.component.css']
})
export class BookFlightsComponent implements OnInit {

  constructor(private bf: FormBuilder) { }

  bookInformation = {
    bookCode: '101'
  };

  bookForm = this.bf.group({  // the submission form 
    bookKey$: [''],
    bookCode: ['', Validators.minLength(1), Validators.required]
  });

  onSubmit(){
   const payload2: Booking = {
     bookingCode: this.form.bookingCode.value
   }

   this.booking$.addFlight(payload2);
   this.bookingForm.reset();
  }

  ngOnInit(): void {
  }

}
