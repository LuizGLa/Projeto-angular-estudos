import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { SexoPipe } from '../../pipes/sexo.pipe';
import { CdkTableModule } from '@angular/cdk/table';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


interface Pessoas {
  nome: string;
  sexo: string;
  salario: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    MatTableModule,
    SexoPipe,
    CurrencyPipe,
    MatPaginatorModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  displayedColumns: string[] = ['nome', 'sexo', 'salario'];

  frutas: string[] = []
  frutas$ = of('banana', 'maçã', 'uva', 'pessego')

  constructor() {
    this.frutas$.pipe(
      tap(console.log),
      map(fruta => fruta.toUpperCase()),
      tap(console.log),
    ).subscribe(
      resultado => {
        this.frutas.push(resultado)
      }
    );
  }

  clientes!: Pessoas[]
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.clientes);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}


