import axios from 'axios';
import { defineStore } from 'pinia';
export const useSettingsStore = defineStore('settings', {
    state: () => ({
        apiHost: 'api host',
        auth: 'auth',
        clientID: 'client id',
        clientSecret: 'client secret',
        publicPostUrl: '',
        tokenAuth2: {
            token_type: 'Bearer',
            expires_in: 86400,
            access_token: 'tok tok',
            expires_date: '0',
        },
    }),
    actions: {
        saveDataToLocalStorage() {
            localStorage.setItem('apiHost', this.apiHost);
            localStorage.setItem('auth', this.auth);
            localStorage.setItem('clientID', this.clientID);
            localStorage.setItem('clientSecret', this.clientSecret);
            localStorage.setItem('tokenAuth2', JSON.stringify(this.tokenAuth2));
            localStorage.setItem('publicPostUrl', this.publicPostUrl);
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
            if (localStorage.getItem('tokenAuth2')) {
                this.tokenAuth2 = JSON.parse(localStorage.getItem('tokenAuth2') as string);
            }
            if (localStorage.getItem('publicPostUrl')) {
                this.publicPostUrl = localStorage.getItem('publicPostUrl') as string;
            }
        },
        async chechAuth2Token() {
            this.openFromLocalStorage();
            const now = Date.now();
            console.log('!! check auth 2', now, this.tokenAuth2.expires_date);
            // if (now > +this.tokenAuth2.expires_date) {
            //     console.log('!! check auth 2 need new token');
            //     await this.fetchAccessToken();
            // }
        },
        async fetchAccessToken() {
            const url = this.auth + '/oauth2/access-tokens';
            console.log('url: ', url);

            try {
                const response = await axios({
                    url: url,
                    method: 'post',
                    headers: {},
                    data: {
                        tokenName: 'Mon token',
                        grant_type: 'client_credentials',
                        client_id: this.clientID,
                        client_secret: this.clientSecret,
                        scope: 'all',
                        addTokenTo: 'header',
                    },
                });
                const authData = await response.data;
                authData.expires_date = Date.now() + response.data.expires_in;
                console.log('data: ', authData, Date.now());
                localStorage.setItem('tokenAuth2', JSON.stringify(authData));
            } catch (error) {
                console.log('Error: ', error);
            }
        },
    },
});
