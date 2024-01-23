import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CallMeService } from '../../services/call-me.service';

@Component({
  selector: 'app-main-page-maindiv',
  templateUrl: './main-page-maindiv.component.html',
  styleUrl: './main-page-maindiv.component.css'
})
export class MainPageMaindivComponent implements OnInit{
  productForm: any

  constructor(
    private formBuilder: FormBuilder,
    private api: CallMeService
  ){}
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
    })
  }

  AddData() {
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

  isOpen: boolean = false;

  openPopup() {
    var popup = document.getElementById('popup');
  
    if (popup !== null) {
      popup.classList.add('blur');
      popup.style.display = 'flex';
      this.isOpen = true;
    }
  }
  
  closePopup() {
    var popup = document.getElementById('popup');
  
    if (popup !== null) {
      popup.classList.remove('blur');
      popup.style.display = 'none';
      this.isOpen = false;
    }
  }
}
