type CustomType = string | string[];

function parseString(input: string): string[];
function parseString(input: string[]): string;

function parseString(input: CustomType): CustomType {
    if (Array.isArray(input)) {
        return input.join("");
    } else {
        return input.split("");
    }
}

const responseArray = parseString('Ricardo');
const responseString = parseString(['1', '2', '3']);
