import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuesService } from '../values.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers :[ValuesService]
})
export class DemoComponent 
{
  public Value1 : number = 0;
  public Value2 : number = 0;

  constructor(private obj : ValuesService)
  {
    this.Value1 = obj.Add(10,11);
    this.Value2 = obj.Sub(11,10);
  }
}
