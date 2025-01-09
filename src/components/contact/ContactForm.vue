<template>
<v-form class="mt-4">
  <div class="text-h5 mb-2">{{ $t('contact.title') }}</div>
  <v-text-field :label="$t('global.form.name')" required variant="underlined"></v-text-field>

  <v-text-field :label="$t('global.form.email')" required variant="underlined"></v-text-field>

  <v-textarea :label="$t('global.form.message')" required variant="underlined"></v-textarea>
  <div class="d-flex justify-end">
    <v-btn class="mt-2" color="primary" type="submit"> {{ $t('global.submit') }} </v-btn>
  </div>
</v-form>
</template>
