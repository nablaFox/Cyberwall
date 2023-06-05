<script setup lang="ts">
function reloadPage() {
  const hasReloaded = sessionStorage.getItem('hasReloaded')
  if (!hasReloaded) {
    sessionStorage.setItem('hasReloaded', 'true')
    location.reload()
  } else {
    sessionStorage.removeItem('hasReloaded')
  }
}

onBeforeMount(reloadPage)
</script>

<template>
  <PageSection full-width class="mt-20">
    <ClientOnly>
      <MapboxMap
        map-id="mapbox-map"
        class="w-full h-full absolute"
        :options="{
          style: 'mapbox://styles/mapbox/dark-v11', // style URL
          center: [14.22489449306844, 42.45087015810003], // starting position
          zoom: 14 // starting zoom
        }"
      >
        <MapMarker 
          marker-id="marker1"
          :lnglat="[14.22489449306844, 42.45087015810003]"
        />
      </MapboxMap>
    </ClientOnly>
  </PageSection>
</template>

<style scoped>
:deep(.section-wrapper) {
  height: 600px;
}
</style>