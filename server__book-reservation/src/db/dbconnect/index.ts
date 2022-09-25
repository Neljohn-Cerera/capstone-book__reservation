import datasource from "../datasource";

const dbconnect = async () => {
  try {
    await datasource.initialize();
  } catch (error) {
    console.error("postgres error", error);
    console.log("Postgres Not Connected");
    process.exit(1);
  }
};

export default dbconnect;
