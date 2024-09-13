<template>
  <v-container fluid fill-height>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="8"
        lg="6"
      >
        <v-card
          class="elevation-26"
          outlined
        >
          <v-card-title
            class="headline font-weight-bold"
            primary-title
          >
            Welcome to the Reservation System
          </v-card-title>
          <v-card-subtitle
            class="subheading mb-4"
          >
            Manage your reservations efficiently
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="primary"
              class="ma-2"
              :to="{ name: 'create-reservation' }"
            >
              Create Reservation
            </v-btn>
            <v-btn
              color="secondary"
              class="ma-2"
              :to="{ name: 'view-reservations' }"
            >
              View Reservations
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.v-card {
  border-radius: 12px;
  overflow: hidden;
}

.v-card-title {
  background-color: #f5f5f5;
  color: #333;
  border-bottom: 1px solid #ddd;
}

.v-card-subtitle {
  color: #666;
}

.v-btn {
  font-weight: 600;
}

.elevation-26 {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
