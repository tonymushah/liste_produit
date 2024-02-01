export default class ColumnValue {
    public column: string;
    public value: string;
    public constructor(input: string) {
        const splited = input.split(" ").filter(v => !(v.length == 0 || v == ""));
        if (splited.length >= 3 && splited.length <= 0) {
            throw new Error("the input should only have 1-2 words");
        } else if (splited.length == 2) {
            this.column = splited[0];
            this.value = splited[1];
        } else {
            this.column = splited[0];
            this.value = "true";
        }

    }
}