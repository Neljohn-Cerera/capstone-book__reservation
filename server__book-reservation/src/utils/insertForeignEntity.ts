import { datasource } from "../db";

export const insertForeignEntity = async (entity: any, inputData: object) => {
  return await datasource
    .createQueryBuilder()
    .insert()
    .into(entity)
    .values(inputData)
    .returning("*")
    .execute()
    .then((response) => {
      return response.raw[0];
    });
};
