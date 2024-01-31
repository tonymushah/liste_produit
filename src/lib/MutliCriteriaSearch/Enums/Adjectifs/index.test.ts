import { expect, test } from "vitest";
import { AdjectifedString } from './';

test("meilleur test", () => {
    const initial = "meilleur prix";
    const initial_ = new AdjectifedString(initial);
    expect(initial_.is_meilleur(), "extract adejctifs").toBeTruthy();
    expect(initial_.column).toStrictEqual(["prix"])
})

test("mauvais test", () => {
    const initial = "mauvais prix";
    const initial_ = new AdjectifedString(initial);
    expect(initial_.is_mauvais(), "extract adejctifs").toBeTruthy();
    expect(initial_.column).toStrictEqual(["prix"])
})
