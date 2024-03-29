import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../model/card.model';
import { CardService } from '../../services/card.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  listCards: CardModel [] = [];
  formCard: FormGroup = new FormGroup({});
  isUpdate: boolean = false;

  constructor(private service: CardService){  }

  ngOnInit(): void {
    this.list();
    this.formCard = new FormGroup({
      id_card: new FormControl(''),
      name: new FormControl(''),
      number: new FormControl(''),
      type: new FormControl(''),
      cvv: new FormControl(''),
      status: new FormControl('1')
    });
  }

  list(){
    this.service.getCards().subscribe((data: any) => {
      if(data){
        this.listCards = data;
      }
    })
  }

  save(){
    this.formCard.controls['status'].setValue('1');
    this.service.saveCards(this.formCard.value).subscribe(resp=>{
      if(resp){
        this.list();
        this.formCard.reset();
      }
    });
  }

  update(){
    this.service.updateCards(this.formCard.value).subscribe(resp=>{
      if(resp){
        this.list();
        this.formCard.reset();
      }
    });
  }

  delete(id: any){
    this.service.deleteCards(id).subscribe(resp=>{
      if(resp){
        this.list();
      }
    });
  }

  newCard(){
    this.isUpdate = false;
    this.formCard.reset();
  }

  selectItem(item: any){
    this.isUpdate = true;
    this.formCard.controls['id_card'].setValue(item.id_card);
    this.formCard.controls['name'].setValue(item.name);
    this.formCard.controls['number'].setValue(item.number);
    this.formCard.controls['type'].setValue(item.type);
    this.formCard.controls['cvv'].setValue(item.cvv);
  }
}
