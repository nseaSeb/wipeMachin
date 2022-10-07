<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Listing</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Listing</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-content :fullscreen="true" style="text-align: center">
                <div style="margin-top: 16px">
                    <ion-label> Wipe machin </ion-label>
                </div>
            </ion-content>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel } from '@ionic/vue';
</script>
