import { Injectable } from '@angular/core';
import {Character} from '../classes/character'
import {CHARACTERS} from '../classes/data-characters'



@Injectable()
export class CharactersService {

  constructor() { }
  getChracters(): Promise<Character[]> {
    return Promise.resolve(CHARACTERS);
  }

}
