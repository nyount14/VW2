import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Envelope } from 'src/app/models/envelope.model';
import { EnvelopesService } from '../envelopes.service';

@Component({
  selector: 'app-envelope-new',
  templateUrl: './envelope-new.component.html',
  styleUrls: ['./envelope-new.component.css']
})
export class EnvelopeNewComponent implements OnInit {

  @ViewChild('f') newEnvelopeForm: NgForm;
  envelopes: Envelope[];
  category: string;
  amount: number;
  newEnvelope: Envelope;

  constructor(private envelopesService: EnvelopesService,
              private router: Router,
              private http: HttpClient) {}

  ngOnInit(): void {
  }

  onSubmit(){
    this.category = this.newEnvelopeForm.value.category;
    this.amount = this.newEnvelopeForm.value.amount;
    this.newEnvelope = new Envelope(this.category, this.amount);
    this.http.post(
      'https://virtualenvelopes-default-rtdb.firebaseio.com/envelopes.json',
      this.newEnvelope
    ).subscribe(responseData => {
      console.log(responseData)
    });


    // this.envelopesService.addEnvelope(this.newEnvelope);
    this.router.navigate(['/envelopes'])
  }

}

