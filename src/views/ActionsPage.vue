<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Actions</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="store.fetchDatas()">Request</ion-button>
                    <ion-button color="success" @click="store.sendDatas()">Send</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Actions</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content :fullscreen="true">
                <ion-list>
                    <ItemEntry
                        :dataSelected="contacts.isSelected"
                        :lenData="contacts.data.length"
                        @on-check="store.toggleContactsChecked"
                    >
                        <ion-item @click.stop.prevent="log('item clic')" style="width: 100%">
                            <ion-label @click.stop="log('label clic')">Contacts</ion-label>
                            <ion-badge>{{ contacts.data.length }}</ion-badge>
                            <ion-badge color="success">0</ion-badge>
                        </ion-item>
                        <ion-item-options>
                            <ion-item-option
                                color="danger"
                                @click="
                                    contacts.data = [];
                                    store.saveDataToLocalStorage();
                                "
                                >Delete</ion-item-option
                            >
                        </ion-item-options>
                    </ItemEntry>
                    <ItemEntry
                        :dataSelected="individuals.isSelected"
                        :lenData="individuals.data.length"
                        @on-check="store.toggleIndividualsChecked()"
                    >
                        <ion-item @click.stop.prevent="log('item clic')" style="width: 100%">
                            <ion-label @click.stop="log('label clic')">Individuals</ion-label>
                            <ion-badge>{{ individuals.data.length }}</ion-badge>
                            <ion-badge color="success">0</ion-badge>
                        </ion-item>
                        <ion-item-options>
                            <ion-item-option
                                color="danger"
                                @click="
                                    individuals.data = [];
                                    store.saveDataToLocalStorage();
                                "
                                >Delete</ion-item-option
                            >
                        </ion-item-options>
                    </ItemEntry>
                    <ItemEntry
                        :dataSelected="taxes.isSelected"
                        :lenData="contacts.data.length"
                        @on-check="store.toggleTaxesChecked"
                    >
                        <ion-item @click.stop.prevent="log('item clic')" style="width: 100%">
                            <ion-label @click.stop="log('label clic')">Taxes</ion-label>
                            <ion-badge>{{ taxes.data.length }}</ion-badge>
                            <ion-badge color="success">0</ion-badge>
                        </ion-item>
                        <ion-item-options>
                            <ion-item-option
                                color="danger"
                                @click="
                                    taxes.data = [];
                                    store.saveDataToLocalStorage();
                                "
                                >Delete</ion-item-option
                            >
                        </ion-item-options>
                    </ItemEntry>
                </ion-list>
            </ion-content>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useDataStore } from '../stores/dataStore';
import ItemEntry from '../components/itemEntry.vue';
import {
    IonPage,
    IonHeader,
    IonList,
    IonItemOptions,
    IonItemOption,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonButton,
    IonBadge,
    IonButtons,
} from '@ionic/vue';
const store = useDataStore();
const { contacts, individuals, taxes } = storeToRefs(store);
onMounted(() => {
    console.log('onMounted actionsPage');
    store.openFromLocalStorage();
});

const log = (msg: string) => {
    console.log('event', msg);
};
</script>
