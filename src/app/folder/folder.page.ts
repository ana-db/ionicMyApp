import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public folder: string;
  tareas: Array<any>;

  constructor(private activatedRoute: ActivatedRoute) { 
    console.trace('FolderPageModule constructor');
    this.tareas = [
      {
        'id': 0,
        'nombre': 'Primera tarea',
        'completado': true
      },
      {
        'id': 1,
        'nombre': 'Segunda tarea',
        'completado': false
      },
      {
        'id': 2,
        'nombre': 'Tercera tarea',
        'completado': false
      }
    ]
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  modificar(tarea : any){
    console.trace('FolderPageModule modificar');
    tarea.completado = !tarea.completado
  }

  eliminar(tarea : any){
    console.trace('FolderPageModule eliminar');
    if( confirm("¿Estás seguro de que quieres eliminar la tarea?") ){

    }else{
      console.trace('Eliminación cancelada');
    }
  }

}//fin FolderPageModule
