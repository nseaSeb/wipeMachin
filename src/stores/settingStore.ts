import { defineStore } from 'pinia';
export const useSettingsStore = defineStore('settings', {
    state: () => ({
        apiHost: 'api host',
        auth: 'auth',
        clientID: 'client id',
        clientSecret: 'client secret',
        token: 'token',
    }),
    actions: {
        saveDataToLocalStorage() {
            localStorage.setItem('apiHost', this.apiHost);
            localStorage.setItem('auth', this.auth);
            localStorage.setItem('clientID', this.clientID);
            localStorage.setItem('clientSecret', this.clientSecret);
            localStorage.setItem('token', this.token);
        },
        openFromLocalStorage() {
            if (localStorage.getItem('apiHost')) {
                this.apiHost = localStorage.getItem('apiHost') as string;
            }
            if (localStorage.getItem('auth')) {
                this.auth = localStorage.getItem('auth') as string;
            }
            if (localStorage.getItem('clientID')) {
                this.clientID = localStorage.getItem('clientID') as string;
            }
            if (localStorage.getItem('clientSecret')) {
                this.clientSecret = localStorage.getItem('clientSecret') as string;
            }
            if (localStorage.getItem('token')) {
                this.token = localStorage.getItem('token') as string;
            }
        },
    },
});
