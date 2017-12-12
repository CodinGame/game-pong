import { EntityManager } from './EntityManager.js';

export const assets = {
  images: {
    background: '/assets/Background.jpg'
  }
}

export const demo = {
  playerCount: 2,
  logo: '/assets/logo.png',
  overlayAlpha: 0.2,
  agents: [{
    index: 0,
    name: '[CG]Nonofr',
    avatar: 'https://static.codingame.com/servlet/fileservlet?id=' + 1715936252943 + '&format=viewer_avatar',
    type: 'CODINGAMER',
    color: '#ffae16',
    typeData: {
      me: true,
      nickname: '[CG]Nonofr'
    }
  }, {
    index: 1,
    name: 'Index_1',
    avatar: 'https://static.codingame.com/servlet/fileservlet?id=' + 1717001354716 + '&format=viewer_avatar',
    type: 'CODINGAMER',
    color: '#ff1d5c',
    typeData: {
      me: true,
      nickname: '[CG]Maxime'
    }
  }],
  frames: [
    {
      "global": {
        "entitymanager": {
          "width": 1920,
          "height": 1080
        }
      },
      "frame": {
        "key": true,
        "duration": 300,
        "entitymanager": "CREATE 1 SPRITE\nCREATE 2 LINE\nCREATE 3 LINE\nCREATE 4 CIRCLE\nUPDATE 2 1 {\"x\":7,\"y\":465,\"y2\":615,\"x2\":7,\"lineWidth\":15}\nUPDATE 4 1 {\"fillColor\":16777215,\"x\":960,\"y\":540,\"radius\":20}\nUPDATE 3 1 {\"x\":1913,\"y\":465,\"y2\":615,\"x2\":1913,\"lineWidth\":15}\nUPDATE 1 1 {\"scaleX\":2.0,\"anchorY\":0.5,\"image\":\"background\",\"scaleY\":2.0,\"anchorX\":0.5}\n",
        "frameNumber": 0
      }
    },
    {
      "key": false,
      "frameNumber": 1
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":585,\"y2\":735}\nUPDATE 4 1 {\"x\":1108,\"y\":672}\nUPDATE 3 1 {\"y\":585,\"y2\":735}\n",
      "frameNumber": 2
    },
    {
      "key": false,
      "frameNumber": 3
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":705,\"y2\":855}\nUPDATE 4 1 {\"x\":1256,\"y\":804}\nUPDATE 3 1 {\"y\":705,\"y2\":855}\n",
      "frameNumber": 4
    },
    {
      "key": false,
      "frameNumber": 5
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":720,\"y2\":870}\nUPDATE 4 1 {\"x\":1404,\"y\":936}\nUPDATE 3 1 {\"y\":825,\"y2\":975}\n",
      "frameNumber": 6
    },
    {
      "key": false,
      "frameNumber": 7
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 0.939394 {\"x\":1543,\"y\":1060}\nUPDATE 4 1 {\"x\":1551,\"y\":1052}\nUPDATE 3 1 {\"y\":930,\"y2\":1080}\n",
      "frameNumber": 8
    },
    {
      "key": false,
      "frameNumber": 9
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":679,\"y2\":829}\nUPDATE 4 1 {\"x\":1699,\"y\":920}\nUPDATE 3 1 {\"y\":845,\"y2\":995}\n",
      "frameNumber": 10
    },
    {
      "key": false,
      "frameNumber": 11
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":1847,\"y\":788}\nUPDATE 3 1 {\"y\":725,\"y2\":875}\n",
      "frameNumber": 12
    },
    {
      "key": false,
      "frameNumber": 13
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 0.256757 {\"x\":1885,\"y\":754}\nUPDATE 4 1 {\"x\":1775,\"y\":655}\nUPDATE 3 1 {\"y\":605,\"y2\":755}\n",
      "frameNumber": 14
    },
    {
      "key": false,
      "frameNumber": 15
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":799,\"y2\":949}\nUPDATE 4 1 {\"x\":1627,\"y\":523}\nUPDATE 3 1 {\"y\":485,\"y2\":635}\n",
      "frameNumber": 16
    },
    {
      "key": false,
      "frameNumber": 17
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":862,\"y2\":1012}\nUPDATE 4 1 {\"x\":1479,\"y\":391}\nUPDATE 3 1 {\"y\":365,\"y2\":515}\n",
      "frameNumber": 18
    },
    {
      "key": false,
      "frameNumber": 19
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":1331,\"y\":259}\nUPDATE 3 1 {\"y\":245,\"y2\":395}\n",
      "frameNumber": 20
    },
    {
      "key": false,
      "frameNumber": 21
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":1183,\"y\":127}\nUPDATE 3 1 {\"y\":125,\"y2\":275}\n",
      "frameNumber": 22
    },
    {
      "key": false,
      "frameNumber": 23
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 0.810606 {\"x\":1063,\"y\":20}\nUPDATE 4 1 {\"x\":1034,\"y\":45}\nUPDATE 3 1 {\"y\":5,\"y2\":155}\n",
      "frameNumber": 24
    },
    {
      "key": false,
      "frameNumber": 25
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":861,\"y2\":1011}\nUPDATE 4 1 {\"x\":886,\"y\":177}\nUPDATE 3 1 {\"y\":102,\"y2\":252}\n",
      "frameNumber": 26
    },
    {
      "key": false,
      "frameNumber": 27
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":738,\"y\":309}\nUPDATE 3 1 {\"y\":222,\"y2\":372}\n",
      "frameNumber": 28
    },
    {
      "key": false,
      "frameNumber": 29
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":590,\"y\":441}\nUPDATE 3 1 {\"y\":342,\"y2\":492}\n",
      "frameNumber": 30
    },
    {
      "key": false,
      "frameNumber": 31
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":442,\"y\":573}\nUPDATE 3 1 {\"y\":462,\"y2\":612}\n",
      "frameNumber": 32
    },
    {
      "key": false,
      "frameNumber": 33
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":294,\"y\":705}\nUPDATE 3 1 {\"y\":582,\"y2\":732}\n",
      "frameNumber": 34
    },
    {
      "key": false,
      "frameNumber": 35
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":146,\"y\":837}\nUPDATE 3 1 {\"y\":702,\"y2\":852}\n",
      "frameNumber": 36
    },
    {
      "key": false,
      "frameNumber": 37
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 0.75 {\"x\":35,\"y\":936}\nUPDATE 4 1 {\"x\":72,\"y\":969}\nUPDATE 3 1 {\"y\":822,\"y2\":972}\n",
      "frameNumber": 38
    },
    {
      "key": false,
      "frameNumber": 39
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 0.689394 {\"x\":174,\"y\":1060}\nUPDATE 2 1 {\"y\":741,\"y2\":891}\nUPDATE 4 1 {\"x\":219,\"y\":1019}\nUPDATE 3 1 {\"y\":930,\"y2\":1080}\n",
      "frameNumber": 40
    },
    {
      "key": false,
      "frameNumber": 41
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":621,\"y2\":771}\nUPDATE 4 1 {\"x\":367,\"y\":887}\nUPDATE 3 1 {\"y\":812,\"y2\":962}\n",
      "frameNumber": 42
    },
    {
      "key": false,
      "frameNumber": 43
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":501,\"y2\":651}\nUPDATE 4 1 {\"x\":515,\"y\":755}\nUPDATE 3 1 {\"y\":692,\"y2\":842}\n",
      "frameNumber": 44
    },
    {
      "key": false,
      "frameNumber": 45
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":432,\"y2\":582}\nUPDATE 4 1 {\"x\":663,\"y\":623}\nUPDATE 3 1 {\"y\":572,\"y2\":722}\n",
      "frameNumber": 46
    },
    {
      "key": false,
      "frameNumber": 47
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":811,\"y\":491}\nUPDATE 3 1 {\"y\":452,\"y2\":602}\n",
      "frameNumber": 48
    },
    {
      "key": false,
      "frameNumber": 49
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":959,\"y\":359}\nUPDATE 3 1 {\"y\":332,\"y2\":482}\n",
      "frameNumber": 50
    },
    {
      "key": false,
      "frameNumber": 51
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":1107,\"y\":227}\nUPDATE 3 1 {\"y\":212,\"y2\":362}\n",
      "frameNumber": 52
    },
    {
      "key": false,
      "frameNumber": 53
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":1255,\"y\":95}\nUPDATE 3 1 {\"y\":92,\"y2\":242}\n",
      "frameNumber": 54
    },
    {
      "key": false,
      "frameNumber": 55
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 0.568182 {\"x\":1339,\"y\":20}\nUPDATE 4 1 {\"x\":1402,\"y\":77}\nUPDATE 3 1 {\"y\":0,\"y2\":150}\n",
      "frameNumber": 56
    },
    {
      "key": false,
      "frameNumber": 57
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":433,\"y2\":583}\nUPDATE 4 1 {\"x\":1550,\"y\":209}\nUPDATE 3 1 {\"y\":120,\"y2\":270}\n",
      "frameNumber": 58
    },
    {
      "key": false,
      "frameNumber": 59
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":1698,\"y\":341}\nUPDATE 3 1 {\"y\":240,\"y2\":390}\n",
      "frameNumber": 60
    },
    {
      "key": false,
      "frameNumber": 61
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":1846,\"y\":473}\nUPDATE 3 1 {\"y\":360,\"y2\":510}\n",
      "frameNumber": 62
    },
    {
      "key": false,
      "frameNumber": 63
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 0.263514 {\"x\":1885,\"y\":507}\nUPDATE 4 1 {\"x\":1776,\"y\":604}\nUPDATE 3 1 {\"y\":480,\"y2\":630}\n",
      "frameNumber": 64
    },
    {
      "key": false,
      "frameNumber": 65
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":313,\"y2\":463}\nUPDATE 4 1 {\"x\":1628,\"y\":736}\nUPDATE 3 1 {\"y\":600,\"y2\":750}\n",
      "frameNumber": 66
    },
    {
      "key": false,
      "frameNumber": 67
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":193,\"y2\":343}\nUPDATE 4 1 {\"x\":1480,\"y\":868}\nUPDATE 3 1 {\"y\":720,\"y2\":870}\n",
      "frameNumber": 68
    },
    {
      "key": false,
      "frameNumber": 69
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":73,\"y2\":223}\nUPDATE 4 1 {\"x\":1332,\"y\":1000}\nUPDATE 3 1 {\"y\":840,\"y2\":990}\n",
      "frameNumber": 70
    },
    {
      "key": false,
      "frameNumber": 71
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 0.454545 {\"x\":1264,\"y\":1060}\nUPDATE 2 1 {\"y\":0,\"y2\":150}\nUPDATE 4 1 {\"x\":1183,\"y\":988}\nUPDATE 3 1 {\"y\":930,\"y2\":1080}\n",
      "frameNumber": 72
    },
    {
      "key": false,
      "frameNumber": 73
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":1,\"y2\":151}\nUPDATE 4 1 {\"x\":1035,\"y\":856}\nUPDATE 3 1 {\"y\":810,\"y2\":960}\n",
      "frameNumber": 74
    },
    {
      "key": false,
      "frameNumber": 75
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":887,\"y\":724}\nUPDATE 3 1 {\"y\":690,\"y2\":840}\n",
      "frameNumber": 76
    },
    {
      "key": false,
      "frameNumber": 77
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":739,\"y\":592}\nUPDATE 3 1 {\"y\":570,\"y2\":720}\n",
      "frameNumber": 78
    },
    {
      "key": false,
      "frameNumber": 79
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":591,\"y\":460}\nUPDATE 3 1 {\"y\":450,\"y2\":600}\n",
      "frameNumber": 80
    },
    {
      "key": false,
      "frameNumber": 81
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":443,\"y\":328}\nUPDATE 3 1 {\"y\":330,\"y2\":480}\n",
      "frameNumber": 82
    },
    {
      "key": false,
      "frameNumber": 83
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":295,\"y\":196}\nUPDATE 3 1 {\"y\":210,\"y2\":360}\n",
      "frameNumber": 84
    },
    {
      "key": false,
      "frameNumber": 85
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":147,\"y\":64}\nUPDATE 3 1 {\"y\":90,\"y2\":240}\n",
      "frameNumber": 86
    },
    {
      "key": false,
      "frameNumber": 87
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 0.333333 {\"x\":97,\"y\":20}\nUPDATE 4 0.752252 {\"x\":35,\"y\":75}\nUPDATE 4 1 {\"x\":71,\"y\":107}\nUPDATE 3 1 {\"y\":0,\"y2\":150}\n",
      "frameNumber": 88
    },
    {
      "key": false,
      "frameNumber": 89
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":121,\"y2\":271}\nUPDATE 4 1 {\"x\":219,\"y\":239}\nUPDATE 3 1 {\"y\":120,\"y2\":270}\n",
      "frameNumber": 90
    },
    {
      "key": false,
      "frameNumber": 91
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":241,\"y2\":391}\nUPDATE 4 1 {\"x\":367,\"y\":371}\nUPDATE 3 1 {\"y\":240,\"y2\":390}\n",
      "frameNumber": 92
    },
    {
      "key": false,
      "frameNumber": 93
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":360,\"y2\":510}\nUPDATE 4 1 {\"x\":515,\"y\":503}\nUPDATE 3 1 {\"y\":360,\"y2\":510}\n",
      "frameNumber": 94
    },
    {
      "key": false,
      "frameNumber": 95
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":663,\"y\":635}\nUPDATE 3 1 {\"y\":480,\"y2\":630}\n",
      "frameNumber": 96
    },
    {
      "key": false,
      "frameNumber": 97
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":811,\"y\":767}\nUPDATE 3 1 {\"y\":600,\"y2\":750}\n",
      "frameNumber": 98
    },
    {
      "key": false,
      "frameNumber": 99
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":959,\"y\":899}\nUPDATE 3 1 {\"y\":720,\"y2\":870}\n",
      "frameNumber": 100
    },
    {
      "key": false,
      "frameNumber": 101
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":1107,\"y\":1031}\nUPDATE 3 1 {\"y\":840,\"y2\":990}\n",
      "frameNumber": 102
    },
    {
      "key": false,
      "frameNumber": 103
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 0.219697 {\"x\":1139,\"y\":1060}\nUPDATE 4 1 {\"x\":1254,\"y\":957}\nUPDATE 3 1 {\"y\":930,\"y2\":1080}\n",
      "frameNumber": 104
    },
    {
      "key": false,
      "frameNumber": 105
    },
    {
      "key": true,
      "entitymanager": "UPDATE 2 1 {\"y\":319,\"y2\":469}\nUPDATE 4 1 {\"x\":1402,\"y\":825}\nUPDATE 3 1 {\"y\":810,\"y2\":960}\n",
      "frameNumber": 106
    },
    {
      "key": false,
      "frameNumber": 107
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":1550,\"y\":693}\nUPDATE 3 1 {\"y\":690,\"y2\":840}\n",
      "frameNumber": 108
    },
    {
      "key": false,
      "frameNumber": 109
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":1698,\"y\":561}\nUPDATE 3 1 {\"y\":570,\"y2\":720}\n",
      "frameNumber": 110
    },
    {
      "key": false,
      "frameNumber": 111
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 1 {\"x\":1846,\"y\":429}\nUPDATE 3 1 {\"y\":450,\"y2\":600}\n",
      "frameNumber": 112
    },
    {
      "key": false,
      "frameNumber": 113
    },
    {
      "key": true,
      "entitymanager": "UPDATE 4 0.263514 {\"x\":1885,\"y\":394}\nUPDATE 4 1 {\"x\":1994,\"y\":296}\nUPDATE 3 1 {\"y\":330,\"y2\":480}\n",
      "frameNumber": 114
    }
  ]
};

export const modules = [
  EntityManager
];