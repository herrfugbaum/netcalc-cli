module.exports = {

  ip4ToBinary: function (ip4, format) {
    var ip4Octets = this.ip4Octets(ip4),
        binaryOctets = ip4Octets.map(function (oct) {
      var octInt = parseInt(oct, 10)
      return octInt.toString(2)
    })

    return (format === 'string') ? binaryOctets.join('') : binaryOctets
  },

  cidrToBinaryBitmask: function (cidr, format) {
    const bits = 32
    var bitmask = '11111111111111111111111111111111',
        bitsToExchange = bits - cidr,
        exchange = bitmask.substr(-bitsToExchange),
        keptPart = bitmask.substr(0, cidr),
        binMask = keptPart + exchange.replace(/1/g, '0'),
        binMaskArr = binMask.match(/.{8}|.{1,2}/g)

    return (format === 'string') ? binMask : binMaskArr
  },

  calculateIp4Range: function (ip, cidr) {
    var ipOctets = this.ip4Octets(ip),
        binCidr = this.cidrToBinaryBitmask(cidr, 'array'),
        netmask = this.binaryBitmaskToNetmask(binCidr, ''),
        notNetmask = this.binaryBitmaskToNetmask(binCidr, 'reversed'),
        minRange = [],
        maxRange = []

    for (var i = 0; i < 4; i++) {
      minRange[i] = ipOctets[i] & netmask[i]
      maxRange[i] = ipOctets[i] | notNetmask[i]
    }

    return [minRange.join('.'), maxRange.join('.')]
  },

  getIp4InnerRange: function (minMax) {
    var minOcts = this.ip4Octets(minMax[0]),
        maxOcts = this.ip4Octets(minMax[1]),
        ranges = [],
        temp = []

    minOcts.forEach(function (item, i, array) {
      if (item !== maxOcts[i]) { // if there is a difference between min and max oct ...
        for (var x = item; x <= maxOcts[i]; x++) { // ... count the difference
          temp.push(x) // push into a temporary array
        }
      }
      ranges.push(temp) // push the temporary array into bounding array
      temp = [] // reset temp
    })

    var a = (ranges[0].length > 0) ? ranges[0] : [minOcts[0]],
        b = (ranges[1].length > 0) ? ranges[1] : [minOcts[1]],
        c = (ranges[2].length > 0) ? ranges[2] : [minOcts[2]],
        d = (ranges[3].length > 0) ? ranges[3] : [minOcts[3]],
        ips = []

    d.forEach(function (dItem) {
      c.forEach(function (cItem) {
        b.forEach(function (bItem) {
          a.forEach(function (aItem) {
            ips.push(aItem + '.' + bItem + '.' + cItem + '.' + dItem)
          })
        })
      })
    })

    return ips
  },

  binaryBitmaskToNetmask: function (binmask, reversed) {
    var netArr = []

    binmask.map(function (x, i) {
      netArr[i] = parseInt(x, 2)
    })

    if (reversed === 'reversed') {
      netArr = binmask
      var rev = netArr.join('').match(/.{1}|.{1,2}/g),
          reverted = []

      rev.map(function (x, i) {
          reverted[i] = 1 - x
        })

      var joined = reverted.join(''),
          matched = joined.match(/.{8}|.{1,2}/g)

      matched.map(function (x, i) {
          reverted[i] = parseInt(x, 2)
        })
    }

    return (reversed !== 'reversed') ? netArr : reverted
  },

  ip4Octets: function (ip) {
    var ipOcts = [],
        octets = ip.split('.', 4)

    octets.map(function (x, i) {
      ipOcts[i] = parseInt(x, 10)
    })

    return ipOcts
  }

}
