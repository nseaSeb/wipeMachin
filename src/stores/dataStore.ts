import { defineStore } from 'pinia';
import { getContacts } from '../services/contacts';
export const useDataStore = defineStore('data', {
    state: () => ({
        contacts: [] as any[],
        contactSelected: false,
    }),
    actions: {
        saveDataToLocalStorage() {
            localStorage.setItem('contacts', JSON.stringify(this.contacts));
        },
        openFromLocalStorage() {
            console.log('openFromLocalStorage');
            if (localStorage.getItem('contacts')) {
                this.contacts = JSON.parse(localStorage.getItem('contacts') as string);
                console.log('open contacts', this.contacts);
            }
        },
        async fetchDatas() {
            if (this.contactSelected) {
                await this.fetchContacts();
            }
        },
        fetchContacts() {
            getContacts().then((response) => {
                this.contacts = response.data;
                localStorage.setItem('contacts', JSON.stringify(this.contacts));
                console.log('response', response.data);
            });
        },
    },
});
