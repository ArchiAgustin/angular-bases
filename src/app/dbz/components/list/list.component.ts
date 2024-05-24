import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponentDBZ {


  @Input()
  public characterList:Character [] = [{
    name: 'Trunks',
    power: 50
  }]

  // @Output()
  // public onDeleteById: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{
    // emitir id del personaje
    if( !id ) return;
    console.log(id);
    this.onDeleteById.emit(id);
  }

 }
