import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrutaService } from 'src/app/protected/services/fruta.service';
import { FormBuilder } from '@angular/forms';
import { Observable ,of} from 'rxjs';
import { Fruta } from 'src/app/protected/interfaces/frutas.interface';

@Component({
  selector: 'app-formulario-dinamico',
  templateUrl: './formulario-dinamico.component.html',
  styleUrls: ['./formulario-dinamico.component.css']
})
export class FormularioDinamicoComponent implements OnInit{
  forms: any[] = [];
  frutas: Fruta[] = [];
  selectedProduct: any = null;

  constructor(private frutaService: FrutaService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.frutaService.getFrutas().subscribe(
      (frutas) => console.log(frutas),
      (error) => console.error(error)
    );
  }

  // Método para agregar un nuevo formulario
  addForm() {
    this.forms.push({
      nombre: '',
      tipoProducto: '',
      tipo: 'bulto',
      inventarioCanastilla: null,
      inventarioBulto: null,
      valorMedioKilo: null,
      valorKilo: null,
      valorC: null,
      valorB: null,
      descripcion: ''
    });
  }

  // Método para remover un formulario
  removeForm(index: number) {
    this.forms.splice(index, 1);
  }

  // Método para guardar los formularios en el servidor
  guardarFormularios() {
    const productos: any[] = [];
    const inventarios: any[] = [];

    // Recorrer los formularios y separarlos en productos e inventarios
    for (const form of this.forms) {
      // Crear objeto "producto"
      const producto: any = {
        nombre: form.nombre,
        tipoProducto: form.tipoProducto,
        tipo: form.tipo,
        valorMedioKilo: form.valorMedioKilo,
        valorKilo: form.valorKilo,
        valorC: form.valorC,
        valorB: form.valorB,
        descripcion: form.descripcion
      };
      productos.push(producto);

      // Crear objeto "inventario"
      const inventario: any = {
        tipo: form.tipo,
        inventarioCanastilla: form.inventarioCanastilla,
        inventarioBulto: form.inventarioBulto
      };
      inventarios.push(inventario);
    }

    // Aquí tendrías los arrays "productos" e "inventarios" con los datos separados.

    // Por ejemplo, si deseas mostrar los arrays por consola, puedes hacer lo siguiente:
    console.log('Productos:', productos);
    console.log('Inventarios:', inventarios);

    // Ahora puedes enviar los datos al servidor o realizar cualquier acción necesaria con los arrays "productos" e "inventarios".
    // Por ejemplo, puedes enviarlos al servidor mediante una solicitud HTTP POST, si es necesario.
  }
}
