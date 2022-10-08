import { defineStore } from 'pinia';
import { getData, postData } from '../services/infra';
import { useSettingsStore } from '../stores/settingStore';
const storeSettings = useSettingsStore();
export const useDataStore = defineStore('data', {
    state: () => ({
        contacts: {
            data: [] as any[],
            isSelected: false,
            url: '/v2/contacts',
        },
        individuals: {
            data: [] as any[],
            isSelected: false,
            url: '/v2/individuals',
        },
        taxes: {
            data: [] as any[],
            isSelected: false,
            url: '/v2/taxes',
        },
        publicPostUrl: 'https://en1srqgc95v66h.x.pipedream.net/',
    }),
    actions: {
        saveDataToLocalStorage() {
            localStorage.setItem('contacts', JSON.stringify(this.contacts));
            localStorage.setItem('individuals', JSON.stringify(this.individuals));
            localStorage.setItem('taxes', JSON.stringify(this.taxes));
        },
        openFromLocalStorage() {
            if (localStorage.getItem('contacts')) {
                this.contacts.data = JSON.parse(localStorage.getItem('contacts') as string);
                console.log('open contacts', this.contacts);
            }
            if (localStorage.getItem('individuals')) {
                this.individuals.data = JSON.parse(localStorage.getItem('individuals') as string);
                console.log('open individuals', this.individuals);
            }
            if (localStorage.getItem('taxes')) {
                this.taxes.data = JSON.parse(localStorage.getItem('taxes') as string);
                console.log('open taxes', this.taxes);
            }
        },
        async fetchDatas() {
            console.log('fetchDatas');
            storeSettings.chechAuth2Token();
            if (this.contacts.isSelected) {
                await this.fetchContacts();
            }
            if (this.individuals.isSelected) {
                await this.fetchIndividuals();
            }
            if (this.taxes.isSelected) {
                await this.fetchTaxes();
            }
        },
        toggleContactsChecked() {
            this.contacts.isSelected = !this.contacts.isSelected;
        },
        toggleIndividualsChecked() {
            this.individuals.isSelected = !this.individuals.isSelected;
        },
        toggleTaxesChecked() {
            this.taxes.isSelected = !this.taxes.isSelected;
        },

        fetchContacts() {
            getData(`${this.contacts.url}?limit=100`).then((response) => {
                this.contacts.data = response.data.data;
                localStorage.setItem('contacts', JSON.stringify(this.contacts));
                console.log('response', response.data);
            });
        },
        fetchIndividuals() {
            getData(`${this.individuals.url}?limit=100`).then((response) => {
                this.individuals.data = response.data.data;
                localStorage.setItem('individuals', JSON.stringify(this.individuals));
                console.log('response', response.data);
            });
        },
        fetchTaxes() {
            getData(`${this.taxes.url}?limit=100`).then((response) => {
                this.taxes.data = response.data.data;
                localStorage.setItem('taxes', JSON.stringify(this.taxes));
                console.log('response', response.data);
            });
        },
        sendDatas() {
            if (this.contacts.isSelected) {
                this.sendToPublicUrl(this.contacts.data);
            }
            if (this.individuals.isSelected) {
                this.sendToPublicUrl(this.contacts.data);
            }
            if (this.taxes.isSelected) {
                this.sendToPublicUrl(this.taxes.data);
            }
        },
        sendToPublicUrl(data: any[]) {
            if (localStorage.getItem('publicPostUrl')) {
                this.publicPostUrl = localStorage.getItem('publicPostUrl') as string;
                postData(data, this.publicPostUrl)
                    .then((response: any) => {
                        console.log('send response', response);
                    })
                    .catch((error: any) => {
                        console.log('send error', error);
                    });
            }
        },
    },
});
