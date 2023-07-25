export const isEmptyValue = (value: string) => {
    return !value || value.trim().length < 1;
}
export const isEmailValid = (email: string) => {
    // eslint-disable-next-line
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
export const isPasswordValid = (password: string) => {
    // eslint-disable-next-line
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-_])[A-Za-z\d@$!%*?&-_]{6,}$/.test(password);
}