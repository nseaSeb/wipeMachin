export function useAuth2Token() {
    let tokenAuth2 = null;
    if (localStorage.getItem('tokenAuth2')) {
        tokenAuth2 = JSON.parse(localStorage.getItem('tokenAuth2') as string);
    }
    return {
        token: tokenAuth2 ? tokenAuth2.access_token : '',
    };
}
