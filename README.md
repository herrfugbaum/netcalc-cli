[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
- [How to use](#how-to-use)
    - [Some things to consider](#some-things-to-consider)
  - [Basics](#basics)
  - [IPv4 to binary](#ipv4-to-binary)
  - [Min and max address](#min-and-max-address)
  - [Range of a network](#range-of-a-network)
  - [CIDR to netmask](#cidr-to-netmask)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

*Note: You need node.js installed on your PC.*

```
npm install netcalc-cli -g
```

## How to use

In your commandline enter the one of the following options:

#### Some things to consider

* *When commiting strings use double quotes.*
* *>_ before the code shall symbolise your commandline input. Don't actually type these.*
* *// are comments don't type these either.*

### Basics

```
>_ netcalc // shows usage and options
>_ netcalc -h // shows usage and options
>_ netcalc --help // shows usage and options
>_ netcalc - V // show version of netcalc-cli
```

### IPv4 to binary

```
// Converts IPv4 to binary representation

>_ netcalc "192.168.150.1" -2
>_ netcalc "192.168.150.1" --ip-to-binary

// result ---> [ '11000000', '10101000', '10010110', '1' ]
```

### Min and max address

```
// Calculate min (network) and max (broadcast) by IPv4 and CIDR

>_ netcalc "192.168.150.1" 24 -r
>_ netcalc "192.168.150.1" 24 --range

// result ---> ['192.168.150.0', '192.168.150.255']
```

### Range of a network

```
// Calculates all IPv4s between and including the provided min and max addresses.

>_ netcalc "192.168.150.1" "192.168.150.254" -i
>_ netcalc "192.168.150.1" "192.168.150.254" --inner-range

// result ---> ['192.168.150.0', '192.168.150.1', '192.168.150.2', ..., '192.168.150.254', '192.168.150.255']
```

### CIDR to netmask

```
// Converts CIDR to netmask

>_ netcalc 24 -c
>_ netcalc 24 --cidr-to-netmask

// result---> [255, 255, 255, 0]
```