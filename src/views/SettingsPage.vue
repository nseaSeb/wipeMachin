<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Settings</ion-title>
                <ion-button slot="end" @click="store.saveDataToLocalStorage()" :disabled="!isModified">Save settings</ion-button>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Settings</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-card>
                <ion-card-header>
                    <ion-card-title color="primary">Auth2 Settings</ion-card-title>
                    <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
                </ion-card-header>
                <ion-card-content>
                    <ion-item>
                        <ion-label>Api Host :</ion-label>
                        <ion-input v-model="apiHost" @ionChange="isModified = true"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Authorization Host :</ion-label>
                        <ion-input v-model="auth" @ionChange="isModified = true"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Client id :</ion-label>
                        <ion-input v-model="clientID" @ionChange="isModified = true"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Client secret :</ion-label>
                        <ion-input v-model="clientSecret" @ionChange="isModified = true"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Token :</ion-label>
                        <ion-input v-model="token" @ionChange="isModified = true"></ion-input>
                    </ion-item>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonCardTitle,
    IonCardHeader,
    IonButton,
} from '@ionic/vue';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useSettingsStore } from '../stores/settingStore';
const store = useSettingsStore();
let isModified = ref(false);
const { apiHost, auth, clientID, clientSecret, token } = storeToRefs(store);
onMounted(() => {
    console.log('onMounted settingsPage');
    store.openFromLocalStorage();
});
</script>
