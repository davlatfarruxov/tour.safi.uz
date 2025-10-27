var APP_DATA = {
  "scenes": [
    {
      "id": "0-reception-area",
      "name": "Reception Area",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -1.2031919201596484,
        "pitch": 0.0009650567763230811,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.9938766402200265,
          "pitch": 0.10580413922761167,
          "rotation": 0,
          "target": "1-main-showroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-main-showroom",
      "name": "Main Showroom",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.0067128048153630715,
        "pitch": 0.02404354324589164,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.1173176319198106,
          "pitch": 0.08710238636571788,
          "rotation": 0,
          "target": "0-reception-area"
        },
        {
          "yaw": 3.121658886438947,
          "pitch": 0.15650098834117898,
          "rotation": 0,
          "target": "2-equipment--accessories-section"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-equipment--accessories-section",
      "name": "Equipment & Accessories Section",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -2.1602627928155194,
        "pitch": 0.15638783450744498,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.2106395669961802,
          "pitch": 0.20470058638033706,
          "rotation": 0,
          "target": "1-main-showroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
