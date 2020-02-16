import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  public parts: Part[];
  public newPart: Part = {modelNo:'', partName: '', price: 0, onHand: 0 };

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }
  async ngOnInit() {
      this.parts = await this.http.get<Part[]>(this.baseUrl + 'part').toPromise();
  }
  async save() {
      await this.http.post<Part[]>(this.baseUrl + 'teacher', this.newPart).toPromise();
      this.newPart = { modelNo: '', partName: '', price: 0, onHand: 0 };
      this.parts = await this.http.get<Part[]>(this.baseUrl + 'part').toPromise();
  }


}

interface Part {
  modelNo: string;
  partName: string;
  price: number;
  onHand: number;
 //image: img;

}

