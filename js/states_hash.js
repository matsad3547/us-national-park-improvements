var states_hash = [
  {
    state: 'Alabama',
    abvr: 'AL',
    coordinates: [32.7, -86.9],
    zoom: 6
  },
  {
    state: 'Alaska',
    abvr: 'AK',
    coordinates: [64, -152.3],
    zoom: 4
  },
  {
    state: 'Arizona',
    abvr: 'AZ',
    coordinates: [34.3, -111.7],
    zoom: 6
  },
  {
    state:'Arkansas',
    abvr: 'AR',
    coordinates: [34.9, -92.4],
    zoom: 6
  },
  {
    state: 'California',
    abvr: 'CA',
    coordinates: [37.9, -119.3],
    zoom: 5
  },
  {
    state: 'Colorado',
    abvr: 'CO',
    coordinates: [39, -105.5],
    zoom: 6
  },
  {
    state: 'Connecticut',
    abvr: 'CT',
    coordinates: [41.6, -72.7],
    zoom: 8
  },
  {
    state: 'Delaware',
    abvr: 'DE',
    coordinates: [39, -75.5],
    zoom: 7
  },
  {
    state: 'Florida',
    abvr: 'FL',
    coordinates: [28.6, -82.4],
    zoom: 6
  },
  {
    state: 'Georgia',
    abvr: 'GA',
    coordinates: [32.6, -83.4],
    zoom: 6
  },
  {
    state: 'Hawaii',
    abvr: 'HI',
    coordinates: [20.3, -156.4],
    zoom: 7
  },
  {
    state: 'Idaho',
    abvr: 'ID',
    coordinates: [44.4, -114.6],
    zoom: 6
  },
  {
    state: 'Illinois',
    abvr: 'IL',
    coordinates: [40, -89],
    zoom: 6
  },
  {
    state: 'Indiana',
    abvr: 'IN',
    coordinates: [40, -86.3],
    zoom: 6
  },
  {
    state: 'Iowa',
    abvr: 'IA',
    coordinates: [42, -93.5],
    zoom: 6
  },
  {
    state: 'Kansas',
    abvr: 'KS',
    coordinates: [38.5, -98.4],
    zoom: 6
  },
  {
    state: 'Kentucky',
    abvr: 'KY',
    coordinates: [37.5, -85.3],
    zoom: 6
  },
  {
    state: 'Louisiana',
    abvr: 'LA',
    coordinates: [31, -92],
    zoom: 6
  },
  {
    state: 'Maine',
    abvr: 'ME',
    coordinates: [45.4, -69.2],
    zoom: 6
  },
  {
    state: 'Maryland',
    abvr: 'MD',
    coordinates: [39, -76.8],
    zoom: 6
  },
  {
    state: 'Massachusetts',
    abvr: 'MA',
    coordinates: [42.3, -71.8],
    zoom: 8
  },
  {
    state: 'Michigan',
    abvr: 'MI',
    coordinates: [41.3, -85.4],
    zoom: 6
  },
  {
    state: 'Minnesota',
    abvr: 'MN',
    coordinates: [46.3, -94.3],
    zoom: 6
  },
  {
    state: 'Mississippi',
    abvr: 'MS',
    coordinates: [32.7, -89.7],
    zoom: 6
  },
  {
  state: 'Missouri',
  abvr: 'MO',
  coordinates: [38.4, -92.5],
  zoom: 6
  },
  {
  state: 'Montana',
  abvr: 'MT',
  coordinates: [47, -109.6],
  zoom: 6
  },
  {
  state: 'Nebraska',
  abvr: 'NE',
  coordinates: [41.5, -99.8],
  zoom: 6
  },
  {
  state: 'Nevada',
  abvr: 'NV',
  coordinates: [39.3, -116.6],
  zoom: 6
  },
  {
  state: 'New Hampshire',
  abvr: 'NH',
  coordinates: [43.7, -71.6],
  zoom: 6
  },
  {
  state: 'New Jersey',
  abvr: 'NJ',
  coordinates: [40, -74.7],
  zoom: 6
  },
  {
  state: 'New Mexico',
  abvr: 'NM',
  coordinates: [34.4, -106.1],
  zoom: 6
  },
  {
  state: 'New York',
  abvr: 'NY',
  coordinates: [43, -75.5],
  zoom: 6
  },
  {
  state: 'North Carolina',
  abvr: 'NC',
  coordinates: [35.6, -79.4],
  zoom: 6
  },
  {
  state: 'North Dakota',
  abvr: 'ND',
  coordinates: [47.5, -100.5],
  zoom: 6
  },
  {
  state: 'Ohio',
  abvr: 'OH',
  coordinates: [40.3, -82.8],
  zoom: 6
  },
  {
  state: 'Oklahoma',
  abvr: 'OK',
  coordinates: [35.6, -97.5],
  zoom: 6
  },
  {
  state: 'Oregon',
  abvr: 'OR',
  coordinates: [43.9, -120.6],
  zoom: 6
  },
  {
  state: 'Pennsylvania',
  abvr: 'PA',
  coordinates: [40.9, -77.8],
  zoom: 6
  },
  {
  state: 'Rhode Island',
  abvr: 'RI',
  coordinates: [41.7, -71.6],
  zoom: 8
  },
  {
  state: 'South Carolina',
  abvr: 'SC',
  coordinates: [33.9, -80.9],
  zoom: 6
  },
  {
  state: 'South Dakota',
  abvr: 'SD',
  coordinates: [44.4, -100.2],
  zoom: 6
  },
  {
  state: 'Tennessee',
  abvr: 'TN',
  coordinates: [35.9, -86.4],
  zoom: 6
  },
  {
  state: 'Texas',
  abvr: 'TX',
  coordinates: [31.5, -99.3],
  zoom: 5
  },
  {
  state: 'Utah',
  abvr: 'UT',
  coordinates: [39.3, -111.7],
  zoom: 6
  },
  {
  state: 'Vermont',
  abvr: 'VT',
  coordinates: [44.1, -72.7],
  zoom: 6
  },
  {
  state: 'Virginia',
  abvr: 'VA',
  coordinates: [37.5, -78.9],
  zoom: 6
  },
  {
  state: 'Washington',
  abvr: 'WA',
  coordinates: [47.4, -120.5],
  zoom: 6
  },
  {
  state: 'West Virginia',
  abvr: 'WV',
  coordinates: [38.6, -80.6],
  zoom: 6
  },
  {
  state: 'Wisconsin',
  abvr: 'WI',
  coordinates: [44.6, -90],
  zoom: 6
  },
  {
  state: 'Wyoming',
  abvr: 'WY',
  coordinates: [43, -107.6],
  zoom: 6
  },
  ];
