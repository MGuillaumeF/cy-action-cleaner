import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile : false,
    baseUrl: 'https://github.com/MGuillaumeF'
  },
  env : {
    GITHUB_TOKEN : process.env.GITHUB_TOKEN
  }
})
