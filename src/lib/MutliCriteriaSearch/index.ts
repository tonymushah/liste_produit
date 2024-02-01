import type { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { AdjectifedString } from ".";
import { Conjoctions } from ".";
import ColumnValue from "./ColumnValue";
import { extract_adjectifs } from "./Enums";

export * from "./Enums";
export { default as ColumnValue } from "./ColumnValue";

export default class MutliCriteriaSearch {
    public sort: AdjectifedString[] = [];
    public condition: ColumnValue[] = [];
    public constructor(input: string) {
        const splited = input.split(Conjoctions.Avec).filter(v => !(v.length == 0 || v == ""));
        splited.forEach(v => {
            try {
                this.sort.push(new AdjectifedString(v));
                return;
            } catch (error) {
                if (extract_adjectifs(v).length != 0) return;
                try {
                    this.condition.push(new ColumnValue(v));
                } catch (error) { ; }
            }
        });
    }
    public async exec(prisma: PrismaClient, offset?: number, limit?: number) {
        const orderBy: {
            [k: string]: Prisma.SortOrder
        } = {};
        this.sort.forEach(sort => {
            sort.column.forEach(c => {
                if (c == "prix") {
                    if (sort.is_meilleur()) {
                        orderBy[c] = "asc"
                    } else {
                        orderBy[c] = "desc"
                    }
                } else {
                    if (sort.is_meilleur()) {
                        orderBy[c] = "desc";
                    } else {
                        orderBy[c] = "asc";
                    }
                }
            })
        });
        const where: Record<string, string> = {};
        this.condition.forEach(c => {
            where[c.column] = c.value;
        });
        return await prisma.phone.findMany({
            orderBy,
            where,
            take: limit,
            skip: offset
        });
    }
    public async execAlim(prisma: PrismaClient, offset?: number, limit?: number) {
        const orderBy: {
            [k: string]: Prisma.SortOrder
        } = {};
        this.sort.forEach(sort => {
            sort.column.forEach(c => {
                if (c == "prix") {
                    if (sort.is_meilleur()) {
                        orderBy[c] = "asc"
                    } else {
                        orderBy[c] = "desc"
                    }
                } else {
                    if (sort.is_meilleur()) {
                        orderBy[c] = "desc";
                    } else {
                        orderBy[c] = "asc";
                    }
                }
            })
        });
        const where: Record<string, string> = {};
        this.condition.forEach(c => {
            where[c.column] = c.value;
        });
        return await prisma.alim.findMany({
            orderBy,
            where,
            take: limit,
            skip: offset
        });
    }
}