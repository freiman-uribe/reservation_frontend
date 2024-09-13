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
          <v-toolbar-title class="headline">Create Reservation</v-toolbar-title>
        </v-toolbar>
  
        <v-form ref="form" @submit.prevent="createReservation" class="pa-4">
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
            Create Reservation
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
        }
      }
    },
    methods: {
      async createReservation() {
        try {
          await axios.post('http://localhost:5000/api/reservations', this.reservation);
          this.$router.push({ name: 'view-reservations' });
        } catch (error) {
          console.error('Error creating reservation:', error);
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
  