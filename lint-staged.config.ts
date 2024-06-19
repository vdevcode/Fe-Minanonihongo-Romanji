module.exports = {
  '**/*.(ts|js|vue)': (filenames) => [
    `npx eslint ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  '**/*.(md|json)': (filenames) => `npx prettier --write ${filenames.join(' ')}`,
}
