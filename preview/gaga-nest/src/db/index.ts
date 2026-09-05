import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017";

const globalForMongo = globalThis as typeof globalThis & { __gagaMongoClient?: MongoClient };
const client = globalForMongo.__gagaMongoClient ?? new MongoClient(uri);
if (process.env.NODE_ENV !== "production") globalForMongo.__gagaMongoClient = client;

export const mongoDb = client.db(process.env.MONGODB_DB ?? "infycrest");
export const db = {
  insert(table: { collection: string }) {
    return {
      values(values: Record<string, unknown>) {
        return mongoDb.collection(table.collection).insertOne({ ...values, createdAt: values.createdAt ?? new Date() });
      },
    };
  },
};
