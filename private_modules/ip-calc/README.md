<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [/24](#24)
  - [Base IP 192.168.150.32](#base-ip-19216815032)
    - [Network](#network)
    - [Broadcast](#broadcast)
- [/20](#20)
  - [Base IP 192.168.150.32](#base-ip-19216815032-1)
    - [Network](#network-1)
    - [Broadcast](#broadcast-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### /24

#### Base IP 192.168.150.32

##### Network

/          | Octet I     | Octet II    | Octet III   | Octet IV
-----------| ----------- | ----------- | ----------- | -----------
IP         | 1100 0000   | 1010 1000   | 1001 0110   | 0010 0000
Mask       | 1111 1111   | 1111 1111   | 1111 1111   | 0000 0000
AND        | 1100 0000   | 1010 1000   | 1001 0110   | 0000 0000
Base 10    | 192         | 168         | 150         | 0

##### Broadcast

/          | Octet I     | Octet II    | Octet III   | Octet IV
-----------| ----------- | ----------- | ----------- | -----------
IP         | 1100 0000   | 1010 1000   | 1001 0110   | 0010 0000
Mask       | 0000 0000   | 0000 0000   | 0000 0000   | 1111 1111
OR         | 1100 0000   | 1010 1000   | 1001 0110   | 1111 1111
Base 10    | 192         | 168         | 150         | 255

** NOT operation before OR operation is already (manually) applied **


### /20

#### Base IP 192.168.150.32

##### Network

/          | Octet I     | Octet II    | Octet III   | Octet IV
-----------| ----------- | ----------- | ----------- | -----------
IP         | 1100 0000   | 1010 1000   | 1001 0110   | 0010 0000
Mask       | 1111 1111   | 1111 1111   | 1111 0000   | 0000 0000
AND        | 1100 0000   | 1010 1000   | 1001 0000   | 0000 0000
Base 10    | 192         | 168         | 144         | 0

##### Broadcast

/          | Octet I     | Octet II    | Octet III   | Octet IV
-----------| ----------- | ----------- | ----------- | -----------
IP         | 1100 0000   | 1010 1000   | 1001 0110   | 0010 0000
Mask       | 0000 0000   | 0000 0000   | 0000 1111   | 1111 1111
OR         | 1100 0000   | 1010 1000   | 1001 1111   | 1111 1111
Base 10    | 192         | 168         | 159         | 255

** NOT operation before OR operation is already (manually) applied **