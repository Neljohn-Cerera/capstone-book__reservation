import { getConnection } from 'typeorm';

export const insertForeignEntity = async (entity: any, inputData: object) => {
  const connection = getConnection();
  return await connection
    .createQueryBuilder()
    .insert()
    .into(entity)
    .values(inputData)
    .returning('*')
    .execute()
    .then((response) => {
      return response.raw[0];
    });
};
