<template>
    <ion-item-sliding>
        <div class="row-with-checkbox">
            <div style="align-self: center">
                <ion-checkbox slot="start" :checked="props.dataSelected" @ionChange="emit('onCheck', $event.target.value)"></ion-checkbox>
            </div>

            <slot></slot>
        </div>
    </ion-item-sliding>
</template>

<script setup lang="ts">
import { onMounted, defineProps, defineEmits } from 'vue';
import { IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonCheckbox, IonLabel, IonBadge } from '@ionic/vue';
const props = defineProps({
    dataSelected: { type: Boolean, default: false },
    lenData: { type: Number, default: 0 },
});
const emit = defineEmits<{
    (e: 'onCheck', checked: boolean): void;
}>();
onMounted(() => {
    console.log('onMounted component', props.dataSelected);
});
</script>

<style scoped>
#container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
}

#container a {
    text-decoration: none;
}
</style>
