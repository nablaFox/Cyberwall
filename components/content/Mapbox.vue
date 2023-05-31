<template>
  <div class="h-[600px]">
    <ClientOnly>
      <MapboxMap
        map-id="mapbox-map"
        class="w-full h-full absolute"
        :options="{
          style: 'mapbox://styles/mapbox/dark-v11', // style URL
          center: [14.217360110902598, 42.46101548780798], // starting position
          zoom: 13 // starting zoom
        }"
      >
        <MapMarker 
          marker-id="marker1"
          :lnglat="[14.217360110902598, 42.46101548780798]"
        />
      </MapboxMap>
    </ClientOnly>
  </div>
</template>