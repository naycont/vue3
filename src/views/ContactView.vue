<script setup lang="ts">
const email = 'naycont@icloud.com'
</script>
<template>
  <div class="d-flex justify-center flex-column">
    <div>
      <div class="text-subtitle-1">
        <v-icon class="mr-2">mail</v-icon>
        <a target="_blank" :href="`mailto:${email}`">{{ email }}</a>
      </div>
    </div>
    <v-form>
      Have a question or want to say hello?
      <v-text-field label="Name" required></v-text-field>

      <v-text-field label="Email" required></v-text-field>

      <v-textarea label="Message" required></v-textarea>
      <v-btn class="mt-2" type="submit">Submit</v-btn>
    </v-form>
  </div>
</template>
