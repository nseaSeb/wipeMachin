<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home" href="/tabs/home">
                    <ion-icon :icon="home" />
                    <ion-label>Home</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="actions" href="/tabs/actions">
                    <ion-icon :icon="gitCompareOutline" />
                    <ion-label>Actions</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="settings" href="/tabs/settings">
                    <ion-icon :icon="cog" />
                    <ion-label>Settings</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { gitCompareOutline, cog, home } from 'ionicons/icons';

export default defineComponent({
    name: 'TabsPage',
    components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
    setup() {
        return {
            gitCompareOutline,
            cog,
            home,
        };
    },
});
</script>
