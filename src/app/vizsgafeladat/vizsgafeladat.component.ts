import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vizsgafeladat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './vizsgafeladat.component.html',
  styleUrl: './vizsgafeladat.component.css'
})
export class VizsgafeladatComponent {
  // A kalkulációhoz szükséges kezdőértékek felvétele
  htmlModul: number = 0;
  bootstrapModul: number = 0;
  javascriptModul: number = 0;
  typescriptModul: number = 0;
  angularModul: number = 0;
  szerverModul: number = 0;

  eredmeny: string = '';
  hiba: string = '';
  eredmenyek: string[] = [];

  calculateSum(): number {
    return (
      this.htmlModul + this.bootstrapModul + this.javascriptModul + this.typescriptModul + this.angularModul + this.szerverModul
    );
  }

  EredmenyMentes(): void {
    const sum = this.calculateSum();

    if(this.CheckFields()) {
      this.hiba = 'Minden mező kitöltése kötelező!';
      return;
    }
    
    if (sum < 50) {
      this.eredmeny = 'Sikertelen vizsga, szerzett pont: ';
    } else if (sum >= 50 && sum <= 59) {
      this.eredmeny = 'Sikeres vizsga (2-es), szerzett pont: ';
    } else if (sum >= 60 && sum <= 69) {
      this.eredmeny = 'Sikeres vizsga (3-as), szerzett pont: ';
    } else if (sum >= 70 && sum <= 79) {
      this.eredmeny = 'Sikeres vizsga (4-es), szerzett pont: ';
    } else {
      this.eredmeny = 'Sikeres vizsga (5-ös), szerzett pont: ';
    }

    this.eredmenyek.push(this.eredmeny);
  }

  CheckFields(): boolean {
    return (
      this.htmlModul === 0 ||
       this.bootstrapModul === 0 ||
        this.javascriptModul === 0 ||
         this.typescriptModul === 0 ||
          this.angularModul === 0 ||
           this.szerverModul === 0
    )
  }

}
