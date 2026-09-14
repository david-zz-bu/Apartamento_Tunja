var APP_DATA = {
  "scenes": [
    {
      "id": "0-cocina_sala",
      "name": "Cocina_Sala",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.4417455321189436,
        "pitch": 0.12302957303632667,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.042447800643437,
          "pitch": 0.07952818241537507,
          "rotation": 4.71238898038469,
          "target": "1-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pasillo",
      "name": "Pasillo",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.06206293913106,
        "pitch": -0.15834640391077315,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.841814962549515,
          "pitch": -0.16018702708375976,
          "rotation": 3.141592653589793,
          "target": "0-cocina_sala"
        },
        {
          "yaw": 1.631859435912018,
          "pitch": -0.22174988861499045,
          "rotation": 3.141592653589793,
          "target": "2-habitacin_2"
        },
        {
          "yaw": 0.6045441939456406,
          "pitch": -0.20171008076841268,
          "rotation": 3.141592653589793,
          "target": "3-habitacin_1"
        },
        {
          "yaw": -0.2435902058442796,
          "pitch": -0.20498319840809032,
          "rotation": 4.71238898038469,
          "target": "6-habitacin_principal"
        },
        {
          "yaw": -3.0324110065164955,
          "pitch": -0.3013213522599827,
          "rotation": 1.5707963267948966,
          "target": "5-bao_social"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-habitacin_2",
      "name": "Habitación_2",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.43248501404531936,
        "pitch": -0.42225707709541105,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8163275648158397,
          "pitch": -0.11508458990113546,
          "rotation": 3.141592653589793,
          "target": "1-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-habitacin_1",
      "name": "Habitación_1",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.9708288094735487,
        "pitch": -0.3209153785925043,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7103614924505628,
          "pitch": -0.22605812403052283,
          "rotation": 3.141592653589793,
          "target": "1-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bao_privado",
      "name": "Baño_Privado",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.10403052639178156,
        "pitch": -0.22591156348267916,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5183243241635331,
          "pitch": 0.002111285385478112,
          "rotation": 4.71238898038469,
          "target": "6-habitacin_principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bao_social",
      "name": "Baño_Social",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.100948585462657,
        "pitch": -0.26813324395557636,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9017680092935958,
          "pitch": -0.2584437957772181,
          "rotation": 3.141592653589793,
          "target": "1-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-habitacin_principal",
      "name": "Habitación_principal",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.835620706633671,
        "pitch": -0.20532273624104747,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9412004135977075,
          "pitch": -0.1979601758335896,
          "rotation": 3.141592653589793,
          "target": "1-pasillo"
        },
        {
          "yaw": 1.990875372173834,
          "pitch": -0.2180467961905972,
          "rotation": 8.63937979737193,
          "target": "4-bao_privado"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
