import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrokerService } from '../../services/broker.service';


@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrl: './catalogs.component.css'
})
export class CatalogsComponent implements OnInit {
  productForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private api: BrokerService
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      email: ["", Validators.required],
    })
  }


  AddEmail() {
    if (this.productForm.valid) {
      this.api.postProduct(this.productForm.value)
        .subscribe({
          next: () => {
            alert("Product was added succesfully")
            this.productForm.reset()
          },
          error: () => {
            alert("Something went wrong while adding")
          }
        })
    }
  }
}