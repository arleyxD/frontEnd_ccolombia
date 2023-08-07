import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FrutaService } from 'src/app/protected/services/fruta.service';
import { Fruta } from 'src/app/protected/interfaces/frutas.interface';
import { from } from 'rxjs';

@Component({
  selector: 'app-formulario-dinamico',
  templateUrl: './formulario-dinamico.component.html',
  styleUrls: ['./formulario-dinamico.component.css'],
})
export class FormularioDinamicoComponent implements OnInit {
  forms: FormGroup[] = [];
  frutas: Fruta[] = [];

  // Agregar el formulario reactivo
  form: FormGroup;

  constructor(private frutaService: FrutaService, private fb: FormBuilder) {
    // Inicializar el formulario reactivo
    this.form = this.fb.group({
      id:[''],
      nombre: ['', Validators.required],
      tipoProducto: ['', Validators.required],
      tipo: ['bulto'],
      inventarioCanastilla: [null, Validators.required],
      inventarioBulto: [null, Validators.required],
      valorMedioKilo: [null, Validators.required],
      valorKilo: [null, Validators.required],
      valorC: [null, Validators.required],
      valorB: [null, Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.frutaService.getFrutas().subscribe((data) => {
      this.frutas = data;
      console.log(data);
    });
  }

  // Método para agregar un nuevo formulario
  addForm() {
    this.forms.push(this.fb.group({
      id:[''],
      nombre: ['', Validators.required],
      tipoProducto: ['', Validators.required],
      tipo: ['bulto'],
      inventarioCanastilla: [null, Validators.required],
      inventarioBulto: [null, Validators.required],
      valorMedioKilo: [null, Validators.required],
      valorKilo: [null, Validators.required],
      valorC: [null, Validators.required],
      valorB: [null, Validators.required],
      descripcion: ['', Validators.required],
    }));
  }

  // Método para remover un formulario
  removeForm(index: number) {
    this.forms.splice(index, 1);
  }
  // Método para limpiar un formulario individual
  clearForm(form: FormGroup) {
    form.reset();
  }

  // Método para guardar los formularios en el servidor
  guardarFormularios() {
    const productos: any[] = [];
    const inventarios: any[] = [];

    // Recorrer los formularios y separarlos en productos e inventarios
    for (const form of this.forms) {
      // Crear objeto "producto"
      const producto: any = {
        nombre: form.value.nombre,
        tipoProducto: form.value.tipoProducto,
        descripcion: form.value.descripcion,
      };
      productos.push(producto);

      // Crear objeto "inventario"
      const inventario: any = {
        
        idFruta: form.value.id,
        tipo: form.value.tipo,
        inventarioCanastilla: form.value.inventarioCanastilla,
        inventarioBulto: form.value.inventarioBulto,
        valorMedioKilo: form.value.valorMedioKilo,
        valorKilo: form.value.valorKilo,
        valorC: form.value.valorC,
        valorB: form.value.valorB,
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

  // Método para buscar frutas en función del valor del campo de búsqueda
  onSearchProduct(form: FormGroup, value: string) {
    const filterValue = value.toLowerCase();
    if (filterValue && filterValue.trim() !== '') {
      form.get('nombre')?.setValue(value); // Actualizar el campo "nombre" del formulario
     // this.frutas = this.filterFrutas(filterValue);
    } else {
    //  this.frutas = [];
    }
  }

  // Método para filtrar frutas en función del valor de búsqueda
  filterFrutas(value: string): Fruta[] {
    const filterValue = value.toLowerCase();
    return this.frutas.filter((fruta) =>
      fruta.nombre.toLowerCase().includes(filterValue)
    );
  }

  // Método para seleccionar un producto en el buscador
  onSelectProduct(form: FormGroup, value: string) {
    const selectedFruta = this.frutas.find(
      (fruta) => fruta.nombre.toLowerCase() === value.toLowerCase()
    );
    if (selectedFruta) {
      form.patchValue({
        id: selectedFruta._id,
        nombre: selectedFruta.nombre,
        tipoProducto: selectedFruta.tipo,
        descripcion: selectedFruta.descripcion,
      });
    }
    //this.frutas = []; // Limpiar la lista desplegable de frutas
  }
}
