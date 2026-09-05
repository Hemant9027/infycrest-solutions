import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
export const mongoDb = client.db(process.env.MONGODB_DB ?? "infycrest");

export const db = {
  insert(table: { collection: string }) {
    return {
      values: (values: Record<string, unknown>) =>
        mongoDb.collection(table.collection).insertOne({
          ...values,
          createdAt: values.createdAt ?? new Date(),
        }),
    };
  },
};
