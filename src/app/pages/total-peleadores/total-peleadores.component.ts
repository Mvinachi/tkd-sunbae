import { Component } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

// interface any {
//   name: string;
//   age: number;
//   address: string;
// }

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<any> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<any> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-total-peleadores',
  templateUrl: './total-peleadores.component.html',
  styleUrl: './total-peleadores.component.scss'
})

export class TotalPeleadoresComponent {

  listOfColumns: ColumnItem[] = [
    {
      name: 'Nombre',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: (list: string[], item: any) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Ciudad',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: (list: string[], item: any) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Club o Delegacion',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: (list: string[], item: any) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Genero',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [],
      filterFn: (list: string[], item: any) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Categoria',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.age - b.age,
      sortDirections: ['ascend', 'descend', null],
      listOfFilter: [
        { text: '20 años', value: 2 },
        { text: '10 años', value: '3' }
      ],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Peso',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: any, b: any) => a.address.length - b.address.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: any) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Modalidad',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: any, b: any) => a.address.length - b.address.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: any) => item.address.indexOf(address) !== -1
    }
  ];
  
  listOfData: any[] = [
    {
      name: 'Andrew Mendoza',
      age: 32,
      club: 'Club Sunbae',
      genero: 'Masculino',
      categoria: 'Cadete',
      peso: '55kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'Sofía Rodríguez',
      age: 28,
      club: 'Taekwondo Elite',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '63kg',
      modalidad: 'Combate',
    },
    {
      name: 'Carlos Jiménez',
      age: 18,
      club: 'Guerreros TKD',
      genero: 'Masculino',
      categoria: 'Junior',
      peso: '58kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'María Fernanda López',
      age: 24,
      club: 'Tigre Blanco',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '49kg',
      modalidad: 'Combate',
    },
    {
      name: 'Diego Torres',
      age: 15,
      club: 'Águilas TKD',
      genero: 'Masculino',
      categoria: 'Juvenil',
      peso: '51kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'Valentina Gómez',
      age: 22,
      club: 'Club Sunbae',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '57kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'Lucas García',
      age: 19,
      club: 'Leones TKD',
      genero: 'Masculino',
      categoria: 'Junior',
      peso: '67kg',
      modalidad: 'Combate',
    },
    {
      name: 'Isabella Martínez',
      age: 30,
      club: 'Águilas TKD',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '62kg',
      modalidad: 'Combate',
    },
    {
      name: 'Mateo Castillo',
      age: 14,
      club: 'Tigre Blanco',
      genero: 'Masculino',
      categoria: 'Cadete',
      peso: '53kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'Camila Pérez',
      age: 27,
      club: 'Taekwondo Elite',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '55kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'Gabriel Ríos',
      age: 16,
      club: 'Guerreros TKD',
      genero: 'Masculino',
      categoria: 'Junior',
      peso: '60kg',
      modalidad: 'Combate',
    },
    {
      name: 'Lucía Fernández',
      age: 25,
      club: 'Club Sunbae',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '52kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'Alejandro Ruiz',
      age: 20,
      club: 'Leones TKD',
      genero: 'Masculino',
      categoria: 'Junior',
      peso: '64kg',
      modalidad: 'Combate',
    },
    {
      name: 'Victoria Morales',
      age: 23,
      club: 'Tigre Blanco',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '50kg',
      modalidad: 'Combate',
    },
    {
      name: 'Juan Pablo Vargas',
      age: 21,
      club: 'Águilas TKD',
      genero: 'Masculino',
      categoria: 'Senior',
      peso: '70kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'Daniela Castillo',
      age: 29,
      club: 'Guerreros TKD',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '60kg',
      modalidad: 'Combate',
    },
    {
      name: 'Andrew Mendoza',
      age: 32,
      club: 'Club Sunbae',
      genero: 'Masculino',
      categoria: 'Cadete',
      peso: '55kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'Sofía Rodríguez',
      age: 28,
      club: 'Taekwondo Elite',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '63kg',
      modalidad: 'Combate',
    },
    {
      name: 'Carlos Jiménez',
      age: 18,
      club: 'Guerreros TKD',
      genero: 'Masculino',
      categoria: 'Junior',
      peso: '58kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'María Fernanda López',
      age: 24,
      club: 'Tigre Blanco',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '49kg',
      modalidad: 'Combate',
    },
    {
      name: 'Diego Torres',
      age: 15,
      club: 'Águilas TKD',
      genero: 'Masculino',
      categoria: 'Juvenil',
      peso: '51kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'Valentina Gómez',
      age: 22,
      club: 'Club Sunbae',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '57kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'Lucas García',
      age: 19,
      club: 'Leones TKD',
      genero: 'Masculino',
      categoria: 'Junior',
      peso: '67kg',
      modalidad: 'Combate',
    },
    {
      name: 'Isabella Martínez',
      age: 30,
      club: 'Águilas TKD',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '62kg',
      modalidad: 'Combate',
    },
    {
      name: 'Mateo Castillo',
      age: 14,
      club: 'Tigre Blanco',
      genero: 'Masculino',
      categoria: 'Cadete',
      peso: '53kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'Camila Pérez',
      age: 27,
      club: 'Taekwondo Elite',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '55kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'Gabriel Ríos',
      age: 16,
      club: 'Guerreros TKD',
      genero: 'Masculino',
      categoria: 'Junior',
      peso: '60kg',
      modalidad: 'Combate',
    },
    {
      name: 'Lucía Fernández',
      age: 25,
      club: 'Club Sunbae',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '52kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'Alejandro Ruiz',
      age: 20,
      club: 'Leones TKD',
      genero: 'Masculino',
      categoria: 'Junior',
      peso: '64kg',
      modalidad: 'Combate',
    },
    {
      name: 'Victoria Morales',
      age: 23,
      club: 'Tigre Blanco',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '50kg',
      modalidad: 'Combate',
    },
    {
      name: 'Juan Pablo Vargas',
      age: 21,
      club: 'Águilas TKD',
      genero: 'Masculino',
      categoria: 'Senior',
      peso: '70kg',
      modalidad: 'Poomsae',
    },
    {
      name: 'Daniela Castillo',
      age: 29,
      club: 'Guerreros TKD',
      genero: 'Femenino',
      categoria: 'Senior',
      peso: '60kg',
      modalidad: 'Combate',
    },
  ];
  
}
