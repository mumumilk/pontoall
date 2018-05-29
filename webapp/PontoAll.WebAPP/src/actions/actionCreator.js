export function signin(email, password) {
    return { type: 'LOGIN', email, password };
}