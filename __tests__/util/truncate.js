import database from '../../config/databaseSQL/database-connect';

export default function truncate() {
  return Promise.all(
    Object.keys(database.connection.models).map((key) => {
      return database.connection.models[key].destroy({
        truncate: true,
        force: true,
      });
    }),
  );
}
