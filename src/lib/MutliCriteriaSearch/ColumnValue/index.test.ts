import { expect, test } from "vitest";
import ColumnValue from ".";

test("unit test cv", () => {
    const input = "usb-c";
    const cv = new ColumnValue(input);
    expect(cv.column).toBe("usb-c");
    expect(cv.value).toBe("true")
})

test("unit test cv2", () => {
    const input = "prix 1223";
    const cv = new ColumnValue(input);
    expect(cv.column).toBe("prix");
    expect(cv.value).toBe("1223")
});