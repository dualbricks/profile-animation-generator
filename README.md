# INTRODUCTION

# Changes

- added multiple text support. (seperated by `-`)

Usage: `curl https://time-five-reading.glitch.me/svg?text=Hello+World&fontStyle=VT323`

<picture align="center">
  <source media="(prefers-color-scheme: dark)" srcset="https://time-five-reading.glitch.me/svg?text=Hello+World&color=%23eeeee3&size=30&fontStyle=VT323 " />
  <source media="(prefers-color-scheme: light)" srcset="https://time-five-reading.glitch.me/svg?text=Hello+World&color=%2321130dsize=30&fontStyle=VT323 " />
  <img alt="title" src="https://time-five-reading.glitch.me/svg?text=Hello+World" />
</picture>

Currently supported queries:

- text `?text=${text}`
- width `?width=${width}`
- height `?height=${height}`
- color ` ?color=${hex}`
- speed `?speed=${time_in_seconds}`
- size `?size=${font_size}`
- fontStyle `?fontStyle=${fontStyle} `
