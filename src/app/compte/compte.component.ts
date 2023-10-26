import { Component } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent {
  nom: string = '';
  prenom: string = '';
  adresse: string = '';
  cp: string = '';
  ville: string = '';
  tel: string = '';
  email: string = '';
  civilite: string = '';
  password: string = '';
  login: string = '';
  pays: string = '';

  informationsAffichees: boolean = false;

  onSubmit() {
    this.informationsAffichees = true;
  }
}
