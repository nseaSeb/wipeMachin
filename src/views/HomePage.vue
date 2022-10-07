<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Home page</ion-title>
                <ion-item lines="none" slot="end">
                    <ion-label> Toggle Dark Theme </ion-label>
                    <ion-toggle id="themeToggle" slot="end" @ionChange="setTheme($event.target.checked)"></ion-toggle>
                </ion-item>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Home page</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-content :fullscreen="true" style="text-align: center">
                <div style="margin-top: 16px">
                    <ion-label> Wipe machin </ion-label>
                    <ul style="list-style: none; text-align: left">
                        <li>1/ Settings auth</li>
                        <li>2/ Request datas</li>
                        <li>3/ Wipe</li>
                        <li>4/ Send your datas</li>
                    </ul>
                </div>
                <explore-container name="test"></explore-container>
            </ion-content>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonToggle } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
function setTheme(value: boolean) {
    document.body.classList.toggle('dark', value);
    console.log('setTheme:', document.body.classList);
}
</script>
