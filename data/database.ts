import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import Weight from './weight';
import schema from './schema';

const adapter = new SQLiteAdapter({
  schema:schema,
  jsi: false
});

export const database = new Database({
  adapter,
  modelClasses: [Weight]
});