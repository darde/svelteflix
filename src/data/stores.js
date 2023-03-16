import { Readable } from 'svelte/store'

export const site = Readable({
  title: 'Block Busters',
  description: 'Movies, Popular',
  url: import.meta.env.CLIENT_URL
})