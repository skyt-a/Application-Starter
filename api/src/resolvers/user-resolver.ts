import * as Sql from "../db-requests/user-sql";
import {
    resolveItems,
    resolvePrimary,
    toConnectionType,
} from "../helpers/resolve-helper";
import {
    createSelectCountSql,
    createSelectSql,
} from "../helpers/sql-helper";

export async function resolveUsers(parent: any, args: any, context: any) {
    const result = await resolveItems({
        context,
        selectSql: createSelectSql({
            from: Sql.from,
            fields: Sql.fields,
            where: Sql.createWhere(args),
        }),
        selectCountSql: createSelectCountSql({
            from: Sql.from,
            where: Sql.createWhere(args),
        }),
    });

    return toConnectionType(result.items, result.totalCount, args);
}
