<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Reservation System</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view> <!-- Aquí se cargan las vistas basadas en el enrutador -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Puedes agregar estilos globales aquí si es necesario */
</style>
