<script setup lang="ts">
import { ref } from 'vue'
import type { Node, Edge } from '@vue-flow/core'  
import { Position } from '@vue-flow/core'
import { VueFlow } from '@vue-flow/core'

const nodes = ref<Node[]>([
  {
    id: 'avatar',
    type: 'special', // <-- this is the custom node type name
    position: { x: 600, y: 200 },
    data: {
      label: 'Pork',
      background: 'avatar'
    },
  },
    {
    id: 'linkedIn',
    type: 'special', // <-- this is the custom node type name
    position: { x: 600, y: 400 },
    data: {
      label: 'Node 4',
      background: 'linkedIn',
      url: 'https://www.linkedin.com/in/wen-lung-tsai-357330209',
      position: Position.Top
    },
  },
])

// these are our edges
const edges = ref<Edge[]>([
  {
    id: 'e3->4',
    type: 'special',
    source: 'avatar',
    target: 'linkedIn',

    data: {
      text: 'my linkedin',
    }
  },
])
</script>

<template>
  <VueFlow :nodes="nodes" :edges="edges"
    :min-zoom="1" :max-zoom="1" :zoom-on-pinch="false" :zoom-on-double-click="false"
    :pan-on-drag="false"
  >
    <!-- bind your custom node type to a component by using slots, slot names are always `node-<type>` -->
    <template #node-special="specialNodeProps">
      <SpecialNode v-bind="specialNodeProps" />
    </template>

    <!-- bind your custom edge type to a component by using slots, slot names are always `edge-<type>` -->
    <template #edge-special="specialEdgeProps">
      <SpecialEdge v-bind="specialEdgeProps" />
    </template>
  </VueFlow>
</template>

<style>
/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';

</style>