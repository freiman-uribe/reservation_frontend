<template>
    <v-container fluid>
      <v-card>
        <v-toolbar
          flat
          color="primary"
          dark
        >
          <v-btn
            @click="$router.push({ name: 'HomeView' })"
            icon
            dark
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-toolbar-title class="headline">Reservations</v-toolbar-title>
        </v-toolbar>
  
        <v-data-table
          :headers="headers"
          :items="reservations"
          item-key="_id"
          class="elevation-1"
        >
          <!-- Custom actions column -->
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn
              @click="editReservation(item._id)"
              class="ma-2"
              color="primary"
              outlined
            >
              Edit
            </v-btn>
            <v-btn
              @click="deleteReservation(item._id)"
              class="ma-2"
              color="red"
              outlined
            >
              Delete
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        reservations: [],
        headers: [
          { text: 'Date', value: 'date' },
          { text: 'Customer', value: 'customer' },
          { text: 'Service', value: 'service' },
          { text: 'Actions', value: 'actions', sortable: false }
        ]
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:5000/api/reservations');
        this.reservations = response.data;
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    },
    methods: {
      editReservation(id) {
        this.$router.push({ name: 'edit-reservation', params: { id } });
      },
      async deleteReservation(id) {
        try {
          await axios.delete(`http://localhost:5000/api/reservations/${id}`);
          this.reservations = this.reservations.filter(res => res._id !== id);
        } catch (error) {
          console.error('Error deleting reservation:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .v-card {
    margin-top: 20px;
  }
  
  .v-toolbar {
    border-bottom: 1px solid #e0e0e0;
  }
  
  .v-data-table {
    border-radius: 8px;
    overflow: hidden;
    margin-top: 20px;
  }
  
  .elevation-1 {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .v-btn {
    font-weight: 500;
  }
  
  .v-btn.outlined {
    border-width: 1px;
  }
  </style>
  