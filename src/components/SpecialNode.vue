<script setup lang="ts">
import { computed, ref } from 'vue'
import { Position, Handle } from '@vue-flow/core'
import type { NodeProps } from '@vue-flow/core'
import images from "@/common/images";

const assetsImages = images.assetsImages;
const props = defineProps<NodeProps>()

const x = computed(() => `${Math.round(props.position.x)}px`)
const y = computed(() => `${Math.round(props.position.y)}px`)

function goto(url: string|undefined) {
  if(url == undefined) {
    return;
  }
  window.open(url, '_blank');
}
</script>

<template>
  <div class="pa-0 ma-0 process-node" @click=goto(data.url) :class="data.url ? `highlight-node` : ``">
    <v-img class="pa-0 ma-0 rounded-circle" :src="assetsImages[data.background]" />
  </div>
  <Handle type="source" :position="data.position ?? Position.Bottom" />
</template>

<style scoped>
.process-node {
  padding: 10px;
  border-radius: 99px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.highlight-node {
  cursor: pointer;
}

.highlight-node:hover {
  box-shadow: 0 0 0 2px rgba(190, 246, 59, 0.5);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 2px rgba(190, 246, 59, 0.5);
  }
  50% {
    box-shadow: 0 0 0 4px rgba(190, 246, 59, 0.8);
  }
}
</style>