import { Injectable } from '@nestjs/common';
import * as lowdb from 'lowdb';
import * as FileAsync from 'lowdb/adapters/FileAsync';
import * as uuid from 'uuid';

type CollctionName = 'favourites';

@Injectable()
export class LowdbService {
  private db: lowdb.LowdbAsync<any>;

  constructor() {
    this.initDatabase('favourites');
  }

  private async initDatabase(collctionName: CollctionName) {
    const adapter = new FileAsync('db.json');
    this.db = await lowdb(adapter);
    const listUsers = await this.db.get(collctionName).value();
    if (!listUsers) {
      await this.db.set(collctionName, []).write();
    }
  }

  async findFavouriteByUser(key: string, collctionName: CollctionName): Promise<any> {
    const values = await this.db.get(collctionName).value();
    return values[key] || [];
  }

  async checkFavourite(key: string, bookId, collctionName: CollctionName): Promise<any> {
    const favourites = await this.findFavouriteByUser(key, collctionName)
    return favourites.find((item: any) => item.bookId === bookId);
  }

  async add(record: any, key: string, collctionName: CollctionName): Promise<any> {
    const listData = await this.db.get(collctionName).value();
    record.id = uuid.v1();
    listData[key] ? listData[key].push(record) : listData[key] = [record];
    await this.db.set(collctionName, listData).write();
    return record;
  }

  async delete(bookId: string, key: string, collctionName: CollctionName): Promise<any> {
    let listData = await this.db.get(collctionName).value();
    listData = { ...listData, [key]: listData[key].filter((item: any) => item.bookId !== bookId) };
    await this.db.set(collctionName, listData).write();
  }
}
