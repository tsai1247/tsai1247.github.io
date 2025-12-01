<template>
  <v-app id="app" 
    :style="{
      backgroundImage: `url(${themeUrl})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }"
  >
      <v-btn icon class="ma-2" size="small"
        @click="switchTheme"
      >
        <v-icon size="x-large"
          :icon="islight ? `mdi-weather-sunny` : `mdi-weather-night`"
        />
      </v-btn>
      <router-view />
  </v-app>
</template>

<script lang="ts" setup>
  import images from "@/common/images";
  const assetsImages = images.assetsImages;

  const defaulttheme = localStorage.getItem("isThemelight") === "true";
  const islight = ref(defaulttheme);

  function switchTheme() {
    islight.value = !islight.value;
    localStorage.setItem("isThemelight", islight.value);
  }

  const themeUrl = computed(() => {
    if(islight.value) {
      return assetsImages.light;
    }
    return assetsImages.dark;
  });
</script>

<style >
#app {
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  position: relative;
}
</style>