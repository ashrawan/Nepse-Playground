import {Observable} from 'rxjs';
import {Column, GridRowOption} from './table-model';
import {GenericFilterRequest, GenericResponse, PageRequest} from '../../../../@core/data/nepse/Generic';

export abstract class AbstractDataConfigurer<T> {

  protected constructor() {
  }

  abstract getColumns(): Column[];

  abstract getRowOptions(): GridRowOption[];

  abstract getGridData(pageRequest: PageRequest): Observable<GenericResponse<Array<T>>>;

  abstract filterGridData(pageRequest: PageRequest, genericFilterRequest: GenericFilterRequest<T>): Observable<GenericResponse<T[]>>;

}
