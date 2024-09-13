<template>
    <v-container fluid>
      <v-card>
        <v-toolbar flat color="primary" dark>
          <v-btn @click="$router.push({ name: 'HomeView' })" icon dark>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-toolbar-title class="headline">Edit Reservation</v-toolbar-title>
        </v-toolbar>
  
        <v-form ref="form" @submit.prevent="updateReservation" class="pa-4">
          <v-text-field
            v-model="reservation.date"
            label="Date"
            type="date"
            required
            class="my-2"
          ></v-text-field>
          <v-text-field
            v-model="reservation.customer"
            label="Customer Name"
            required
            class="my-2"
          ></v-text-field>
          <v-text-field
            v-model="reservation.service"
            label="Service"
            required
            class="my-2"
          ></v-text-field>
          <v-btn color="primary" type="submit" class="mt-4">
            Update Reservation
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        reservation: {
          date: '',
          customer: '',
          service: ''
        },
        error: ''  // To handle errors
      };
    },
    async created() {
      const id = this.$route.params.id;
      if (!id) {
        console.error('No ID provided in route params');
        return;
      }
      console.log('Fetching reservation with ID:', id); // Debugging
      try {
        const response = await axios.get(`http://localhost:5000/api/reservations/${id}`);
        console.log('Reservation data:', response.data); // Debugging
        
        // Format the date to YYYY-MM-DD
        const reservation = response.data;
        if (reservation.date) {
          reservation.date = new Date(reservation.date).toISOString().split('T')[0];
        }
  
        this.reservation = reservation;
      } catch (error) {
        console.error('Error fetching reservation:', error.response ? error.response.data : error.message);
        this.error = 'Error fetching reservation. Please check the console for details.';
      }
    },
    methods: {
      async updateReservation() {
        const id = this.$route.params.id;
        if (!id) {
          console.error('No ID provided in route params');
          return;
        }
        try {
          await axios.put(`http://localhost:5000/api/reservations/${id}`, this.reservation);
          this.$router.push({ name: 'view-reservations' });
        } catch (error) {
          console.error('Error updating reservation:', error.response ? error.response.data : error.message);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .v-card {
    margin-top: 20px;
  }
  
  .v-toolbar {
    border-bottom: 1px solid #e0e0e0;
  }
  
  .v-form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .v-text-field {
    margin-bottom: 16px;
  }
  
  .v-btn {
    font-weight: 500;
  }
  </style>
  