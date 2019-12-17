import {DefaultCrudRepository} from '@loopback/repository';
import {Item, ItemRelations} from '../models';
import {ListaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ItemRepository extends DefaultCrudRepository<
  Item,
  typeof Item.prototype.id,
  ItemRelations
> {
  constructor(
    @inject('datasources.lista') dataSource: ListaDataSource,
  ) {
    super(Item, dataSource);
  }
}
