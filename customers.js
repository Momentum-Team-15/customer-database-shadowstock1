const customers = [
  {
    name: {
      title: 'dr',
      first: 'sophia',
      last: 'burns'
    },
    location: {
      street: {
        number: 4339,
        name: 'Green Rd'
      },
      city: 'Great Falls',
      state: 'Alabama',
      country: 'United States',
      postcode: 66032,
      coordinates: {
        latitude: '11.2090',
        longitude: '139.7209'
      },
      timezone: {
        offset: '-3:00',
        description: 'Brazil, Buenos Aires, Georgetown'
      }
    },
    email: 'sophia.burns@example.com',
    dob: {
      date: '1990-07-28T13:05:47.042Z',
      age: 30
    },
    registered: {
      date: '2012-03-09T06:54:45.213Z',
      age: 8
    },
    phone: '(003)-035-5758',
    cell: '(748)-746-0429',
    id: {
      name: 'SSN',
      value: '485-07-4516'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/62.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/62.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/62.jpg'
    },
    nat: 'US'
  },
  {
    name: {
      title: 'mx',
      first: 'krin',
      last: 'oliver'
    },
    location: {
      street: {
        number: 9294,
        name: 'Stevens Creek Blvd'
      },
      city: 'Hampton',
      state: 'Nevada',
      country: 'United States',
      postcode: 48932,
      coordinates: {
        latitude: '38.5471',
        longitude: '1.3862'
      },
      timezone: {
        offset: '-6:00',
        description: 'Central Time (US & Canada), Mexico City'
      }
    },
    email: 'krin.oliver@example.com',
    dob: {
      date: '1965-07-23T03:05:38.179Z',
      age: 55
    },
    registered: {
      date: '2011-07-28T13:16:48.281Z',
      age: 9
    },
    phone: '(470)-844-7246',
    cell: '(845)-543-8884',
    id: {
      name: 'SSN',
      value: '289-72-0803'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/54.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/54.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/54.jpg'
    },
    nat: 'US'
  },
  {
    name: {
      title: 'ms',
      first: 'letitia',
      last: 'perry'
    },
    location: {
      street: {
        number: 8895,
        name: 'Thornridge Cir'
      },
      city: 'Clearwater',
      state: 'New York',
      country: 'United States',
      postcode: 71020,
      coordinates: {
        latitude: '-39.4052',
        longitude: '-130.0640'
      },
      timezone: {
        offset: '-11:00',
        description: 'Midway Island, Samoa'
      }
    },
    email: 'letitia.perry@example.com',
    dob: {
      date: '1994-01-01T13:08:59.261Z',
      age: 26
    },
    registered: {
      date: '2011-06-07T18:01:37.269Z',
      age: 9
    },
    phone: '(092)-732-6430',
    cell: '(314)-683-6986',
    id: {
      name: 'SSN',
      value: '627-52-0613'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/12.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/12.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/12.jpg'
    },
    nat: 'US'
  },
  {
    name: {
      title: 'Ms',
      first: 'margie',
      last: 'jones'
    },
    location: {
      street: {
        number: 9155,
        name: 'Harrison Ct'
      },
      city: 'Birmingham',
      state: 'Kentucky',
      country: 'United States',
      postcode: 42007,
      coordinates: {
        latitude: '54.7425',
        longitude: '-9.3660'
      },
      timezone: {
        offset: '+1:00',
        description: 'Brussels, Copenhagen, Madrid, Paris'
      }
    },
    email: 'margie.jones@example.com',
    dob: {
      date: '1946-06-13T12:00:13.489Z',
      age: 74
    },
    registered: {
      date: '2007-08-29T23:53:44.236Z',
      age: 13
    },
    phone: '(682)-376-5329',
    cell: '(592)-062-9946',
    id: {
      name: 'SSN',
      value: '809-18-3303'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/49.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/49.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/49.jpg'
    },
    nat: 'US'
  },
  {
    name: {
      title: '',
      first: 'cristina',
      last: 'porter'
    },
    location: {
      street: {
        number: 2818,
        name: 'W Campbell Ave'
      },
      city: 'Murfreesboro',
      state: 'Utah',
      country: 'United States',
      postcode: 32837,
      coordinates: {
        latitude: '-76.2096',
        longitude: '148.4190'
      },
      timezone: {
        offset: '+11:00',
        description: 'Magadan, Solomon Islands, New Caledonia'
      }
    },
    email: 'cristina.porter@example.com',
    dob: {
      date: '1988-02-23T20:37:19.104Z',
      age: 32
    },
    registered: {
      date: '2003-01-26T09:46:13.746Z',
      age: 17
    },
    phone: '(361)-382-5989',
    cell: '(380)-671-9988',
    id: {
      name: 'SSN',
      value: '837-70-1359'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/16.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/16.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/16.jpg'
    },
    nat: 'US'
  },
  {
    name: {
      title: 'ms',
      first: 'laurie',
      last: 'dean'
    },
    location: {
      street: {
        number: 8782,
        name: 'Bollinger Rd'
      },
      city: 'Cedar Rapids',
      state: 'Wisconsin',
      country: 'United States',
      postcode: 31859,
      coordinates: {
        latitude: '18.4849',
        longitude: '47.9729'
      },
      timezone: {
        offset: '+9:30',
        description: 'Adelaide, Darwin'
      }
    },
    email: 'laurie.dean@example.com',
    dob: {
      date: '1976-05-07T13:45:49.201Z',
      age: 44
    },
    registered: {
      date: '2016-11-27T09:02:26.515Z',
      age: 4
    },
    phone: '(165)-587-8859',
    cell: '(279)-623-6849',
    id: {
      name: 'SSN',
      value: '671-38-6274'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/35.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/35.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/35.jpg'
    },
    nat: 'US'
  },
  {
    name: {
      title: 'mr',
      first: 'russell',
      last: 'simmons'
    },
    location: {
      street: {
        number: 3857,
        name: 'Valley View Ln'
      },
      city: 'Nashville',
      state: 'Colorado',
      country: 'United States',
      postcode: 45557,
      coordinates: {
        latitude: '-35.2944',
        longitude: '-74.7809'
      },
      timezone: {
        offset: '+9:30',
        description: 'Adelaide, Darwin'
      }
    },
    email: 'russell.simmons@example.com',
    dob: {
      date: '1973-05-09T15:38:16.442Z',
      age: 47
    },
    registered: {
      date: '2017-07-14T19:08:55.087Z',
      age: 3
    },
    phone: '(549)-009-3669',
    cell: '(215)-924-6324',
    id: {
      name: 'SSN',
      value: '724-93-2979'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/0.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/0.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/0.jpg'
    },
    nat: 'US'
  },
  {
    name: {
      title: 'ms',
      first: 'carmen',
      last: 'hunt'
    },
    location: {
      street: {
        number: 5157,
        name: 'Rolling Green Rd'
      },
      city: 'Boulder',
      state: 'Alaska',
      country: 'United States',
      postcode: 56664,
      coordinates: {
        latitude: '75.0898',
        longitude: '-76.6296'
      },
      timezone: {
        offset: '-6:00',
        description: 'Central Time (US & Canada), Mexico City'
      }
    },
    email: 'carmen.hunt@example.com',
    dob: {
      date: '1996-11-24T13:25:04.287Z',
      age: 24
    },
    registered: {
      date: '2007-05-23T03:06:11.946Z',
      age: 13
    },
    phone: '(438)-541-8793',
    cell: '(027)-688-4027',
    id: {
      name: 'SSN',
      value: '612-27-4182'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/67.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/67.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/67.jpg'
    },
    nat: 'US'
  },
  {
    name: {
      title: 'ms',
      first: 'erika',
      last: 'coleman'
    },
    location: {
      street: {
        number: 6997,
        name: 'Marsh Ln'
      },
      city: 'Ironville',
      state: 'Vermont',
      country: 'United States',
      postcode: 14544,
      coordinates: {
        latitude: '70.7633',
        longitude: '114.7514'
      },
      timezone: {
        offset: '0:00',
        description: 'Western Europe Time, London, Lisbon, Casablanca'
      }
    },
    email: 'erika.coleman@example.com',
    dob: {
      date: '1995-08-18T23:52:13.123Z',
      age: 25
    },
    registered: {
      date: '2013-08-08T04:16:30.703Z',
      age: 7
    },
    phone: '(984)-113-9822',
    cell: '(214)-931-7199',
    id: {
      name: 'SSN',
      value: '585-21-9935'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/18.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/18.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/18.jpg'
    },
    nat: 'US'
  },
  {
    name: {
      title: 'mr',
      first: 'clifford',
      last: 'ramos'
    },
    location: {
      street: {
        number: 2930,
        name: 'Hickory Creek Dr'
      },
      city: 'Richmond',
      state: 'Utah',
      country: 'United States',
      postcode: 59885,
      coordinates: {
        latitude: '-56.0627',
        longitude: '30.9409'
      },
      timezone: {
        offset: '+5:30',
        description: 'Bombay, Calcutta, Madras, New Delhi'
      }
    },
    email: 'clifford.ramos@example.com',
    dob: {
      date: '1983-11-09T23:22:01.122Z',
      age: 37
    },
    registered: {
      date: '2012-08-03T20:36:38.029Z',
      age: 8
    },
    phone: '(676)-412-1513',
    cell: '(725)-782-9030',
    id: {
      name: 'SSN',
      value: '041-29-3403'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/39.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/39.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/39.jpg'
    },
    nat: 'US'
  },
  {
    name: {
      title: 'mr',
      first: 'cody',
      last: 'evans'
    },
    location: {
      street: {
        number: 1136,
        name: 'Camden Ave'
      },
      city: 'Surprise',
      state: 'Montana',
      country: 'United States',
      postcode: 93575,
      coordinates: {
        latitude: '-48.0153',
        longitude: '-26.4141'
      },
      timezone: {
        offset: '+1:00',
        description: 'Brussels, Copenhagen, Madrid, Paris'
      }
    },
    email: 'cody.evans@example.com',
    dob: {
      date: '1983-09-29T04:05:23.358Z',
      age: 37
    },
    registered: {
      date: '2007-07-05T04:01:20.447Z',
      age: 13
    },
    phone: '(386)-902-8858',
    cell: '(769)-588-7161',
    id: {
      name: 'SSN',
      value: '861-58-6713'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/38.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/38.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/38.jpg'
    },
    nat: 'US'
  },
  {
    name: {
      title: 'mr',
      first: 'miguel',
      last: 'ross'
    },
    location: {
      street: {
        number: 8041,
        name: 'Central St'
      },
      city: 'Yonkers',
      state: 'Kansas',
      country: 'United States',
      postcode: 88349,
      coordinates: {
        latitude: '31.7772',
        longitude: '157.4169'
      },
      timezone: {
        offset: '-3:30',
        description: 'Newfoundland'
      }
    },
    email: 'miguel.ross@example.com',
    dob: {
      date: '1978-03-22T21:25:32.113Z',
      age: 42
    },
    registered: {
      date: '2005-11-12T08:36:40.026Z',
      age: 15
    },
    phone: '(133)-788-2327',
    cell: '(239)-062-8290',
    id: {
      name: 'SSN',
      value: '732-27-7395'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/81.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/81.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/81.jpg'
    },
    nat: 'US'
  }
]
