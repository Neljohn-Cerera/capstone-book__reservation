import { getConnection } from 'typeorm';

export const updateEntity = async (id: number, entity: any, dataInput: any) => {
  const _entity = await getConnection()
    .createQueryBuilder()
    .update(entity)
    .set({ ...dataInput })
    .where('id = :id', {
      id,
    })
    .returning('*')
    .execute()
    .then((response: any) => {
      return response.raw[0];
    });
  return _entity;
};
