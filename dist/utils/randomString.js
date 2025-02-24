export const randomString = (length, { numbers = true, upper = true, lower = true, special = false } = {}) => {
    let result = '';
    const characters = [
        '0123456789',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'abcdefghijklmnopqrstuvwxyz',
        '!@#$%^&*()_+~`|}{[]\:;?><,./-='
    ].filter((_, i) => [numbers, upper, lower, special][i]);
    const charactersLength = characters.join('').length;
    for (let i = 0; i < length; i++) {
        result += characters.join('')[Math.floor(Math.random() * charactersLength)];
    }
    return result;
};
