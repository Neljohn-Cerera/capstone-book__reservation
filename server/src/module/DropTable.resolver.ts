import { Arg, Query, Resolver } from "type-graphql";
import { datasource } from "../db";

// get a connection and create a new query runner
const queryRunner = datasource.createQueryRunner();

@Resolver()
export class DropTableResolver {
  //Retrieve roles
  @Query(() => Boolean)
  async dropTable(@Arg("table") table: string): Promise<Boolean> {
    await queryRunner.connect();

    const dropRole = await queryRunner.dropTable(table);

    console.log("drop role : ", dropRole);

    return true;
  }
}
