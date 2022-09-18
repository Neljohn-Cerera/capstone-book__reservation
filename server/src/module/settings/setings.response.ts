import { Settings } from './../../entities/Settings';
import { Field, ObjectType } from 'type-graphql';
import { FieldError } from '../../utils/FieldError';

@ObjectType()
class SettingsResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Settings, { nullable: true })
  settings?: Settings;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;
}

export { SettingsResponse };
