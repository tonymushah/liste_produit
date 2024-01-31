export enum Adjectifs {
    Meilleur = "meilleur",
    Mauvais = "mauvais"
}

export class AdjectifedString {
    public adjectif: Adjectifs;
    public column: string[];
    public constructor(input: string) {
        const adjectifs = extract_adjectifs(input);
        if (adjectifs.length != 1) {
            throw new Error("Adjectifs should be equal to 1");
        } else {
            this.adjectif = adjectifs[0];
        }
        this.column = extract_value(input);
    }
    public is_meilleur() {
        return this.adjectif == Adjectifs.Meilleur;
    }
    public is_mauvais() {
        return this.adjectif == Adjectifs.Mauvais;
    }
}

export function remove_adjectifs(input: string): string {
    return input.replace(Adjectifs.Mauvais, "").replace(Adjectifs.Meilleur, "")
}

export function extract_value(input: string): string[] {
    const input_re = remove_adjectifs(input);
    return input_re.split(" ").filter(str => !(str.length == 0 || str == null));
}

export function extract_adjectifs(input: string): Adjectifs[] {
    const output: Adjectifs[] = [];
    input.split(" ").forEach(str => {
        const i = str.toLowerCase();
        switch (i) {
            case Adjectifs.Meilleur:
                output.push(Adjectifs.Meilleur);
                break;

            case Adjectifs.Mauvais:
                output.push(Adjectifs.Mauvais);
                break;

            default:
                break;
        }
    })
    return output;
}