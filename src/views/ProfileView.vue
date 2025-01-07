<script setup lang="ts">
import { computed } from 'vue'

const profile = {
  name: 'Nayeli',
  lastName: 'Contreras',
  mothersLastName: '',
  email: 'naycont@icloud.com',
  role: 'Fullstack developer',
  location: {
    name: 'Puebla, México',
    flag: '',
  },
  description:
    'Software Developer with 7+ years of professional experience, developing, enhancing, and maintaining robust web applications, able to translate company and customer needs into functional and interactive applications.',
  links: [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      image: '',
      url: 'https://www.linkedin.com/in/naycont',
    },
    {
      id: 'github',
      name: 'Github',
      url: 'https://github.com/naycont',
    },
  ],
  resume: '',
  technologies: ['Javascript', 'Vue', 'React', 'PHP', 'AWS'],
}

const fullName = computed(() => {
  return `${profile.name} ${profile.lastName}`
})

const hasTechnologies = computed(() => {
  return Boolean(profile?.technologies.length)
})

const hasLinks = computed(() => {
  return Boolean(profile?.links.length)
})

const profileLinks = computed(() => {
  return profile.links.filter((link) => link.id === 'github')
})
</script>

<template>
  <div class="profile d-flex align-center justify-center flex-column">
    <div class="profile__content text-center">
      <div class="text-h3">{{ fullName }}</div>
      <div class="text-h5">{{ profile.role }}</div>
      <div class="text-subtitle-1">{{ profile.location.name }}</div>
    </div>

    <p class="profile__content text-body-1 text-center">
      {{ profile.description }}
    </p>

    <div class="profile__content" v-if="hasTechnologies">
      <v-chip class="mr-1" v-for="(tech, index) in profile.technologies" :key="`tech-${index}`">
        {{ tech }}
      </v-chip>
    </div>

    <div class="profile__content profile__content--links" v-if="hasLinks">
      <div class="ml-2" v-for="link in profileLinks" :key="link.id">
        <a target="_blank" :href="link.url">{{ link.name }}</a>
      </div>
    </div>

    <div class="profile__content">Donwload resume</div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  height: 100%;
  &__content {
    margin-top: var(--ui-padding);
    &--links {
      display: flex;
    }
  }
}
</style>
