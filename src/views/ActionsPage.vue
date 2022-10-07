<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Actions</ion-title>
                <ion-button slot="end" @click="store.fetchDatas()">Request</ion-button>
                <ion-button color="success" slot="end">Send</ion-button>
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
                    <ItemEntry :dataSelected="contactSelected" :lenData="contacts.length" @on-check="onCheck">
                        <ion-item @click.stop.prevent="log('item clic')" style="width: 100%">
                            <ion-label @click.stop="log('label clic')">Contacts</ion-label>
                            <ion-badge>{{ contacts.length }}</ion-badge>
                            <ion-badge color="success">0</ion-badge>
                        </ion-item>
                        <ion-item-options>
                            <ion-item-option
                                color="danger"
                                @click="
                                    store.contacts = [];
                                    store.saveDataToLocalStorage();
                                "
                                >Delete</ion-item-option
                            >
                        </ion-item-options>
                    </ItemEntry>
                    <ion-item-sliding>
                        <div class="row-with-checkbox">
                            <div style="align-self: center">
                                <ion-checkbox slot="start" v-model="contactSelected" @click.stop="log('check clic')"></ion-checkbox>
                            </div>
                            <ion-item @click.stop.prevent="log('item clic')" style="width: 100%">
                                <ion-label @click.stop="log('label clic')">Contacts</ion-label>
                                <ion-badge>{{ contacts.length }}</ion-badge>
                                <ion-badge color="success">0</ion-badge>
                            </ion-item>
                        </div>
                        <ion-item-options>
                            <ion-item-option
                                color="danger"
                                @click="
                                    store.contacts = [];
                                    store.saveDataToLocalStorage();
                                "
                                >Delete</ion-item-option
                            >
                        </ion-item-options>
                    </ion-item-sliding>
                    <ion-item disabled>
                        <ion-checkbox slot="start"></ion-checkbox>
                        <ion-label>Devis</ion-label>
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useDataStore } from '../stores/dataStore';
import {
    IonPage,
    IonHeader,
    IonItemSliding,
    IonList,
    IonItemOptions,
    IonItemOption,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonCheckbox,
    IonLabel,
    IonButton,
    IonBadge,
} from '@ionic/vue';
import ItemEntry from '../components/itemEntry.vue';
const store = useDataStore();
const { contacts, contactSelected } = storeToRefs(store);
onMounted(() => {
    console.log('onMounted actionsPage');
    store.openFromLocalStorage();
});
function onCheck(checked: boolean) {
    console.log('onCheck', checked);
    contactSelected.value = !contactSelected.value;
}
const log = (msg: string) => {
    console.log('event', msg);
};
</script>
