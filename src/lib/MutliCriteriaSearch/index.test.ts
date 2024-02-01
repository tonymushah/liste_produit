import { expect, test } from "vitest";
import MutliCriteriaSearch from ".";

test("MutliCriteriaSearch 1", () => {
    const input = "meilleur prix avec wifi";
    const res = new MutliCriteriaSearch(input);
    expect(res.condition).toHaveLength(1);
    expect(res.condition[0].column).toBe("wifi");
    expect(res.condition[0].value).toBe("true");
    expect(res.sort).toHaveLength(1);
    expect(res.sort[0].is_meilleur()).toBeTruthy();
    expect(res.sort[0].column).toStrictEqual(["prix"])
});

test("MutliCriteriaSearch 2", () => {
    const input = "meilleur prix avec wifi avec meilleur ram";
    const res = new MutliCriteriaSearch(input);
    expect(res.condition).toHaveLength(1);
    expect(res.condition[0].column).toBe("wifi");
    expect(res.condition[0].value).toBe("true");
    expect(res.sort).toHaveLength(2);
    expect(res.sort[0].is_meilleur()).toBeTruthy();
    expect(res.sort[0].column).toStrictEqual(["prix"]);
    expect(res.sort[1].is_meilleur()).toBeTruthy();
    expect(res.sort[1].column).toStrictEqual(["ram"]);
});

test("multi-search 3", async () => {

})