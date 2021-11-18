export const isNull = (string) => {
    return string === '' || string === undefined || string === ' ';
}

export const isWhitespace = (string) => {
    const regExp = /[\s]/g;
    return regExp.test(string);
};

export const isSpecial = (string) => {
    const regExp = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    return regExp.test(string);
};

export const checkId = (id) => {
    const isRange = (id.length >= 8 && id.length <= 20);
    return isRange && !isNull(id) && !isWhitespace(id) && !isSpecial(id);
};

export const checkPassword = (password) => {
    const isRange = (password.length >= 8);
    return isRange && !isNull(password) && !isWhitespace(password);
};

export const checkName = (name) => {
    return !isNull(name) && !isWhitespace(name);
};