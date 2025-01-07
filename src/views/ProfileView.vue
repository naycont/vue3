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
    flag: 'https://portfolio-app-files.s3.ca-central-1.amazonaws.com/mexico_flag.svg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aDGNhLWNlbnRyYWwtMSJHMEUCIQCxXexMRkFJmR%2F8E4CSD96MzNkPlRXqE5rJkLCeds9RoQIgAeQjLLjwu80c%2BZr%2B%2BKiY89OujjuYs2ZS9G4UqIO0woUq3gMIZhAAGgw3MjQ3NzIwNTAxMDciDJar%2B22Z2y2f0Cb8qyq7A1PLy8zSM11xYRVlGII556oQi1MzwOowomoHAvouqLwaJUt1XiHhcZxndB0qgsrf%2FPZt2G3iuRHDcbVC%2FM2MJLH40oy%2F2H5D6OkgmkqPDH1K0c9qeDz7CpKEWMHUvbTf4T3jl%2FN4FeoeO7PORYW7uyiLw4InluLGmxrYcdpQLUFTdI%2BtKD7Y89ZkVtBqfLSFu46fOiR0C2VoyP7btFjsNx0scLzN8n7NL5wXj5HpEDlT%2BNCUwjy12QYjOCgfX6%2Bu%2BhyOC7IGHXqdYaoxr4G5VG8HSA5SDdyspgS4W2Mv9ntVkLyFhVs9VpBjkcNcBhApPrUDGVgG6XV1lFgoq0T6h5KEL1LTbc8CT7QMU7mGANBwvEKyshwXnNpP8WZINF0YJkXib3rQEJ5RU%2BhkWJpk%2F7hWi6v61Aa1ENmcUSFX4559qzRj1GOt0AdAJwftYpw3V6XADyqYEF0aeckB2C2kECpPQO%2FA9RDyickVN12bQm6vyJSfrnY2WKt5b9oUL94v2JlMRB%2Bm8LbthTyRX7IVvzWkX%2FTWyfS%2B6dVEQNFNrCwrxBgF7MBfXpS9G9qCyUU3MTE1kxLa2%2BXwwEt%2FMM2b9rsGOuQCxzvmPfk41xyUYfUZjzUOYu4eurWz3lRlK3FL3ybs0IOLI8vZ1cqEeYC7XoyW%2F80bxWdRxwoHnjQltlE2NwV6xx5hGIpQgECOQB3ibV5q7tjLZBeJWQ6L80U5R3mei%2B%2FPNKOSUHuPhVPNYkrtsTFX4Q3KAU6CES6InloodX%2BeVTdLFUtTz38QQC9QN4O%2B3MTwm5ZoJm0%2FG%2FTM8LrKy3SiIP2xMXDAiBYWyeEAB13GpLkUfIpoObKReyjXECzlosCzo%2Fy%2FwR%2BjFk%2B35%2BxzzNAWR8rPZeQQeX7KOVPIktdlgkhGSrjF%2FP%2Fq55IjmaHyyb8zDS5eC2xzWp1zd8sfV97mc%2BfsT4T63zpDfP7SQn%2FufVTEboyH3jlSJMo7k9QflBnnzmILXtwPeEefBAyOQgQDmhgx61qhKEjkXhEJI1ofSuPfrBQwwtHB0xwd4mPFEiNSE3qB6rMoE%2BUzoorBSeRWvsYptLY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA2RP6H2S5SWVEI5Z2%2F20250107%2Fca-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250107T211525Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=6d54c933c084c789328d59d8757b72a8d11e55b99ae53f37b795011ae36c0e97',
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
      image:
        'https://portfolio-app-files.s3.ca-central-1.amazonaws.com/github-mark.svg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aDGNhLWNlbnRyYWwtMSJHMEUCIQDnp5AQto0R8TnBQl1SXjZIM63C%2BwIsu5dt00kAqAFwrgIgJzO0gm2saD6fpeh1I%2F4Dx3OxMpwlivt%2FpY5t%2BxEuXEIq3gMIZxAAGgw3MjQ3NzIwNTAxMDciDIjpDiBvGbM6ghEApyq7AxX0ijmchPeNyinRlF8pdZSha8TF7v40koTCyyiYcbk7eIxvDhZ7IcfiwjHQFS%2F%2F%2Bj4KrW%2B2eQz3u%2FD%2B52wt06CdUcWq5A17Krn6QzAX5ZCH6FgeJZIpF8T4AgHhTIyr8R0cRxAL%2FiKelJJXivKjtzRzK4kulQOgOTNYCMTpqH1kgrkW3E6pD7z3RVkBIYEfLS8KNSAf%2Bl0iAYiSwUy%2F6NTsjbigMt69y3TbjMyIQjG1yxwPH420VNV3thuB%2Bw1MizDFyMYN%2FRHDC%2FLGzlAc1PXSG%2BFzYZDCWBz8P2w9Iw4%2BRO6pbGwO4qIx7Bw3vNiUMfHo2vijK18avO8N2AdFw9jCJWSoBB5vC52UQ4huuJpUvTjxyjEF%2B4ioDUFU2FhUd3Jeiklj8w5UunuugY%2FEFzkFov44PNbGjrDGySziJz%2B1koTj3YAzqk5PWEV9iG4v8hXg0r531lzGuypDiVd4Bk%2F%2BtcZ%2FLThwqGpBa419YUpzSbkgpm0J%2BbXhJ2CtYlmopGAit9u4AxP3ifD9nfbcT0Ls1mgJVdePOXCA%2FCrhNKcYQAyNCag8Dz6%2BW%2BuAezAZXPwUwf16eyb6mmcvMM2b9rsGOuQC6Eu8jBgGKAq%2F6yCipZntFJ5%2BRCP%2BLAE1R3X7UVyv5cGsirL82q1dHmt0rTMk7m8HPQNppJIKVrbWZpKqTFHb%2B3rxTGRmuSwYNUeo2F8MYT%2F92xHTeB1W9liTkJc8%2FClCxwXSHp%2Bh8h1oX0TY1yjw8m6ucRQ88vPpT11aLCuir7o3KcU95GpSwJoYfooQzNpabU7VN5Uo7ET9XaT%2BgbUe2UuJKB5B5zxiWVqfoUSmLkzoBxvnQ246VZRGR5ILp9f5oRqYU%2FglsuSC1L213Q0%2B3k0ADi6h9A4K5rNr%2B2knJ9h1U03saDanRvOuFtL6qRLSgbE%2FCqyXdUXTJFnEHmkblTW%2BZwZnbUc2Kvy%2Fhiq9%2FXj2arUC5MuxOo%2FhAH92aIseo36DTwYPQqR1gmcPaJaYY8axgh8L5e8Y2A%2BzXImY2OaeEosXGkcApMizqEYFFlqB6cWtaRBFK9fHpwoj%2F6BSuWlqApw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA2RP6H2S55HCJJCS3%2F20250107%2Fca-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250107T212610Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=93d38154231bcbac07d41b531d07fbf83f0f5b45de2d457282921007940dd701',
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

