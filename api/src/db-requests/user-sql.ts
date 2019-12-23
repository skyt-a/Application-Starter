import { IUserArgument } from "../models/argument";

export const from = "users";

export const fields = [
    "id",
    "name"
];

export function createWhere(query: IUserArgument) {
    const where: string[] = [];
    if (query.name !== undefined) {
        where.push(`name=${query.name}`);
    }
    return where;
}