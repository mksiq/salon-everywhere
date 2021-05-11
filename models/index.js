// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Partner, Item, Business, Portfolio, Location } = initSchema(schema);

export {
  Partner,
  Item,
  Business,
  Portfolio,
  Location
};