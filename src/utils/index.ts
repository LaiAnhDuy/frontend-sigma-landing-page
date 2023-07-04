export const isEmptyValue = (value: string) => {
    return !value || value.trim().length < 1;
}
export const isEmailValid = (email: string) => {
    // eslint-disable-next-line
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
