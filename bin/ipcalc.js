#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander'),
    ipCalc = require('ip-calc')

program
  .version('0.0.1')
  .usage('[thing(s) to convert] [options]')
  .option('-2, --ip-to-binary', 'Convert IPv4 to binary.')
  .option('-r, --range', 'Get min (network) and max (broadcast) by IPv4 and CIDR.')
  .option('-i, --inner-range', 'Get full range by passing min and max IPv4 address.')
  .option('-c, --cidr-to-netmask', 'Convert CIDR to netmask.')
  .parse(process.argv)

if (!program.args.length) {
  program.help()
} else {

  if (program.ipToBinary) {
    var ipv4 = program.args[0]
    console.log(ipCalc.ip4ToBinary(ipv4, ''))
  }

  if (program.range) {
    var ipv4 = program.args[0],
        cidr = program.args[1]

    console.log(ipCalc.calculateIp4Range(ipv4, cidr))
  }

  if (program.innerRange) {
    var min = program.args[0],
        max = program.args[1],
        minMax = [min, max]
    console.log(ipCalc.getIp4InnerRange(minMax))
  }

  if (program.cidrToNetmask) {
    var cidr = program.args[0],
        binmask = ipCalc.cidrToBinaryBitmask(cidr, '')
    console.log(ipCalc.binaryBitmaskToNetmask(binmask, ''))
  }

}
