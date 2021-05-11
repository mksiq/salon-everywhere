import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Item {
  readonly image?: string;
  readonly title?: string;
  constructor(init: ModelInit<Item>);
}

export declare class Business {
  readonly role?: string;
  readonly name?: string;
  readonly businessType?: string;
  readonly address?: string;
  readonly image?: string;
  readonly items?: (Item | null)[];
  constructor(init: ModelInit<Business>);
}

export declare class Portfolio {
  readonly id?: string;
  readonly type?: string;
  readonly images?: (string | null)[];
  constructor(init: ModelInit<Portfolio>);
}

export declare class Location {
  readonly address?: string;
  readonly neighborhood?: string;
  readonly city?: string;
  readonly provinceState?: string;
  readonly country?: string;
  constructor(init: ModelInit<Location>);
}

export declare class Partner {
  readonly id: string;
  readonly _id?: string;
  readonly name?: string;
  readonly tag?: string;
  readonly location?: Location;
  readonly roles?: (string | null)[];
  readonly description?: string;
  readonly skills?: (string | null)[];
  readonly portfolio?: (Portfolio | null)[];
  readonly inspiration?: string;
  readonly businesses?: (Business | null)[];
  constructor(init: ModelInit<Partner>);
  static copyOf(source: Partner, mutator: (draft: MutableModel<Partner>) => MutableModel<Partner> | void): Partner;
}