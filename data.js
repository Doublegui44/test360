var APP_DATA = {
  "scenes": [
    {
      "id": "0-scene-1",
      "name": "Scene 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.004623235122331,
        "pitch": 0.23357008336287244,
        "fov": 1.5289890890484703
      },
      "linkHotspots": [
        {
          "yaw": 0.8348120857248684,
          "pitch": 0.010102625182332403,
          "rotation": 0,
          "target": "1-scene-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0297910205537342,
          "pitch": 0.2923544819600927,
          "title": "Hello",
          "text": "World"
        },
        {
          "yaw": 1.9042287046436188,
          "pitch": 0.3318007751409038,
          "title": "Seat",
          "text": "This is a great seat"
        }
      ]
    },
    {
      "id": "1-scene-2",
      "name": "Scene 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
