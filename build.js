'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'classic'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Vignesh Elangovan'),
  work: chalk.white('Software Enginner at ThiDiff Technologies'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyanBright('dev__vignesh'),
  github: chalk.gray('https://github.com/') + chalk.magenta('dev-vignesh'),
  linkedin: chalk.gray('https://www.linkedin.com/in/') + chalk.red('dev-vignesh'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelCard: chalk.white.bold('       Card:'),
  npx: chalk.red('npx') + ' ' + chalk.white('codeinfinite'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard} ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name 
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               newline + // Add one whole blank line
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + newline +// data.labelLinkedIn + data.linkedin
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