const profileLinks = computed(() => {
  return profile.links.filter((link) => link.id === 'github')
})
</script>

<template>
  <div class="profile d-flex align-center justify-center flex-column">
    <div class="profile__content text-center">
      <div class="text-h3">{{ fullName }}</div>
      <div class="text-h5">{{ profile.role }}</div>
      <div class="d-flex align-center justify-center">
        <div class="text-subtitle-1 mr-1">
          {{ profile.location.name }}
        </div>
        <img :src="profile.location.flag" width="30px" height="auto" />
      </div>
    </div>

    <p class="profile__content text-body-1 text-center">
      {{ profile.description }}
    </p>

    <div class="profile__content" v-if="hasTechnologies">
      <v-chip class="mr-1" v-for="(tech, index) in profile.technologies" :key="`tech-${index}`">
        {{ tech }}
      </v-chip>
    </div>

    <div class="profile__content d-flex justify-center align-center">
      <!--
      <div v-for="link in profileLinks" :key="link.id">
        <a class="d-flex flex-column" target="_blank" :href="link.url">
          <img :src="link.image" height="50px" width="50px" />
          {{ link.name }}
        </a>
      </div>
      -->
      <div class="d-flex flex-column justify-center align-center">
        <v-btn height="50px" width="50px" color="primary" icon="download"></v-btn>
        <div class="text-subtitle-1 mt-1">Donwload resume</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  height: 100%;
  &__content {
    margin-top: var(--ui-padding);
  }
}
</style>
