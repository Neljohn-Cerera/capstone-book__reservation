import { Settings } from './../../entities/Settings';

import { Field, InputType } from 'type-graphql';

@InputType()
export class SettingsArgs implements Partial<Settings> {
  @Field()
  fine: number;
}
