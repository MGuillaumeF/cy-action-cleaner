import { defineConfig } from 'cypress'

export default defineConfig({
  supportFile : false,
  e2e: {
    baseUrl: 'https://github.com/MGuillaumeF'
  }
})
