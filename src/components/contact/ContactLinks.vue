
<script setup lang="ts">
const email: string = 'naycont@icloud.com'
const links = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    type: 'link',
    image:
      'https://portfolio-app-files.s3.ca-central-1.amazonaws.com/LI-In-Bug.png?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aDGNhLWNlbnRyYWwtMSJHMEUCIQCYW2Mi71uyZUBeZW1Zxgt8EMSyfl4a6EnRkzrv3Wn1VwIgVEbv%2FCwtHmeq%2FfklXeNLlgKZ8WuS8VCMZ%2BwEasjHhxgq3gMIZxAAGgw3MjQ3NzIwNTAxMDciDNKsWnlqyIKZcOT%2BiCq7A0cNeZsgNbUCPfvG6aNK%2FFdz%2BRyXQzX1hV08za%2FMBx797NdO12vLw7JFrTES33nMrs95yp84oIxZsSKrbV6iGw6jVywsV5r9knhphz2TC1dGM6z5GirltMd0M4WqPgWvM7nZO9B5VM6yHiT%2FSJzDFZzAElIllorb2vsAoyfRcOmvPNQFFFDULriMQBY0eRZii3%2BJVS2l3GNh2abIpwWNEtx4uLFBRVUESnH%2FT3LcOI5V%2FYf5rA1NzoLwkwYZ36iBJxiH%2BSbLf4cMR69cOr5C2gLmB5ZlaTBP1z3mzp6HZ7dTURR8oXL3AeyahYfrEYQL9lMy6x4ZAvoOmWnmml0HKd%2FnhcWacP1Ysl9j97JIQdbbVqbaPG4iSinc179eXexHGk59f1Kj5b%2BWRJsq41L4UsKUu%2BUvF4thWmrt7fMoEBEflAFxq7j9PB8HlUEWVhWa%2F%2BRhpm%2BYCAj6%2BVLs4t7BOKOputUTjbxXl%2BKWL6aZql5%2BA30m2tvAGtsWMb9B5ni%2BHlHqtuXryFLQuJqxTe8Q1bDQNFw9amniYSwi2mdMYYd64It3YJxviaTPAT2IdELMW6dbh8%2FeAaiZ0jGCMM2b9rsGOuQC9tPzi9n7sqe7vr6tkmzwkdFZdL6j%2B1g8gcG3yBfG5W714wMLytEfMxfKGGlx1x2esnxICi3T38YUjXc0Zer8BzRv1ubKmTTHKA6LXoVw%2BIsJUDsYgsEgBUZEyh%2BMkD7b8SVtpv5Z3scWS%2Bx02H6Ap0IHM3S8JUUPBoGrYPpcYlyy8O0hSeEd6rdL8wiSuwZO0WayLnDi00h1TVmW3x%2FfVr7RDJKEVWVlAEZHZFMuXVJIrMwsoBQLHn6fpYy%2BO8VDJ4jbJsbQ2Yj80tRpJCxZZFKYuKJwjM4FtqyO3uj0ZKV3txpYBkixLrqs%2BAFWtCdev7VACatq3vsYKkDYDZJcxHx6SvPcxknv7vWV5su0BmJPsdj8IoryImDcr4nd4Gpn3a8VMFhDOqbnAonInC70QayQc1e2fO%2BLitl0vxUcDsyLL3Q4xww4vNxfDIyIv5PIBbWndL7PTsCUKRQcjIKvCy49TlY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA2RP6H2S5S7GB4BV2%2F20250107%2Fca-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250107T215649Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=6a0fa200ecfa4cf67de1f7032865d70e924cc4909ee82f5236c009ee5af55cfe',
    url: 'https://www.linkedin.com/in/naycont',
  },
  {
    id: 'github',
    name: 'Github',
    type: 'link',
    image:
      'https://portfolio-app-files.s3.ca-central-1.amazonaws.com/github-mark.svg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aDGNhLWNlbnRyYWwtMSJHMEUCIQDnp5AQto0R8TnBQl1SXjZIM63C%2BwIsu5dt00kAqAFwrgIgJzO0gm2saD6fpeh1I%2F4Dx3OxMpwlivt%2FpY5t%2BxEuXEIq3gMIZxAAGgw3MjQ3NzIwNTAxMDciDIjpDiBvGbM6ghEApyq7AxX0ijmchPeNyinRlF8pdZSha8TF7v40koTCyyiYcbk7eIxvDhZ7IcfiwjHQFS%2F%2F%2Bj4KrW%2B2eQz3u%2FD%2B52wt06CdUcWq5A17Krn6QzAX5ZCH6FgeJZIpF8T4AgHhTIyr8R0cRxAL%2FiKelJJXivKjtzRzK4kulQOgOTNYCMTpqH1kgrkW3E6pD7z3RVkBIYEfLS8KNSAf%2Bl0iAYiSwUy%2F6NTsjbigMt69y3TbjMyIQjG1yxwPH420VNV3thuB%2Bw1MizDFyMYN%2FRHDC%2FLGzlAc1PXSG%2BFzYZDCWBz8P2w9Iw4%2BRO6pbGwO4qIx7Bw3vNiUMfHo2vijK18avO8N2AdFw9jCJWSoBB5vC52UQ4huuJpUvTjxyjEF%2B4ioDUFU2FhUd3Jeiklj8w5UunuugY%2FEFzkFov44PNbGjrDGySziJz%2B1koTj3YAzqk5PWEV9iG4v8hXg0r531lzGuypDiVd4Bk%2F%2BtcZ%2FLThwqGpBa419YUpzSbkgpm0J%2BbXhJ2CtYlmopGAit9u4AxP3ifD9nfbcT0Ls1mgJVdePOXCA%2FCrhNKcYQAyNCag8Dz6%2BW%2BuAezAZXPwUwf16eyb6mmcvMM2b9rsGOuQC6Eu8jBgGKAq%2F6yCipZntFJ5%2BRCP%2BLAE1R3X7UVyv5cGsirL82q1dHmt0rTMk7m8HPQNppJIKVrbWZpKqTFHb%2B3rxTGRmuSwYNUeo2F8MYT%2F92xHTeB1W9liTkJc8%2FClCxwXSHp%2Bh8h1oX0TY1yjw8m6ucRQ88vPpT11aLCuir7o3KcU95GpSwJoYfooQzNpabU7VN5Uo7ET9XaT%2BgbUe2UuJKB5B5zxiWVqfoUSmLkzoBxvnQ246VZRGR5ILp9f5oRqYU%2FglsuSC1L213Q0%2B3k0ADi6h9A4K5rNr%2B2knJ9h1U03saDanRvOuFtL6qRLSgbE%2FCqyXdUXTJFnEHmkblTW%2BZwZnbUc2Kvy%2Fhiq9%2FXj2arUC5MuxOo%2FhAH92aIseo36DTwYPQqR1gmcPaJaYY8axgh8L5e8Y2A%2BzXImY2OaeEosXGkcApMizqEYFFlqB6cWtaRBFK9fHpwoj%2F6BSuWlqApw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA2RP6H2S55HCJJCS3%2F20250107%2Fca-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250107T212610Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=93d38154231bcbac07d41b531d07fbf83f0f5b45de2d457282921007940dd701',
    url: 'https://github.com/naycont',
  },
]
</script>


<template>
  <div>
  <div class="text-h6"><v-icon icon="email"></v-icon> {{ email }}</div>
    <div class="d-flex justify-center my-4">
      <a class="mr-2" target="_blank" :href="link.url" v-for="link in links" :key="link.id">
        <img :src="link.image" height="50px" width="auto" />
      </a>
  </div>
</div>
</template>

