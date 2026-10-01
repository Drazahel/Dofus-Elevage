export type ParentPair = [string, string]

export type LineageEntry = {
  parentPairs: ParentPair[]
  children: string[]
}

export const LINEAGE: Record<string, LineageEntry> = {
  "dragodinde-amande": {
    "parentPairs": [],
    "children": [
      "dragodinde-amande-et-doree",
      "dragodinde-amande-et-ebene",
      "dragodinde-amande-et-emeraude",
      "dragodinde-amande-et-indigo",
      "dragodinde-amande-et-ivoire",
      "dragodinde-amande-et-orchidee",
      "dragodinde-amande-et-pourpre",
      "dragodinde-amande-et-rousse",
      "dragodinde-amande-et-turquoise",
      "dragodinde-prune-et-amande"
    ]
  },
  "dragodinde-doree": {
    "parentPairs": [],
    "children": [
      "dragodinde-amande-et-doree",
      "dragodinde-doree-et-ebene",
      "dragodinde-doree-et-emeraude",
      "dragodinde-doree-et-indigo",
      "dragodinde-doree-et-ivoire",
      "dragodinde-doree-et-orchidee",
      "dragodinde-doree-et-pourpre",
      "dragodinde-doree-et-rousse",
      "dragodinde-doree-et-turquoise",
      "dragodinde-prune-et-doree"
    ]
  },
  "dragodinde-rousse": {
    "parentPairs": [],
    "children": [
      "dragodinde-amande-et-rousse",
      "dragodinde-doree-et-rousse",
      "dragodinde-ebene-et-rousse",
      "dragodinde-emeraude-et-rousse",
      "dragodinde-indigo-et-rousse",
      "dragodinde-ivoire-et-rousse",
      "dragodinde-orchidee-et-rousse",
      "dragodinde-pourpre-et-rousse",
      "dragodinde-prune-et-rousse",
      "dragodinde-turquoise-et-rousse"
    ]
  },
  "dragodinde-amande-et-rousse": {
    "parentPairs": [
      [
        "dragodinde-amande",
        "dragodinde-rousse"
      ]
    ],
    "children": [
      "dragodinde-indigo",
      "dragodinde-pourpre"
    ]
  },
  "dragodinde-doree-et-rousse": {
    "parentPairs": [
      [
        "dragodinde-doree",
        "dragodinde-rousse"
      ]
    ],
    "children": [
      "dragodinde-ebene",
      "dragodinde-orchidee"
    ]
  },
  "dragodinde-amande-et-doree": {
    "parentPairs": [
      [
        "dragodinde-amande",
        "dragodinde-doree"
      ]
    ],
    "children": [
      "dragodinde-ebene",
      "dragodinde-indigo"
    ]
  },
  "dragodinde-ebene": {
    "parentPairs": [
      [
        "dragodinde-amande-et-doree",
        "dragodinde-doree-et-rousse"
      ]
    ],
    "children": [
      "dragodinde-amande-et-ebene",
      "dragodinde-doree-et-ebene",
      "dragodinde-ebene-et-emeraude",
      "dragodinde-ebene-et-indigo",
      "dragodinde-ebene-et-ivoire",
      "dragodinde-ebene-et-orchidee",
      "dragodinde-ebene-et-pourpre",
      "dragodinde-ebene-et-rousse",
      "dragodinde-ebene-et-turquoise",
      "dragodinde-prune-et-ebene"
    ]
  },
  "dragodinde-indigo": {
    "parentPairs": [
      [
        "dragodinde-amande-et-doree",
        "dragodinde-amande-et-rousse"
      ]
    ],
    "children": [
      "dragodinde-amande-et-indigo",
      "dragodinde-doree-et-indigo",
      "dragodinde-ebene-et-indigo",
      "dragodinde-emeraude-et-indigo",
      "dragodinde-indigo-et-ivoire",
      "dragodinde-indigo-et-orchidee",
      "dragodinde-indigo-et-pourpre",
      "dragodinde-indigo-et-rousse",
      "dragodinde-indigo-et-turquoise",
      "dragodinde-prune-et-indigo"
    ]
  },
  "dragodinde-indigo-et-rousse": {
    "parentPairs": [
      [
        "dragodinde-indigo",
        "dragodinde-rousse"
      ]
    ],
    "children": []
  },
  "dragodinde-ebene-et-rousse": {
    "parentPairs": [
      [
        "dragodinde-ebene",
        "dragodinde-rousse"
      ]
    ],
    "children": []
  },
  "dragodinde-amande-et-indigo": {
    "parentPairs": [
      [
        "dragodinde-amande",
        "dragodinde-indigo"
      ]
    ],
    "children": []
  },
  "dragodinde-amande-et-ebene": {
    "parentPairs": [
      [
        "dragodinde-amande",
        "dragodinde-ebene"
      ]
    ],
    "children": []
  },
  "dragodinde-doree-et-indigo": {
    "parentPairs": [
      [
        "dragodinde-doree",
        "dragodinde-indigo"
      ]
    ],
    "children": []
  },
  "dragodinde-doree-et-ebene": {
    "parentPairs": [
      [
        "dragodinde-doree",
        "dragodinde-ebene"
      ]
    ],
    "children": []
  },
  "dragodinde-ebene-et-indigo": {
    "parentPairs": [
      [
        "dragodinde-ebene",
        "dragodinde-indigo"
      ]
    ],
    "children": [
      "dragodinde-orchidee",
      "dragodinde-pourpre"
    ]
  },
  "dragodinde-pourpre": {
    "parentPairs": [
      [
        "dragodinde-ebene-et-indigo",
        "dragodinde-amande-et-rousse"
      ]
    ],
    "children": [
      "dragodinde-amande-et-pourpre",
      "dragodinde-doree-et-pourpre",
      "dragodinde-ebene-et-pourpre",
      "dragodinde-emeraude-et-pourpre",
      "dragodinde-indigo-et-pourpre",
      "dragodinde-ivoire-et-pourpre",
      "dragodinde-orchidee-et-pourpre",
      "dragodinde-pourpre-et-rousse",
      "dragodinde-prune-et-pourpre",
      "dragodinde-turquoise-et-pourpre"
    ]
  },
  "dragodinde-orchidee": {
    "parentPairs": [
      [
        "dragodinde-ebene-et-indigo",
        "dragodinde-doree-et-rousse"
      ]
    ],
    "children": [
      "dragodinde-amande-et-orchidee",
      "dragodinde-doree-et-orchidee",
      "dragodinde-ebene-et-orchidee",
      "dragodinde-emeraude-et-orchidee",
      "dragodinde-indigo-et-orchidee",
      "dragodinde-ivoire-et-orchidee",
      "dragodinde-orchidee-et-pourpre",
      "dragodinde-orchidee-et-rousse",
      "dragodinde-prune-et-orchidee",
      "dragodinde-turquoise-et-orchidee"
    ]
  },
  "dragodinde-pourpre-et-rousse": {
    "parentPairs": [
      [
        "dragodinde-pourpre",
        "dragodinde-rousse"
      ]
    ],
    "children": []
  },
  "dragodinde-orchidee-et-rousse": {
    "parentPairs": [
      [
        "dragodinde-orchidee",
        "dragodinde-rousse"
      ]
    ],
    "children": []
  },
  "dragodinde-amande-et-pourpre": {
    "parentPairs": [
      [
        "dragodinde-amande",
        "dragodinde-pourpre"
      ]
    ],
    "children": []
  },
  "dragodinde-amande-et-orchidee": {
    "parentPairs": [
      [
        "dragodinde-amande",
        "dragodinde-orchidee"
      ]
    ],
    "children": []
  },
  "dragodinde-doree-et-pourpre": {
    "parentPairs": [
      [
        "dragodinde-doree",
        "dragodinde-pourpre"
      ]
    ],
    "children": []
  },
  "dragodinde-doree-et-orchidee": {
    "parentPairs": [
      [
        "dragodinde-doree",
        "dragodinde-orchidee"
      ]
    ],
    "children": []
  },
  "dragodinde-indigo-et-pourpre": {
    "parentPairs": [
      [
        "dragodinde-indigo",
        "dragodinde-pourpre"
      ]
    ],
    "children": [
      "dragodinde-ivoire"
    ]
  },
  "dragodinde-indigo-et-orchidee": {
    "parentPairs": [
      [
        "dragodinde-indigo",
        "dragodinde-orchidee"
      ]
    ],
    "children": []
  },
  "dragodinde-ebene-et-pourpre": {
    "parentPairs": [
      [
        "dragodinde-ebene",
        "dragodinde-pourpre"
      ]
    ],
    "children": []
  },
  "dragodinde-ebene-et-orchidee": {
    "parentPairs": [
      [
        "dragodinde-ebene",
        "dragodinde-orchidee"
      ]
    ],
    "children": [
      "dragodinde-turquoise"
    ]
  },
  "dragodinde-orchidee-et-pourpre": {
    "parentPairs": [
      [
        "dragodinde-orchidee",
        "dragodinde-pourpre"
      ]
    ],
    "children": [
      "dragodinde-ivoire",
      "dragodinde-turquoise"
    ]
  },
  "dragodinde-ivoire": {
    "parentPairs": [
      [
        "dragodinde-orchidee-et-pourpre",
        "dragodinde-indigo-et-pourpre"
      ]
    ],
    "children": [
      "dragodinde-amande-et-ivoire",
      "dragodinde-doree-et-ivoire",
      "dragodinde-ebene-et-ivoire",
      "dragodinde-emeraude-et-ivoire",
      "dragodinde-indigo-et-ivoire",
      "dragodinde-ivoire-et-orchidee",
      "dragodinde-ivoire-et-pourpre",
      "dragodinde-ivoire-et-rousse",
      "dragodinde-ivoire-et-turquoise",
      "dragodinde-prune-et-ivoire"
    ]
  },
  "dragodinde-turquoise": {
    "parentPairs": [
      [
        "dragodinde-orchidee-et-pourpre",
        "dragodinde-ebene-et-orchidee"
      ]
    ],
    "children": [
      "dragodinde-amande-et-turquoise",
      "dragodinde-doree-et-turquoise",
      "dragodinde-ebene-et-turquoise",
      "dragodinde-emeraude-et-turquoise",
      "dragodinde-indigo-et-turquoise",
      "dragodinde-ivoire-et-turquoise",
      "dragodinde-prune-et-turquoise",
      "dragodinde-turquoise-et-orchidee",
      "dragodinde-turquoise-et-pourpre",
      "dragodinde-turquoise-et-rousse"
    ]
  },
  "dragodinde-ivoire-et-rousse": {
    "parentPairs": [
      [
        "dragodinde-ivoire",
        "dragodinde-rousse"
      ]
    ],
    "children": []
  },
  "dragodinde-turquoise-et-rousse": {
    "parentPairs": [
      [
        "dragodinde-turquoise",
        "dragodinde-rousse"
      ]
    ],
    "children": []
  },
  "dragodinde-amande-et-ivoire": {
    "parentPairs": [
      [
        "dragodinde-amande",
        "dragodinde-ivoire"
      ]
    ],
    "children": []
  },
  "dragodinde-amande-et-turquoise": {
    "parentPairs": [
      [
        "dragodinde-amande",
        "dragodinde-turquoise"
      ]
    ],
    "children": []
  },
  "dragodinde-doree-et-ivoire": {
    "parentPairs": [
      [
        "dragodinde-doree",
        "dragodinde-ivoire"
      ]
    ],
    "children": []
  },
  "dragodinde-doree-et-turquoise": {
    "parentPairs": [
      [
        "dragodinde-doree",
        "dragodinde-turquoise"
      ]
    ],
    "children": []
  },
  "dragodinde-indigo-et-ivoire": {
    "parentPairs": [
      [
        "dragodinde-indigo",
        "dragodinde-ivoire"
      ]
    ],
    "children": []
  },
  "dragodinde-indigo-et-turquoise": {
    "parentPairs": [
      [
        "dragodinde-indigo",
        "dragodinde-turquoise"
      ]
    ],
    "children": []
  },
  "dragodinde-ebene-et-ivoire": {
    "parentPairs": [
      [
        "dragodinde-ebene",
        "dragodinde-ivoire"
      ]
    ],
    "children": []
  },
  "dragodinde-ebene-et-turquoise": {
    "parentPairs": [
      [
        "dragodinde-ebene",
        "dragodinde-turquoise"
      ]
    ],
    "children": []
  },
  "dragodinde-ivoire-et-pourpre": {
    "parentPairs": [
      [
        "dragodinde-ivoire",
        "dragodinde-pourpre"
      ]
    ],
    "children": [
      "dragodinde-emeraude"
    ]
  },
  "dragodinde-turquoise-et-pourpre": {
    "parentPairs": [
      [
        "dragodinde-turquoise",
        "dragodinde-pourpre"
      ]
    ],
    "children": []
  },
  "dragodinde-ivoire-et-orchidee": {
    "parentPairs": [
      [
        "dragodinde-ivoire",
        "dragodinde-orchidee"
      ]
    ],
    "children": []
  },
  "dragodinde-turquoise-et-orchidee": {
    "parentPairs": [
      [
        "dragodinde-turquoise",
        "dragodinde-orchidee"
      ]
    ],
    "children": [
      "dragodinde-prune"
    ]
  },
  "dragodinde-ivoire-et-turquoise": {
    "parentPairs": [
      [
        "dragodinde-ivoire",
        "dragodinde-turquoise"
      ]
    ],
    "children": [
      "dragodinde-emeraude",
      "dragodinde-prune"
    ]
  },
  "dragodinde-emeraude": {
    "parentPairs": [
      [
        "dragodinde-ivoire-et-turquoise",
        "dragodinde-ivoire-et-pourpre"
      ]
    ],
    "children": [
      "dragodinde-amande-et-emeraude",
      "dragodinde-doree-et-emeraude",
      "dragodinde-ebene-et-emeraude",
      "dragodinde-emeraude-et-indigo",
      "dragodinde-emeraude-et-ivoire",
      "dragodinde-emeraude-et-orchidee",
      "dragodinde-emeraude-et-pourpre",
      "dragodinde-emeraude-et-rousse",
      "dragodinde-emeraude-et-turquoise",
      "dragodinde-prune-et-emeraude"
    ]
  },
  "dragodinde-prune": {
    "parentPairs": [
      [
        "dragodinde-ivoire-et-turquoise",
        "dragodinde-turquoise-et-orchidee"
      ]
    ],
    "children": [
      "dragodinde-prune-et-amande",
      "dragodinde-prune-et-doree",
      "dragodinde-prune-et-ebene",
      "dragodinde-prune-et-emeraude",
      "dragodinde-prune-et-indigo",
      "dragodinde-prune-et-ivoire",
      "dragodinde-prune-et-orchidee",
      "dragodinde-prune-et-pourpre",
      "dragodinde-prune-et-rousse",
      "dragodinde-prune-et-turquoise"
    ]
  },
  "dragodinde-emeraude-et-rousse": {
    "parentPairs": [
      [
        "dragodinde-emeraude",
        "dragodinde-rousse"
      ]
    ],
    "children": []
  },
  "dragodinde-prune-et-rousse": {
    "parentPairs": [
      [
        "dragodinde-prune",
        "dragodinde-rousse"
      ]
    ],
    "children": []
  },
  "dragodinde-amande-et-emeraude": {
    "parentPairs": [
      [
        "dragodinde-amande",
        "dragodinde-emeraude"
      ]
    ],
    "children": []
  },
  "dragodinde-prune-et-amande": {
    "parentPairs": [
      [
        "dragodinde-prune",
        "dragodinde-amande"
      ]
    ],
    "children": []
  },
  "dragodinde-doree-et-emeraude": {
    "parentPairs": [
      [
        "dragodinde-doree",
        "dragodinde-emeraude"
      ]
    ],
    "children": []
  },
  "dragodinde-prune-et-doree": {
    "parentPairs": [
      [
        "dragodinde-prune",
        "dragodinde-doree"
      ]
    ],
    "children": []
  },
  "dragodinde-emeraude-et-indigo": {
    "parentPairs": [
      [
        "dragodinde-emeraude",
        "dragodinde-indigo"
      ]
    ],
    "children": []
  },
  "dragodinde-prune-et-indigo": {
    "parentPairs": [
      [
        "dragodinde-prune",
        "dragodinde-indigo"
      ]
    ],
    "children": []
  },
  "dragodinde-ebene-et-emeraude": {
    "parentPairs": [
      [
        "dragodinde-ebene",
        "dragodinde-emeraude"
      ]
    ],
    "children": []
  },
  "dragodinde-prune-et-ebene": {
    "parentPairs": [
      [
        "dragodinde-prune",
        "dragodinde-ebene"
      ]
    ],
    "children": []
  },
  "dragodinde-emeraude-et-pourpre": {
    "parentPairs": [
      [
        "dragodinde-emeraude",
        "dragodinde-pourpre"
      ]
    ],
    "children": []
  },
  "dragodinde-prune-et-pourpre": {
    "parentPairs": [
      [
        "dragodinde-prune",
        "dragodinde-pourpre"
      ]
    ],
    "children": []
  },
  "dragodinde-emeraude-et-orchidee": {
    "parentPairs": [
      [
        "dragodinde-emeraude",
        "dragodinde-orchidee"
      ]
    ],
    "children": []
  },
  "dragodinde-prune-et-orchidee": {
    "parentPairs": [
      [
        "dragodinde-prune",
        "dragodinde-orchidee"
      ]
    ],
    "children": []
  },
  "dragodinde-emeraude-et-ivoire": {
    "parentPairs": [
      [
        "dragodinde-emeraude",
        "dragodinde-ivoire"
      ]
    ],
    "children": []
  },
  "dragodinde-prune-et-ivoire": {
    "parentPairs": [
      [
        "dragodinde-prune",
        "dragodinde-ivoire"
      ]
    ],
    "children": []
  },
  "dragodinde-emeraude-et-turquoise": {
    "parentPairs": [
      [
        "dragodinde-emeraude",
        "dragodinde-turquoise"
      ]
    ],
    "children": []
  },
  "dragodinde-prune-et-turquoise": {
    "parentPairs": [
      [
        "dragodinde-prune",
        "dragodinde-turquoise"
      ]
    ],
    "children": []
  },
  "dragodinde-prune-et-emeraude": {
    "parentPairs": [
      [
        "dragodinde-prune",
        "dragodinde-emeraude"
      ]
    ],
    "children": []
  },
  "dragodinde-dragodinde-en-armure": {
    "parentPairs": [],
    "children": []
  },
  "dragodinde-dragodinde-a-plumes": {
    "parentPairs": [],
    "children": []
  },
  "muldo-ebene": {
    "parentPairs": [],
    "children": [
      "muldo-aigue-marine-et-ebene",
      "muldo-ambre-et-ebene",
      "muldo-azur-et-ebene",
      "muldo-corail-et-ebene",
      "muldo-dore-et-ebene",
      "muldo-ebene-et-amande",
      "muldo-ebene-et-emeraude",
      "muldo-ebene-et-indigo",
      "muldo-ebene-et-ivoire",
      "muldo-ebene-et-orchidee",
      "muldo-ebene-et-pourpre",
      "muldo-prune-et-ebene",
      "muldo-roux-et-ebene",
      "muldo-turquoise-et-ebene"
    ]
  },
  "muldo-indigo": {
    "parentPairs": [],
    "children": [
      "muldo-aigue-marine-et-indigo",
      "muldo-ambre-et-indigo",
      "muldo-azur-et-indigo",
      "muldo-corail-et-indigo",
      "muldo-dore-et-indigo",
      "muldo-ebene-et-indigo",
      "muldo-indigo-et-amande",
      "muldo-indigo-et-emeraude",
      "muldo-indigo-et-ivoire",
      "muldo-indigo-et-orchidee",
      "muldo-indigo-et-pourpre",
      "muldo-prune-et-indigo",
      "muldo-roux-et-indigo",
      "muldo-turquoise-et-indigo"
    ]
  },
  "muldo-pourpre": {
    "parentPairs": [],
    "children": [
      "muldo-aigue-marine-et-pourpre",
      "muldo-ambre-et-pourpre",
      "muldo-azur-et-pourpre",
      "muldo-corail-et-pourpre",
      "muldo-dore-et-pourpre",
      "muldo-ebene-et-pourpre",
      "muldo-indigo-et-pourpre",
      "muldo-orchidee-et-pourpre",
      "muldo-pourpre-et-amande",
      "muldo-pourpre-et-emeraude",
      "muldo-pourpre-et-ivoire",
      "muldo-prune-et-pourpre",
      "muldo-roux-et-pourpre",
      "muldo-turquoise-et-pourpre"
    ]
  },
  "muldo-orchidee": {
    "parentPairs": [],
    "children": [
      "muldo-aigue-marine-et-orchidee",
      "muldo-ambre-et-orchidee",
      "muldo-azur-et-orchidee",
      "muldo-corail-et-orchidee",
      "muldo-dore-et-orchidee",
      "muldo-ebene-et-orchidee",
      "muldo-indigo-et-orchidee",
      "muldo-orchidee-et-amande",
      "muldo-orchidee-et-emeraude",
      "muldo-orchidee-et-ivoire",
      "muldo-orchidee-et-pourpre",
      "muldo-prune-et-orchidee",
      "muldo-roux-et-orchidee",
      "muldo-turquoise-et-orchidee"
    ]
  },
  "muldo-dore": {
    "parentPairs": [],
    "children": [
      "muldo-aigue-marine-et-dore",
      "muldo-ambre-et-dore",
      "muldo-azur-et-dore",
      "muldo-corail-et-dore",
      "muldo-dore-et-amande",
      "muldo-dore-et-ebene",
      "muldo-dore-et-emeraude",
      "muldo-dore-et-indigo",
      "muldo-dore-et-ivoire",
      "muldo-dore-et-orchidee",
      "muldo-dore-et-pourpre",
      "muldo-prune-et-dore",
      "muldo-roux-et-dore",
      "muldo-turquoise-et-dore"
    ]
  },
  "muldo-dore-et-pourpre": {
    "parentPairs": [
      [
        "muldo-dore",
        "muldo-pourpre"
      ]
    ],
    "children": [
      "muldo-roux"
    ]
  },
  "muldo-indigo-et-pourpre": {
    "parentPairs": [
      [
        "muldo-indigo",
        "muldo-pourpre"
      ]
    ],
    "children": [
      "muldo-amande"
    ]
  },
  "muldo-ebene-et-pourpre": {
    "parentPairs": [
      [
        "muldo-ebene",
        "muldo-pourpre"
      ]
    ],
    "children": [
      "muldo-amande"
    ]
  },
  "muldo-orchidee-et-pourpre": {
    "parentPairs": [
      [
        "muldo-orchidee",
        "muldo-pourpre"
      ]
    ],
    "children": [
      "muldo-amande"
    ]
  },
  "muldo-dore-et-orchidee": {
    "parentPairs": [
      [
        "muldo-dore",
        "muldo-orchidee"
      ]
    ],
    "children": [
      "muldo-roux"
    ]
  },
  "muldo-indigo-et-orchidee": {
    "parentPairs": [
      [
        "muldo-indigo",
        "muldo-orchidee"
      ]
    ],
    "children": [
      "muldo-amande"
    ]
  },
  "muldo-ebene-et-orchidee": {
    "parentPairs": [
      [
        "muldo-ebene",
        "muldo-orchidee"
      ]
    ],
    "children": [
      "muldo-amande"
    ]
  },
  "muldo-dore-et-ebene": {
    "parentPairs": [
      [
        "muldo-dore",
        "muldo-ebene"
      ]
    ],
    "children": [
      "muldo-roux"
    ]
  },
  "muldo-dore-et-indigo": {
    "parentPairs": [
      [
        "muldo-dore",
        "muldo-indigo"
      ]
    ],
    "children": [
      "muldo-roux"
    ]
  },
  "muldo-ebene-et-indigo": {
    "parentPairs": [
      [
        "muldo-ebene",
        "muldo-indigo"
      ]
    ],
    "children": [
      "muldo-amande"
    ]
  },
  "muldo-roux": {
    "parentPairs": [
      [
        "muldo-dore-et-pourpre",
        "muldo-dore-et-indigo"
      ],
      [
        "muldo-dore-et-pourpre",
        "muldo-dore-et-ebene"
      ],
      [
        "muldo-dore-et-pourpre",
        "muldo-dore-et-orchidee"
      ],
      [
        "muldo-dore-et-orchidee",
        "muldo-dore-et-indigo"
      ],
      [
        "muldo-dore-et-orchidee",
        "muldo-dore-et-ebene"
      ],
      [
        "muldo-dore-et-ebene",
        "muldo-dore-et-indigo"
      ]
    ],
    "children": [
      "muldo-aigue-marine-et-roux",
      "muldo-ambre-et-roux",
      "muldo-azur-et-roux",
      "muldo-corail-et-roux",
      "muldo-prune-et-roux",
      "muldo-roux-et-amande",
      "muldo-roux-et-dore",
      "muldo-roux-et-ebene",
      "muldo-roux-et-emeraude",
      "muldo-roux-et-indigo",
      "muldo-roux-et-ivoire",
      "muldo-roux-et-orchidee",
      "muldo-roux-et-pourpre",
      "muldo-turquoise-et-roux"
    ]
  },
  "muldo-amande": {
    "parentPairs": [
      [
        "muldo-indigo-et-pourpre",
        "muldo-ebene-et-orchidee"
      ],
      [
        "muldo-ebene-et-pourpre",
        "muldo-indigo-et-orchidee"
      ],
      [
        "muldo-orchidee-et-pourpre",
        "muldo-ebene-et-indigo"
      ]
    ],
    "children": [
      "muldo-aigue-marine-et-amande",
      "muldo-amande-et-emeraude",
      "muldo-amande-et-ivoire",
      "muldo-ambre-et-amande",
      "muldo-azur-et-amande",
      "muldo-corail-et-amande",
      "muldo-dore-et-amande",
      "muldo-ebene-et-amande",
      "muldo-indigo-et-amande",
      "muldo-orchidee-et-amande",
      "muldo-pourpre-et-amande",
      "muldo-prune-et-amande",
      "muldo-roux-et-amande",
      "muldo-turquoise-et-amande"
    ]
  },
  "muldo-dore-et-amande": {
    "parentPairs": [
      [
        "muldo-dore",
        "muldo-amande"
      ]
    ],
    "children": [
      "muldo-turquoise"
    ]
  },
  "muldo-ebene-et-amande": {
    "parentPairs": [
      [
        "muldo-ebene",
        "muldo-amande"
      ]
    ],
    "children": [
      "muldo-ivoire"
    ]
  },
  "muldo-indigo-et-amande": {
    "parentPairs": [
      [
        "muldo-indigo",
        "muldo-amande"
      ]
    ],
    "children": [
      "muldo-ivoire"
    ]
  },
  "muldo-orchidee-et-amande": {
    "parentPairs": [
      [
        "muldo-orchidee",
        "muldo-amande"
      ]
    ],
    "children": [
      "muldo-ivoire"
    ]
  },
  "muldo-pourpre-et-amande": {
    "parentPairs": [
      [
        "muldo-pourpre",
        "muldo-amande"
      ]
    ],
    "children": [
      "muldo-ivoire"
    ]
  },
  "muldo-roux-et-amande": {
    "parentPairs": [
      [
        "muldo-roux",
        "muldo-amande"
      ]
    ],
    "children": [
      "muldo-ivoire",
      "muldo-turquoise"
    ]
  },
  "muldo-roux-et-dore": {
    "parentPairs": [
      [
        "muldo-roux",
        "muldo-dore"
      ]
    ],
    "children": [
      "muldo-ivoire"
    ]
  },
  "muldo-roux-et-ebene": {
    "parentPairs": [
      [
        "muldo-roux",
        "muldo-ebene"
      ]
    ],
    "children": [
      "muldo-turquoise"
    ]
  },
  "muldo-roux-et-indigo": {
    "parentPairs": [
      [
        "muldo-roux",
        "muldo-indigo"
      ]
    ],
    "children": [
      "muldo-turquoise"
    ]
  },
  "muldo-roux-et-orchidee": {
    "parentPairs": [
      [
        "muldo-roux",
        "muldo-orchidee"
      ]
    ],
    "children": [
      "muldo-turquoise"
    ]
  },
  "muldo-roux-et-pourpre": {
    "parentPairs": [
      [
        "muldo-roux",
        "muldo-pourpre"
      ]
    ],
    "children": [
      "muldo-turquoise"
    ]
  },
  "muldo-ivoire": {
    "parentPairs": [
      [
        "muldo-roux-et-dore",
        "muldo-ebene-et-amande"
      ],
      [
        "muldo-roux-et-dore",
        "muldo-indigo-et-amande"
      ],
      [
        "muldo-roux-et-dore",
        "muldo-orchidee-et-amande"
      ],
      [
        "muldo-roux-et-dore",
        "muldo-pourpre-et-amande"
      ],
      [
        "muldo-roux-et-amande",
        "muldo-ebene-et-amande"
      ],
      [
        "muldo-roux-et-amande",
        "muldo-pourpre-et-amande"
      ],
      [
        "muldo-roux-et-amande",
        "muldo-indigo-et-amande"
      ],
      [
        "muldo-roux-et-amande",
        "muldo-orchidee-et-amande"
      ]
    ],
    "children": [
      "muldo-aigue-marine-et-ivoire",
      "muldo-amande-et-ivoire",
      "muldo-ambre-et-ivoire",
      "muldo-azur-et-ivoire",
      "muldo-corail-et-ivoire",
      "muldo-dore-et-ivoire",
      "muldo-ebene-et-ivoire",
      "muldo-indigo-et-ivoire",
      "muldo-ivoire-et-emeraude",
      "muldo-orchidee-et-ivoire",
      "muldo-pourpre-et-ivoire",
      "muldo-prune-et-ivoire",
      "muldo-roux-et-ivoire",
      "muldo-turquoise-et-ivoire"
    ]
  },
  "muldo-turquoise": {
    "parentPairs": [
      [
        "muldo-dore-et-amande",
        "muldo-roux-et-ebene"
      ],
      [
        "muldo-dore-et-amande",
        "muldo-roux-et-orchidee"
      ],
      [
        "muldo-dore-et-amande",
        "muldo-roux-et-pourpre"
      ],
      [
        "muldo-dore-et-amande",
        "muldo-roux-et-indigo"
      ],
      [
        "muldo-roux-et-amande",
        "muldo-roux-et-ebene"
      ],
      [
        "muldo-roux-et-amande",
        "muldo-roux-et-indigo"
      ],
      [
        "muldo-roux-et-amande",
        "muldo-roux-et-orchidee"
      ],
      [
        "muldo-roux-et-amande",
        "muldo-roux-et-pourpre"
      ]
    ],
    "children": [
      "muldo-aigue-marine-et-turquoise",
      "muldo-ambre-et-turquoise",
      "muldo-azur-et-turquoise",
      "muldo-corail-et-turquoise",
      "muldo-prune-et-turquoise",
      "muldo-turquoise-et-amande",
      "muldo-turquoise-et-dore",
      "muldo-turquoise-et-ebene",
      "muldo-turquoise-et-emeraude",
      "muldo-turquoise-et-indigo",
      "muldo-turquoise-et-ivoire",
      "muldo-turquoise-et-orchidee",
      "muldo-turquoise-et-pourpre",
      "muldo-turquoise-et-roux"
    ]
  },
  "muldo-pourpre-et-ivoire": {
    "parentPairs": [
      [
        "muldo-pourpre",
        "muldo-ivoire"
      ]
    ],
    "children": [
      "muldo-prune"
    ]
  },
  "muldo-orchidee-et-ivoire": {
    "parentPairs": [
      [
        "muldo-orchidee",
        "muldo-ivoire"
      ]
    ],
    "children": [
      "muldo-prune"
    ]
  },
  "muldo-indigo-et-ivoire": {
    "parentPairs": [
      [
        "muldo-indigo",
        "muldo-ivoire"
      ]
    ],
    "children": [
      "muldo-prune"
    ]
  },
  "muldo-ebene-et-ivoire": {
    "parentPairs": [
      [
        "muldo-ebene",
        "muldo-ivoire"
      ]
    ],
    "children": [
      "muldo-prune"
    ]
  },
  "muldo-dore-et-ivoire": {
    "parentPairs": [
      [
        "muldo-dore",
        "muldo-ivoire"
      ]
    ],
    "children": [
      "muldo-emeraude"
    ]
  },
  "muldo-roux-et-ivoire": {
    "parentPairs": [
      [
        "muldo-roux",
        "muldo-ivoire"
      ]
    ],
    "children": [
      "muldo-emeraude"
    ]
  },
  "muldo-amande-et-ivoire": {
    "parentPairs": [
      [
        "muldo-amande",
        "muldo-ivoire"
      ]
    ],
    "children": [
      "muldo-emeraude"
    ]
  },
  "muldo-turquoise-et-ivoire": {
    "parentPairs": [
      [
        "muldo-turquoise",
        "muldo-ivoire"
      ]
    ],
    "children": [
      "muldo-emeraude"
    ]
  },
  "muldo-turquoise-et-pourpre": {
    "parentPairs": [
      [
        "muldo-turquoise",
        "muldo-pourpre"
      ]
    ],
    "children": [
      "muldo-prune"
    ]
  },
  "muldo-turquoise-et-orchidee": {
    "parentPairs": [
      [
        "muldo-turquoise",
        "muldo-orchidee"
      ]
    ],
    "children": [
      "muldo-prune"
    ]
  },
  "muldo-turquoise-et-indigo": {
    "parentPairs": [
      [
        "muldo-turquoise",
        "muldo-indigo"
      ]
    ],
    "children": [
      "muldo-prune"
    ]
  },
  "muldo-turquoise-et-ebene": {
    "parentPairs": [
      [
        "muldo-turquoise",
        "muldo-ebene"
      ]
    ],
    "children": [
      "muldo-prune"
    ]
  },
  "muldo-turquoise-et-roux": {
    "parentPairs": [
      [
        "muldo-turquoise",
        "muldo-roux"
      ]
    ],
    "children": [
      "muldo-emeraude"
    ]
  },
  "muldo-turquoise-et-amande": {
    "parentPairs": [
      [
        "muldo-turquoise",
        "muldo-amande"
      ]
    ],
    "children": [
      "muldo-emeraude"
    ]
  },
  "muldo-turquoise-et-dore": {
    "parentPairs": [
      [
        "muldo-turquoise",
        "muldo-dore"
      ]
    ],
    "children": [
      "muldo-emeraude"
    ]
  },
  "muldo-prune": {
    "parentPairs": [
      [
        "muldo-ebene-et-ivoire",
        "muldo-turquoise-et-pourpre"
      ],
      [
        "muldo-indigo-et-ivoire",
        "muldo-turquoise-et-orchidee"
      ],
      [
        "muldo-orchidee-et-ivoire",
        "muldo-turquoise-et-indigo"
      ],
      [
        "muldo-pourpre-et-ivoire",
        "muldo-turquoise-et-ebene"
      ]
    ],
    "children": [
      "muldo-aigue-marine-et-prune",
      "muldo-ambre-et-prune",
      "muldo-azur-et-prune",
      "muldo-corail-et-prune",
      "muldo-prune-et-amande",
      "muldo-prune-et-dore",
      "muldo-prune-et-ebene",
      "muldo-prune-et-emeraude",
      "muldo-prune-et-indigo",
      "muldo-prune-et-ivoire",
      "muldo-prune-et-orchidee",
      "muldo-prune-et-pourpre",
      "muldo-prune-et-roux",
      "muldo-prune-et-turquoise"
    ]
  },
  "muldo-emeraude": {
    "parentPairs": [
      [
        "muldo-turquoise-et-ivoire",
        "muldo-turquoise-et-dore"
      ],
      [
        "muldo-turquoise-et-ivoire",
        "muldo-turquoise-et-roux"
      ],
      [
        "muldo-turquoise-et-ivoire",
        "muldo-amande-et-ivoire"
      ],
      [
        "muldo-turquoise-et-ivoire",
        "muldo-dore-et-ivoire"
      ],
      [
        "muldo-turquoise-et-ivoire",
        "muldo-turquoise-et-amande"
      ],
      [
        "muldo-turquoise-et-amande",
        "muldo-roux-et-ivoire"
      ],
      [
        "muldo-turquoise-et-amande",
        "muldo-dore-et-ivoire"
      ],
      [
        "muldo-dore-et-ivoire",
        "muldo-turquoise-et-roux"
      ]
    ],
    "children": [
      "muldo-aigue-marine-et-emeraude",
      "muldo-amande-et-emeraude",
      "muldo-ambre-et-emeraude",
      "muldo-azur-et-emeraude",
      "muldo-corail-et-emeraude",
      "muldo-dore-et-emeraude",
      "muldo-ebene-et-emeraude",
      "muldo-indigo-et-emeraude",
      "muldo-ivoire-et-emeraude",
      "muldo-orchidee-et-emeraude",
      "muldo-pourpre-et-emeraude",
      "muldo-prune-et-emeraude",
      "muldo-roux-et-emeraude",
      "muldo-turquoise-et-emeraude"
    ]
  },
  "muldo-prune-et-pourpre": {
    "parentPairs": [
      [
        "muldo-prune",
        "muldo-pourpre"
      ]
    ],
    "children": [
      "muldo-aigue-marine",
      "muldo-corail"
    ]
  },
  "muldo-prune-et-orchidee": {
    "parentPairs": [
      [
        "muldo-prune",
        "muldo-orchidee"
      ]
    ],
    "children": [
      "muldo-aigue-marine",
      "muldo-corail"
    ]
  },
  "muldo-prune-et-indigo": {
    "parentPairs": [
      [
        "muldo-prune",
        "muldo-indigo"
      ]
    ],
    "children": [
      "muldo-aigue-marine",
      "muldo-corail"
    ]
  },
  "muldo-prune-et-ebene": {
    "parentPairs": [
      [
        "muldo-prune",
        "muldo-ebene"
      ]
    ],
    "children": [
      "muldo-aigue-marine",
      "muldo-corail"
    ]
  },
  "muldo-prune-et-dore": {
    "parentPairs": [
      [
        "muldo-prune",
        "muldo-dore"
      ]
    ],
    "children": [
      "muldo-aigue-marine",
      "muldo-corail"
    ]
  },
  "muldo-prune-et-roux": {
    "parentPairs": [
      [
        "muldo-prune",
        "muldo-roux"
      ]
    ],
    "children": [
      "muldo-azur",
      "muldo-corail"
    ]
  },
  "muldo-prune-et-amande": {
    "parentPairs": [
      [
        "muldo-prune",
        "muldo-amande"
      ]
    ],
    "children": [
      "muldo-azur",
      "muldo-corail"
    ]
  },
  "muldo-prune-et-ivoire": {
    "parentPairs": [
      [
        "muldo-prune",
        "muldo-ivoire"
      ]
    ],
    "children": [
      "muldo-azur",
      "muldo-corail"
    ]
  },
  "muldo-prune-et-turquoise": {
    "parentPairs": [
      [
        "muldo-prune",
        "muldo-turquoise"
      ]
    ],
    "children": [
      "muldo-azur",
      "muldo-corail"
    ]
  },
  "muldo-prune-et-emeraude": {
    "parentPairs": [
      [
        "muldo-prune",
        "muldo-emeraude"
      ]
    ],
    "children": [
      "muldo-ambre",
      "muldo-corail"
    ]
  },
  "muldo-pourpre-et-emeraude": {
    "parentPairs": [
      [
        "muldo-pourpre",
        "muldo-emeraude"
      ]
    ],
    "children": [
      "muldo-ambre",
      "muldo-azur"
    ]
  },
  "muldo-orchidee-et-emeraude": {
    "parentPairs": [
      [
        "muldo-orchidee",
        "muldo-emeraude"
      ]
    ],
    "children": [
      "muldo-ambre",
      "muldo-azur"
    ]
  },
  "muldo-indigo-et-emeraude": {
    "parentPairs": [
      [
        "muldo-indigo",
        "muldo-emeraude"
      ]
    ],
    "children": [
      "muldo-ambre",
      "muldo-azur"
    ]
  },
  "muldo-ebene-et-emeraude": {
    "parentPairs": [
      [
        "muldo-ebene",
        "muldo-emeraude"
      ]
    ],
    "children": [
      "muldo-ambre",
      "muldo-azur"
    ]
  },
  "muldo-dore-et-emeraude": {
    "parentPairs": [
      [
        "muldo-dore",
        "muldo-emeraude"
      ]
    ],
    "children": [
      "muldo-ambre",
      "muldo-azur"
    ]
  },
  "muldo-roux-et-emeraude": {
    "parentPairs": [
      [
        "muldo-roux",
        "muldo-emeraude"
      ]
    ],
    "children": [
      "muldo-aigue-marine",
      "muldo-ambre"
    ]
  },
  "muldo-amande-et-emeraude": {
    "parentPairs": [
      [
        "muldo-amande",
        "muldo-emeraude"
      ]
    ],
    "children": [
      "muldo-aigue-marine",
      "muldo-ambre"
    ]
  },
  "muldo-ivoire-et-emeraude": {
    "parentPairs": [
      [
        "muldo-ivoire",
        "muldo-emeraude"
      ]
    ],
    "children": [
      "muldo-aigue-marine",
      "muldo-ambre"
    ]
  },
  "muldo-turquoise-et-emeraude": {
    "parentPairs": [
      [
        "muldo-turquoise",
        "muldo-emeraude"
      ]
    ],
    "children": [
      "muldo-aigue-marine",
      "muldo-ambre"
    ]
  },
  "muldo-ambre": {
    "parentPairs": [
      [
        "muldo-pourpre-et-emeraude",
        "muldo-roux-et-emeraude"
      ],
      [
        "muldo-orchidee-et-emeraude",
        "muldo-amande-et-emeraude"
      ],
      [
        "muldo-indigo-et-emeraude",
        "muldo-ivoire-et-emeraude"
      ],
      [
        "muldo-ebene-et-emeraude",
        "muldo-turquoise-et-emeraude"
      ],
      [
        "muldo-dore-et-emeraude",
        "muldo-prune-et-emeraude"
      ]
    ],
    "children": [
      "muldo-ambre-et-aigue-marine",
      "muldo-ambre-et-amande",
      "muldo-ambre-et-azur",
      "muldo-ambre-et-corail",
      "muldo-ambre-et-dore",
      "muldo-ambre-et-ebene",
      "muldo-ambre-et-emeraude",
      "muldo-ambre-et-indigo",
      "muldo-ambre-et-ivoire",
      "muldo-ambre-et-orchidee",
      "muldo-ambre-et-pourpre",
      "muldo-ambre-et-prune",
      "muldo-ambre-et-roux",
      "muldo-ambre-et-turquoise"
    ]
  },
  "muldo-corail": {
    "parentPairs": [
      [
        "muldo-prune-et-pourpre",
        "muldo-prune-et-roux"
      ],
      [
        "muldo-prune-et-orchidee",
        "muldo-prune-et-amande"
      ],
      [
        "muldo-prune-et-indigo",
        "muldo-prune-et-ivoire"
      ],
      [
        "muldo-prune-et-ebene",
        "muldo-prune-et-turquoise"
      ],
      [
        "muldo-prune-et-dore",
        "muldo-prune-et-emeraude"
      ]
    ],
    "children": [
      "muldo-ambre-et-corail",
      "muldo-corail-et-aigue-marine",
      "muldo-corail-et-amande",
      "muldo-corail-et-azur",
      "muldo-corail-et-dore",
      "muldo-corail-et-ebene",
      "muldo-corail-et-emeraude",
      "muldo-corail-et-indigo",
      "muldo-corail-et-ivoire",
      "muldo-corail-et-orchidee",
      "muldo-corail-et-pourpre",
      "muldo-corail-et-prune",
      "muldo-corail-et-roux",
      "muldo-corail-et-turquoise"
    ]
  },
  "muldo-azur": {
    "parentPairs": [
      [
        "muldo-pourpre-et-emeraude",
        "muldo-prune-et-roux"
      ],
      [
        "muldo-orchidee-et-emeraude",
        "muldo-prune-et-amande"
      ],
      [
        "muldo-indigo-et-emeraude",
        "muldo-prune-et-ivoire"
      ],
      [
        "muldo-ebene-et-emeraude",
        "muldo-prune-et-turquoise"
      ],
      [
        "muldo-dore-et-emeraude",
        "muldo-prune-et-ivoire"
      ]
    ],
    "children": [
      "muldo-ambre-et-azur",
      "muldo-azur-et-aigue-marine",
      "muldo-azur-et-amande",
      "muldo-azur-et-dore",
      "muldo-azur-et-ebene",
      "muldo-azur-et-emeraude",
      "muldo-azur-et-indigo",
      "muldo-azur-et-ivoire",
      "muldo-azur-et-orchidee",
      "muldo-azur-et-pourpre",
      "muldo-azur-et-prune",
      "muldo-azur-et-roux",
      "muldo-azur-et-turquoise",
      "muldo-corail-et-azur"
    ]
  },
  "muldo-aigue-marine": {
    "parentPairs": [
      [
        "muldo-prune-et-pourpre",
        "muldo-roux-et-emeraude"
      ],
      [
        "muldo-prune-et-orchidee",
        "muldo-amande-et-emeraude"
      ],
      [
        "muldo-prune-et-indigo",
        "muldo-ivoire-et-emeraude"
      ],
      [
        "muldo-prune-et-ebene",
        "muldo-turquoise-et-emeraude"
      ],
      [
        "muldo-prune-et-dore",
        "muldo-turquoise-et-emeraude"
      ]
    ],
    "children": [
      "muldo-aigue-marine-et-amande",
      "muldo-aigue-marine-et-dore",
      "muldo-aigue-marine-et-ebene",
      "muldo-aigue-marine-et-emeraude",
      "muldo-aigue-marine-et-indigo",
      "muldo-aigue-marine-et-ivoire",
      "muldo-aigue-marine-et-orchidee",
      "muldo-aigue-marine-et-pourpre",
      "muldo-aigue-marine-et-prune",
      "muldo-aigue-marine-et-roux",
      "muldo-aigue-marine-et-turquoise",
      "muldo-ambre-et-aigue-marine",
      "muldo-azur-et-aigue-marine",
      "muldo-corail-et-aigue-marine"
    ]
  },
  "muldo-ambre-et-dore": {
    "parentPairs": [
      [
        "muldo-ambre",
        "muldo-dore"
      ]
    ],
    "children": []
  },
  "muldo-ambre-et-ebene": {
    "parentPairs": [
      [
        "muldo-ambre",
        "muldo-ebene"
      ]
    ],
    "children": []
  },
  "muldo-ambre-et-indigo": {
    "parentPairs": [
      [
        "muldo-ambre",
        "muldo-indigo"
      ]
    ],
    "children": []
  },
  "muldo-ambre-et-pourpre": {
    "parentPairs": [
      [
        "muldo-ambre",
        "muldo-pourpre"
      ]
    ],
    "children": []
  },
  "muldo-ambre-et-orchidee": {
    "parentPairs": [
      [
        "muldo-ambre",
        "muldo-orchidee"
      ]
    ],
    "children": []
  },
  "muldo-ambre-et-amande": {
    "parentPairs": [
      [
        "muldo-ambre",
        "muldo-amande"
      ]
    ],
    "children": []
  },
  "muldo-ambre-et-roux": {
    "parentPairs": [
      [
        "muldo-ambre",
        "muldo-roux"
      ]
    ],
    "children": []
  },
  "muldo-ambre-et-ivoire": {
    "parentPairs": [
      [
        "muldo-ambre",
        "muldo-ivoire"
      ]
    ],
    "children": []
  },
  "muldo-ambre-et-turquoise": {
    "parentPairs": [
      [
        "muldo-ambre",
        "muldo-turquoise"
      ]
    ],
    "children": []
  },
  "muldo-ambre-et-emeraude": {
    "parentPairs": [
      [
        "muldo-ambre",
        "muldo-emeraude"
      ]
    ],
    "children": []
  },
  "muldo-ambre-et-prune": {
    "parentPairs": [
      [
        "muldo-ambre",
        "muldo-prune"
      ]
    ],
    "children": []
  },
  "muldo-ambre-et-corail": {
    "parentPairs": [
      [
        "muldo-ambre",
        "muldo-corail"
      ]
    ],
    "children": []
  },
  "muldo-ambre-et-azur": {
    "parentPairs": [
      [
        "muldo-ambre",
        "muldo-azur"
      ]
    ],
    "children": []
  },
  "muldo-ambre-et-aigue-marine": {
    "parentPairs": [
      [
        "muldo-ambre",
        "muldo-aigue-marine"
      ]
    ],
    "children": []
  },
  "muldo-corail-et-dore": {
    "parentPairs": [
      [
        "muldo-corail",
        "muldo-dore"
      ]
    ],
    "children": []
  },
  "muldo-corail-et-ebene": {
    "parentPairs": [
      [
        "muldo-corail",
        "muldo-ebene"
      ]
    ],
    "children": []
  },
  "muldo-corail-et-indigo": {
    "parentPairs": [
      [
        "muldo-corail",
        "muldo-indigo"
      ]
    ],
    "children": []
  },
  "muldo-corail-et-pourpre": {
    "parentPairs": [
      [
        "muldo-corail",
        "muldo-pourpre"
      ]
    ],
    "children": []
  },
  "muldo-corail-et-orchidee": {
    "parentPairs": [
      [
        "muldo-corail",
        "muldo-orchidee"
      ]
    ],
    "children": []
  },
  "muldo-corail-et-amande": {
    "parentPairs": [
      [
        "muldo-corail",
        "muldo-amande"
      ]
    ],
    "children": []
  },
  "muldo-corail-et-roux": {
    "parentPairs": [
      [
        "muldo-corail",
        "muldo-roux"
      ]
    ],
    "children": []
  },
  "muldo-corail-et-ivoire": {
    "parentPairs": [
      [
        "muldo-corail",
        "muldo-ivoire"
      ]
    ],
    "children": []
  },
  "muldo-corail-et-turquoise": {
    "parentPairs": [
      [
        "muldo-corail",
        "muldo-turquoise"
      ]
    ],
    "children": []
  },
  "muldo-corail-et-emeraude": {
    "parentPairs": [
      [
        "muldo-corail",
        "muldo-emeraude"
      ]
    ],
    "children": []
  },
  "muldo-corail-et-prune": {
    "parentPairs": [
      [
        "muldo-corail",
        "muldo-prune"
      ]
    ],
    "children": []
  },
  "muldo-corail-et-azur": {
    "parentPairs": [
      [
        "muldo-corail",
        "muldo-azur"
      ]
    ],
    "children": []
  },
  "muldo-corail-et-aigue-marine": {
    "parentPairs": [
      [
        "muldo-corail",
        "muldo-aigue-marine"
      ]
    ],
    "children": []
  },
  "muldo-azur-et-dore": {
    "parentPairs": [
      [
        "muldo-azur",
        "muldo-dore"
      ]
    ],
    "children": []
  },
  "muldo-azur-et-ebene": {
    "parentPairs": [
      [
        "muldo-azur",
        "muldo-ebene"
      ]
    ],
    "children": []
  },
  "muldo-azur-et-indigo": {
    "parentPairs": [
      [
        "muldo-azur",
        "muldo-indigo"
      ]
    ],
    "children": []
  },
  "muldo-azur-et-pourpre": {
    "parentPairs": [
      [
        "muldo-azur",
        "muldo-pourpre"
      ]
    ],
    "children": []
  },
  "muldo-azur-et-orchidee": {
    "parentPairs": [
      [
        "muldo-azur",
        "muldo-orchidee"
      ]
    ],
    "children": []
  },
  "muldo-azur-et-amande": {
    "parentPairs": [
      [
        "muldo-azur",
        "muldo-amande"
      ]
    ],
    "children": []
  },
  "muldo-azur-et-roux": {
    "parentPairs": [
      [
        "muldo-azur",
        "muldo-roux"
      ]
    ],
    "children": []
  },
  "muldo-azur-et-ivoire": {
    "parentPairs": [
      [
        "muldo-azur",
        "muldo-ivoire"
      ]
    ],
    "children": []
  },
  "muldo-azur-et-turquoise": {
    "parentPairs": [
      [
        "muldo-azur",
        "muldo-turquoise"
      ]
    ],
    "children": []
  },
  "muldo-azur-et-emeraude": {
    "parentPairs": [
      [
        "muldo-azur",
        "muldo-emeraude"
      ]
    ],
    "children": []
  },
  "muldo-azur-et-prune": {
    "parentPairs": [
      [
        "muldo-azur",
        "muldo-prune"
      ]
    ],
    "children": []
  },
  "muldo-azur-et-aigue-marine": {
    "parentPairs": [
      [
        "muldo-azur",
        "muldo-aigue-marine"
      ]
    ],
    "children": []
  },
  "muldo-aigue-marine-et-dore": {
    "parentPairs": [
      [
        "muldo-aigue-marine",
        "muldo-dore"
      ]
    ],
    "children": []
  },
  "muldo-aigue-marine-et-ebene": {
    "parentPairs": [
      [
        "muldo-aigue-marine",
        "muldo-ebene"
      ]
    ],
    "children": []
  },
  "muldo-aigue-marine-et-indigo": {
    "parentPairs": [
      [
        "muldo-aigue-marine",
        "muldo-indigo"
      ]
    ],
    "children": []
  },
  "muldo-aigue-marine-et-pourpre": {
    "parentPairs": [
      [
        "muldo-aigue-marine",
        "muldo-pourpre"
      ]
    ],
    "children": []
  },
  "muldo-aigue-marine-et-orchidee": {
    "parentPairs": [
      [
        "muldo-aigue-marine",
        "muldo-orchidee"
      ]
    ],
    "children": []
  },
  "muldo-aigue-marine-et-amande": {
    "parentPairs": [
      [
        "muldo-aigue-marine",
        "muldo-amande"
      ]
    ],
    "children": []
  },
  "muldo-aigue-marine-et-roux": {
    "parentPairs": [
      [
        "muldo-aigue-marine",
        "muldo-roux"
      ]
    ],
    "children": []
  },
  "muldo-aigue-marine-et-ivoire": {
    "parentPairs": [
      [
        "muldo-aigue-marine",
        "muldo-ivoire"
      ]
    ],
    "children": []
  },
  "muldo-aigue-marine-et-turquoise": {
    "parentPairs": [
      [
        "muldo-aigue-marine",
        "muldo-turquoise"
      ]
    ],
    "children": []
  },
  "muldo-aigue-marine-et-emeraude": {
    "parentPairs": [
      [
        "muldo-aigue-marine",
        "muldo-emeraude"
      ]
    ],
    "children": []
  },
  "muldo-aigue-marine-et-prune": {
    "parentPairs": [
      [
        "muldo-aigue-marine",
        "muldo-prune"
      ]
    ],
    "children": []
  },
  "volkorne-ebene": {
    "parentPairs": [],
    "children": [
      "volkorne-amande-et-ebene",
      "volkorne-amethyste-et-ebene",
      "volkorne-dore-et-ebene",
      "volkorne-emeraude-et-ebene",
      "volkorne-indigo-et-ebene",
      "volkorne-ivoire-et-ebene",
      "volkorne-jade-et-ebene",
      "volkorne-orchidee-et-ebene",
      "volkorne-pourpre-et-ebene",
      "volkorne-prune-et-ebene",
      "volkorne-roux-et-ebene",
      "volkorne-rubis-et-ebene",
      "volkorne-saphir-et-ebene",
      "volkorne-turquoise-et-ebene"
    ]
  },
  "volkorne-indigo": {
    "parentPairs": [],
    "children": [
      "volkorne-amande-et-indigo",
      "volkorne-amethyste-et-indigo",
      "volkorne-dore-et-indigo",
      "volkorne-emeraude-et-indigo",
      "volkorne-indigo-et-ebene",
      "volkorne-ivoire-et-indigo",
      "volkorne-jade-et-indigo",
      "volkorne-orchidee-et-indigo",
      "volkorne-pourpre-et-indigo",
      "volkorne-prune-et-indigo",
      "volkorne-roux-et-indigo",
      "volkorne-rubis-et-indigo",
      "volkorne-saphir-et-indigo",
      "volkorne-turquoise-et-indigo"
    ]
  },
  "volkorne-pourpre": {
    "parentPairs": [],
    "children": [
      "volkorne-amande-et-pourpre",
      "volkorne-amethyste-et-pourpre",
      "volkorne-dore-et-pourpre",
      "volkorne-emeraude-et-pourpre",
      "volkorne-ivoire-et-pourpre",
      "volkorne-jade-et-pourpre",
      "volkorne-pourpre-et-ebene",
      "volkorne-pourpre-et-indigo",
      "volkorne-pourpre-et-orchidee",
      "volkorne-prune-et-pourpre",
      "volkorne-roux-et-pourpre",
      "volkorne-rubis-et-pourpre",
      "volkorne-saphir-et-pourpre",
      "volkorne-turquoise-et-pourpre"
    ]
  },
  "volkorne-orchidee": {
    "parentPairs": [],
    "children": [
      "volkorne-amande-et-orchidee",
      "volkorne-amethyste-et-orchidee",
      "volkorne-dore-et-orchidee",
      "volkorne-emeraude-et-orchidee",
      "volkorne-ivoire-et-orchidee",
      "volkorne-jade-et-orchidee",
      "volkorne-orchidee-et-ebene",
      "volkorne-orchidee-et-indigo",
      "volkorne-pourpre-et-orchidee",
      "volkorne-prune-et-orchidee",
      "volkorne-roux-et-orchidee",
      "volkorne-rubis-et-orchidee",
      "volkorne-saphir-et-orchidee",
      "volkorne-turquoise-et-orchidee"
    ]
  },
  "volkorne-pourpre-et-orchidee": {
    "parentPairs": [
      [
        "volkorne-pourpre",
        "volkorne-orchidee"
      ]
    ],
    "children": [
      "volkorne-roux",
      "volkorne-turquoise"
    ]
  },
  "volkorne-pourpre-et-indigo": {
    "parentPairs": [
      [
        "volkorne-pourpre",
        "volkorne-indigo"
      ]
    ],
    "children": [
      "volkorne-ivoire",
      "volkorne-roux"
    ]
  },
  "volkorne-pourpre-et-ebene": {
    "parentPairs": [
      [
        "volkorne-pourpre",
        "volkorne-ebene"
      ]
    ],
    "children": [
      "volkorne-amande",
      "volkorne-roux"
    ]
  },
  "volkorne-orchidee-et-indigo": {
    "parentPairs": [
      [
        "volkorne-orchidee",
        "volkorne-indigo"
      ]
    ],
    "children": [
      "volkorne-ivoire",
      "volkorne-turquoise"
    ]
  },
  "volkorne-orchidee-et-ebene": {
    "parentPairs": [
      [
        "volkorne-orchidee",
        "volkorne-ebene"
      ]
    ],
    "children": [
      "volkorne-amande",
      "volkorne-turquoise"
    ]
  },
  "volkorne-indigo-et-ebene": {
    "parentPairs": [
      [
        "volkorne-indigo",
        "volkorne-ebene"
      ]
    ],
    "children": [
      "volkorne-amande",
      "volkorne-ivoire"
    ]
  },
  "volkorne-roux": {
    "parentPairs": [
      [
        "volkorne-pourpre-et-orchidee",
        "volkorne-pourpre-et-indigo"
      ],
      [
        "volkorne-pourpre-et-orchidee",
        "volkorne-pourpre-et-ebene"
      ],
      [
        "volkorne-pourpre-et-ebene",
        "volkorne-pourpre-et-indigo"
      ]
    ],
    "children": [
      "volkorne-amande-et-roux",
      "volkorne-amethyste-et-roux",
      "volkorne-dore-et-roux",
      "volkorne-emeraude-et-roux",
      "volkorne-jade-et-roux",
      "volkorne-prune-et-roux",
      "volkorne-roux-et-ebene",
      "volkorne-roux-et-indigo",
      "volkorne-roux-et-ivoire",
      "volkorne-roux-et-orchidee",
      "volkorne-roux-et-pourpre",
      "volkorne-roux-et-turquoise",
      "volkorne-rubis-et-roux",
      "volkorne-saphir-et-roux"
    ]
  },
  "volkorne-amande": {
    "parentPairs": [
      [
        "volkorne-pourpre-et-ebene",
        "volkorne-orchidee-et-ebene"
      ],
      [
        "volkorne-pourpre-et-ebene",
        "volkorne-indigo-et-ebene"
      ],
      [
        "volkorne-indigo-et-ebene",
        "volkorne-orchidee-et-ebene"
      ]
    ],
    "children": [
      "volkorne-amande-et-ebene",
      "volkorne-amande-et-indigo",
      "volkorne-amande-et-ivoire",
      "volkorne-amande-et-orchidee",
      "volkorne-amande-et-pourpre",
      "volkorne-amande-et-roux",
      "volkorne-amande-et-turquoise",
      "volkorne-amethyste-et-amande",
      "volkorne-dore-et-amande",
      "volkorne-emeraude-et-amande",
      "volkorne-jade-et-amande",
      "volkorne-prune-et-amande",
      "volkorne-rubis-et-amande",
      "volkorne-saphir-et-amande"
    ]
  },
  "volkorne-ivoire": {
    "parentPairs": [
      [
        "volkorne-pourpre-et-indigo",
        "volkorne-indigo-et-ebene"
      ],
      [
        "volkorne-pourpre-et-indigo",
        "volkorne-orchidee-et-indigo"
      ],
      [
        "volkorne-orchidee-et-indigo",
        "volkorne-indigo-et-ebene"
      ]
    ],
    "children": [
      "volkorne-amande-et-ivoire",
      "volkorne-amethyste-et-ivoire",
      "volkorne-dore-et-ivoire",
      "volkorne-emeraude-et-ivoire",
      "volkorne-ivoire-et-ebene",
      "volkorne-ivoire-et-indigo",
      "volkorne-ivoire-et-orchidee",
      "volkorne-ivoire-et-pourpre",
      "volkorne-ivoire-et-turquoise",
      "volkorne-jade-et-ivoire",
      "volkorne-prune-et-ivoire",
      "volkorne-roux-et-ivoire",
      "volkorne-rubis-et-ivoire",
      "volkorne-saphir-et-ivoire"
    ]
  },
  "volkorne-turquoise": {
    "parentPairs": [
      [
        "volkorne-pourpre-et-orchidee",
        "volkorne-orchidee-et-ebene"
      ],
      [
        "volkorne-pourpre-et-orchidee",
        "volkorne-orchidee-et-indigo"
      ],
      [
        "volkorne-orchidee-et-indigo",
        "volkorne-orchidee-et-ebene"
      ]
    ],
    "children": [
      "volkorne-amande-et-turquoise",
      "volkorne-amethyste-et-turquoise",
      "volkorne-dore-et-turquoise",
      "volkorne-emeraude-et-turquoise",
      "volkorne-ivoire-et-turquoise",
      "volkorne-jade-et-turquoise",
      "volkorne-prune-et-turquoise",
      "volkorne-roux-et-turquoise",
      "volkorne-rubis-et-turquoise",
      "volkorne-saphir-et-turquoise",
      "volkorne-turquoise-et-ebene",
      "volkorne-turquoise-et-indigo",
      "volkorne-turquoise-et-orchidee",
      "volkorne-turquoise-et-pourpre"
    ]
  },
  "volkorne-amande-et-pourpre": {
    "parentPairs": [
      [
        "volkorne-amande",
        "volkorne-pourpre"
      ]
    ],
    "children": [
      "volkorne-prune"
    ]
  },
  "volkorne-amande-et-orchidee": {
    "parentPairs": [
      [
        "volkorne-amande",
        "volkorne-orchidee"
      ]
    ],
    "children": [
      "volkorne-prune"
    ]
  },
  "volkorne-amande-et-indigo": {
    "parentPairs": [
      [
        "volkorne-amande",
        "volkorne-indigo"
      ]
    ],
    "children": [
      "volkorne-prune"
    ]
  },
  "volkorne-amande-et-ebene": {
    "parentPairs": [
      [
        "volkorne-amande",
        "volkorne-ebene"
      ]
    ],
    "children": [
      "volkorne-prune"
    ]
  },
  "volkorne-amande-et-roux": {
    "parentPairs": [
      [
        "volkorne-amande",
        "volkorne-roux"
      ]
    ],
    "children": [
      "volkorne-prune"
    ]
  },
  "volkorne-amande-et-ivoire": {
    "parentPairs": [
      [
        "volkorne-amande",
        "volkorne-ivoire"
      ]
    ],
    "children": [
      "volkorne-emeraude",
      "volkorne-prune"
    ]
  },
  "volkorne-amande-et-turquoise": {
    "parentPairs": [
      [
        "volkorne-amande",
        "volkorne-turquoise"
      ]
    ],
    "children": [
      "volkorne-emeraude",
      "volkorne-prune"
    ]
  },
  "volkorne-roux-et-pourpre": {
    "parentPairs": [
      [
        "volkorne-roux",
        "volkorne-pourpre"
      ]
    ],
    "children": [
      "volkorne-prune"
    ]
  },
  "volkorne-roux-et-orchidee": {
    "parentPairs": [
      [
        "volkorne-roux",
        "volkorne-orchidee"
      ]
    ],
    "children": [
      "volkorne-prune"
    ]
  },
  "volkorne-roux-et-indigo": {
    "parentPairs": [
      [
        "volkorne-roux",
        "volkorne-indigo"
      ]
    ],
    "children": [
      "volkorne-prune"
    ]
  },
  "volkorne-roux-et-ebene": {
    "parentPairs": [
      [
        "volkorne-roux",
        "volkorne-ebene"
      ]
    ],
    "children": [
      "volkorne-prune"
    ]
  },
  "volkorne-roux-et-ivoire": {
    "parentPairs": [
      [
        "volkorne-roux",
        "volkorne-ivoire"
      ]
    ],
    "children": [
      "volkorne-emeraude",
      "volkorne-prune"
    ]
  },
  "volkorne-roux-et-turquoise": {
    "parentPairs": [
      [
        "volkorne-roux",
        "volkorne-turquoise"
      ]
    ],
    "children": [
      "volkorne-emeraude",
      "volkorne-prune"
    ]
  },
  "volkorne-ivoire-et-pourpre": {
    "parentPairs": [
      [
        "volkorne-ivoire",
        "volkorne-pourpre"
      ]
    ],
    "children": [
      "volkorne-emeraude"
    ]
  },
  "volkorne-ivoire-et-orchidee": {
    "parentPairs": [
      [
        "volkorne-ivoire",
        "volkorne-orchidee"
      ]
    ],
    "children": [
      "volkorne-emeraude"
    ]
  },
  "volkorne-ivoire-et-indigo": {
    "parentPairs": [
      [
        "volkorne-ivoire",
        "volkorne-indigo"
      ]
    ],
    "children": [
      "volkorne-emeraude"
    ]
  },
  "volkorne-ivoire-et-ebene": {
    "parentPairs": [
      [
        "volkorne-ivoire",
        "volkorne-ebene"
      ]
    ],
    "children": [
      "volkorne-emeraude"
    ]
  },
  "volkorne-ivoire-et-turquoise": {
    "parentPairs": [
      [
        "volkorne-ivoire",
        "volkorne-turquoise"
      ]
    ],
    "children": [
      "volkorne-emeraude"
    ]
  },
  "volkorne-turquoise-et-pourpre": {
    "parentPairs": [
      [
        "volkorne-turquoise",
        "volkorne-pourpre"
      ]
    ],
    "children": [
      "volkorne-emeraude"
    ]
  },
  "volkorne-turquoise-et-orchidee": {
    "parentPairs": [
      [
        "volkorne-turquoise",
        "volkorne-orchidee"
      ]
    ],
    "children": [
      "volkorne-emeraude"
    ]
  },
  "volkorne-turquoise-et-indigo": {
    "parentPairs": [
      [
        "volkorne-turquoise",
        "volkorne-indigo"
      ]
    ],
    "children": [
      "volkorne-emeraude"
    ]
  },
  "volkorne-turquoise-et-ebene": {
    "parentPairs": [
      [
        "volkorne-turquoise",
        "volkorne-ebene"
      ]
    ],
    "children": [
      "volkorne-emeraude"
    ]
  },
  "volkorne-prune": {
    "parentPairs": [
      [
        "volkorne-amande-et-roux",
        "volkorne-amande-et-pourpre"
      ],
      [
        "volkorne-amande-et-roux",
        "volkorne-amande-et-orchidee"
      ],
      [
        "volkorne-amande-et-roux",
        "volkorne-amande-et-indigo"
      ],
      [
        "volkorne-amande-et-roux",
        "volkorne-amande-et-ebene"
      ],
      [
        "volkorne-amande-et-roux",
        "volkorne-amande-et-turquoise"
      ],
      [
        "volkorne-amande-et-roux",
        "volkorne-amande-et-ivoire"
      ],
      [
        "volkorne-amande-et-roux",
        "volkorne-roux-et-pourpre"
      ],
      [
        "volkorne-amande-et-roux",
        "volkorne-roux-et-orchidee"
      ],
      [
        "volkorne-amande-et-roux",
        "volkorne-roux-et-indigo"
      ],
      [
        "volkorne-amande-et-roux",
        "volkorne-roux-et-ebene"
      ],
      [
        "volkorne-amande-et-roux",
        "volkorne-roux-et-ivoire"
      ],
      [
        "volkorne-amande-et-roux",
        "volkorne-roux-et-turquoise"
      ]
    ],
    "children": [
      "volkorne-amethyste-et-prune",
      "volkorne-dore-et-prune",
      "volkorne-jade-et-prune",
      "volkorne-prune-et-amande",
      "volkorne-prune-et-ebene",
      "volkorne-prune-et-emeraude",
      "volkorne-prune-et-indigo",
      "volkorne-prune-et-ivoire",
      "volkorne-prune-et-orchidee",
      "volkorne-prune-et-pourpre",
      "volkorne-prune-et-roux",
      "volkorne-prune-et-turquoise",
      "volkorne-rubis-et-prune",
      "volkorne-saphir-et-prune"
    ]
  },
  "volkorne-emeraude": {
    "parentPairs": [
      [
        "volkorne-ivoire-et-turquoise",
        "volkorne-ivoire-et-orchidee"
      ],
      [
        "volkorne-ivoire-et-turquoise",
        "volkorne-ivoire-et-indigo"
      ],
      [
        "volkorne-ivoire-et-turquoise",
        "volkorne-ivoire-et-ebene"
      ],
      [
        "volkorne-ivoire-et-turquoise",
        "volkorne-ivoire-et-pourpre"
      ],
      [
        "volkorne-ivoire-et-turquoise",
        "volkorne-amande-et-ivoire"
      ],
      [
        "volkorne-ivoire-et-turquoise",
        "volkorne-roux-et-ivoire"
      ],
      [
        "volkorne-ivoire-et-turquoise",
        "volkorne-roux-et-turquoise"
      ],
      [
        "volkorne-ivoire-et-turquoise",
        "volkorne-turquoise-et-orchidee"
      ],
      [
        "volkorne-ivoire-et-turquoise",
        "volkorne-turquoise-et-pourpre"
      ],
      [
        "volkorne-ivoire-et-turquoise",
        "volkorne-turquoise-et-indigo"
      ],
      [
        "volkorne-ivoire-et-turquoise",
        "volkorne-turquoise-et-ebene"
      ],
      [
        "volkorne-ivoire-et-turquoise",
        "volkorne-amande-et-turquoise"
      ]
    ],
    "children": [
      "volkorne-amethyste-et-emeraude",
      "volkorne-dore-et-emeraude",
      "volkorne-emeraude-et-amande",
      "volkorne-emeraude-et-ebene",
      "volkorne-emeraude-et-indigo",
      "volkorne-emeraude-et-ivoire",
      "volkorne-emeraude-et-orchidee",
      "volkorne-emeraude-et-pourpre",
      "volkorne-emeraude-et-roux",
      "volkorne-emeraude-et-turquoise",
      "volkorne-jade-et-emeraude",
      "volkorne-prune-et-emeraude",
      "volkorne-rubis-et-emeraude",
      "volkorne-saphir-et-emeraude"
    ]
  },
  "volkorne-prune-et-pourpre": {
    "parentPairs": [
      [
        "volkorne-prune",
        "volkorne-pourpre"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-prune-et-orchidee": {
    "parentPairs": [
      [
        "volkorne-prune",
        "volkorne-orchidee"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-prune-et-indigo": {
    "parentPairs": [
      [
        "volkorne-prune",
        "volkorne-indigo"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-prune-et-ebene": {
    "parentPairs": [
      [
        "volkorne-prune",
        "volkorne-ebene"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-prune-et-amande": {
    "parentPairs": [
      [
        "volkorne-prune",
        "volkorne-amande"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-prune-et-roux": {
    "parentPairs": [
      [
        "volkorne-prune",
        "volkorne-roux"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-prune-et-ivoire": {
    "parentPairs": [
      [
        "volkorne-prune",
        "volkorne-ivoire"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-prune-et-turquoise": {
    "parentPairs": [
      [
        "volkorne-prune",
        "volkorne-turquoise"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-prune-et-emeraude": {
    "parentPairs": [
      [
        "volkorne-prune",
        "volkorne-emeraude"
      ]
    ],
    "children": [
      "volkorne-amethyste",
      "volkorne-jade",
      "volkorne-rubis",
      "volkorne-saphir"
    ]
  },
  "volkorne-emeraude-et-pourpre": {
    "parentPairs": [
      [
        "volkorne-emeraude",
        "volkorne-pourpre"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-emeraude-et-orchidee": {
    "parentPairs": [
      [
        "volkorne-emeraude",
        "volkorne-orchidee"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-emeraude-et-indigo": {
    "parentPairs": [
      [
        "volkorne-emeraude",
        "volkorne-indigo"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-emeraude-et-ebene": {
    "parentPairs": [
      [
        "volkorne-emeraude",
        "volkorne-ebene"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-emeraude-et-amande": {
    "parentPairs": [
      [
        "volkorne-emeraude",
        "volkorne-amande"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-emeraude-et-roux": {
    "parentPairs": [
      [
        "volkorne-emeraude",
        "volkorne-roux"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-emeraude-et-ivoire": {
    "parentPairs": [
      [
        "volkorne-emeraude",
        "volkorne-ivoire"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-emeraude-et-turquoise": {
    "parentPairs": [
      [
        "volkorne-emeraude",
        "volkorne-turquoise"
      ]
    ],
    "children": [
      "volkorne-dore"
    ]
  },
  "volkorne-dore": {
    "parentPairs": [
      [
        "volkorne-prune-et-pourpre",
        "volkorne-emeraude-et-roux"
      ],
      [
        "volkorne-prune-et-orchidee",
        "volkorne-emeraude-et-turquoise"
      ],
      [
        "volkorne-prune-et-indigo",
        "volkorne-emeraude-et-ivoire"
      ],
      [
        "volkorne-prune-et-ebene",
        "volkorne-emeraude-et-amande"
      ],
      [
        "volkorne-prune-et-amande",
        "volkorne-emeraude-et-ebene"
      ],
      [
        "volkorne-prune-et-turquoise",
        "volkorne-emeraude-et-orchidee"
      ],
      [
        "volkorne-prune-et-roux",
        "volkorne-emeraude-et-pourpre"
      ],
      [
        "volkorne-prune-et-ivoire",
        "volkorne-emeraude-et-indigo"
      ]
    ],
    "children": [
      "volkorne-amethyste-et-dore",
      "volkorne-dore-et-amande",
      "volkorne-dore-et-ebene",
      "volkorne-dore-et-emeraude",
      "volkorne-dore-et-indigo",
      "volkorne-dore-et-ivoire",
      "volkorne-dore-et-orchidee",
      "volkorne-dore-et-pourpre",
      "volkorne-dore-et-prune",
      "volkorne-dore-et-roux",
      "volkorne-dore-et-turquoise",
      "volkorne-jade-et-dore",
      "volkorne-rubis-et-dore",
      "volkorne-saphir-et-dore"
    ]
  },
  "volkorne-dore-et-pourpre": {
    "parentPairs": [
      [
        "volkorne-dore",
        "volkorne-pourpre"
      ]
    ],
    "children": [
      "volkorne-jade"
    ]
  },
  "volkorne-dore-et-orchidee": {
    "parentPairs": [
      [
        "volkorne-dore",
        "volkorne-orchidee"
      ]
    ],
    "children": [
      "volkorne-rubis"
    ]
  },
  "volkorne-dore-et-indigo": {
    "parentPairs": [
      [
        "volkorne-dore",
        "volkorne-indigo"
      ]
    ],
    "children": [
      "volkorne-saphir"
    ]
  },
  "volkorne-dore-et-ebene": {
    "parentPairs": [
      [
        "volkorne-dore",
        "volkorne-ebene"
      ]
    ],
    "children": [
      "volkorne-amethyste"
    ]
  },
  "volkorne-dore-et-roux": {
    "parentPairs": [
      [
        "volkorne-dore",
        "volkorne-roux"
      ]
    ],
    "children": [
      "volkorne-jade"
    ]
  },
  "volkorne-dore-et-amande": {
    "parentPairs": [
      [
        "volkorne-dore",
        "volkorne-amande"
      ]
    ],
    "children": [
      "volkorne-rubis"
    ]
  },
  "volkorne-dore-et-ivoire": {
    "parentPairs": [
      [
        "volkorne-dore",
        "volkorne-ivoire"
      ]
    ],
    "children": [
      "volkorne-amethyste"
    ]
  },
  "volkorne-dore-et-turquoise": {
    "parentPairs": [
      [
        "volkorne-dore",
        "volkorne-turquoise"
      ]
    ],
    "children": [
      "volkorne-saphir"
    ]
  },
  "volkorne-dore-et-prune": {
    "parentPairs": [
      [
        "volkorne-dore",
        "volkorne-prune"
      ]
    ],
    "children": [
      "volkorne-jade",
      "volkorne-rubis"
    ]
  },
  "volkorne-dore-et-emeraude": {
    "parentPairs": [
      [
        "volkorne-dore",
        "volkorne-emeraude"
      ]
    ],
    "children": [
      "volkorne-amethyste",
      "volkorne-saphir"
    ]
  },
  "volkorne-jade": {
    "parentPairs": [
      [
        "volkorne-dore-et-pourpre",
        "volkorne-prune-et-emeraude"
      ],
      [
        "volkorne-dore-et-prune",
        "volkorne-dore-et-roux"
      ]
    ],
    "children": [
      "volkorne-jade-et-amande",
      "volkorne-jade-et-amethyste",
      "volkorne-jade-et-dore",
      "volkorne-jade-et-ebene",
      "volkorne-jade-et-emeraude",
      "volkorne-jade-et-indigo",
      "volkorne-jade-et-ivoire",
      "volkorne-jade-et-orchidee",
      "volkorne-jade-et-pourpre",
      "volkorne-jade-et-prune",
      "volkorne-jade-et-roux",
      "volkorne-jade-et-rubis",
      "volkorne-jade-et-saphir",
      "volkorne-jade-et-turquoise"
    ]
  },
  "volkorne-rubis": {
    "parentPairs": [
      [
        "volkorne-dore-et-orchidee",
        "volkorne-prune-et-emeraude"
      ],
      [
        "volkorne-dore-et-prune",
        "volkorne-dore-et-amande"
      ]
    ],
    "children": [
      "volkorne-jade-et-rubis",
      "volkorne-rubis-et-amande",
      "volkorne-rubis-et-amethyste",
      "volkorne-rubis-et-dore",
      "volkorne-rubis-et-ebene",
      "volkorne-rubis-et-emeraude",
      "volkorne-rubis-et-indigo",
      "volkorne-rubis-et-ivoire",
      "volkorne-rubis-et-orchidee",
      "volkorne-rubis-et-pourpre",
      "volkorne-rubis-et-prune",
      "volkorne-rubis-et-roux",
      "volkorne-rubis-et-saphir",
      "volkorne-rubis-et-turquoise"
    ]
  },
  "volkorne-saphir": {
    "parentPairs": [
      [
        "volkorne-dore-et-indigo",
        "volkorne-prune-et-emeraude"
      ],
      [
        "volkorne-dore-et-emeraude",
        "volkorne-dore-et-turquoise"
      ]
    ],
    "children": [
      "volkorne-jade-et-saphir",
      "volkorne-rubis-et-saphir",
      "volkorne-saphir-et-amande",
      "volkorne-saphir-et-amethyste",
      "volkorne-saphir-et-dore",
      "volkorne-saphir-et-ebene",
      "volkorne-saphir-et-emeraude",
      "volkorne-saphir-et-indigo",
      "volkorne-saphir-et-ivoire",
      "volkorne-saphir-et-orchidee",
      "volkorne-saphir-et-pourpre",
      "volkorne-saphir-et-prune",
      "volkorne-saphir-et-roux",
      "volkorne-saphir-et-turquoise"
    ]
  },
  "volkorne-amethyste": {
    "parentPairs": [
      [
        "volkorne-dore-et-ebene",
        "volkorne-prune-et-emeraude"
      ],
      [
        "volkorne-dore-et-emeraude",
        "volkorne-dore-et-ivoire"
      ]
    ],
    "children": [
      "volkorne-amethyste-et-amande",
      "volkorne-amethyste-et-dore",
      "volkorne-amethyste-et-ebene",
      "volkorne-amethyste-et-emeraude",
      "volkorne-amethyste-et-indigo",
      "volkorne-amethyste-et-ivoire",
      "volkorne-amethyste-et-orchidee",
      "volkorne-amethyste-et-pourpre",
      "volkorne-amethyste-et-prune",
      "volkorne-amethyste-et-roux",
      "volkorne-amethyste-et-turquoise",
      "volkorne-jade-et-amethyste",
      "volkorne-rubis-et-amethyste",
      "volkorne-saphir-et-amethyste"
    ]
  },
  "volkorne-jade-et-pourpre": {
    "parentPairs": [
      [
        "volkorne-jade",
        "volkorne-pourpre"
      ]
    ],
    "children": []
  },
  "volkorne-jade-et-orchidee": {
    "parentPairs": [
      [
        "volkorne-jade",
        "volkorne-orchidee"
      ]
    ],
    "children": []
  },
  "volkorne-jade-et-indigo": {
    "parentPairs": [
      [
        "volkorne-jade",
        "volkorne-indigo"
      ]
    ],
    "children": []
  },
  "volkorne-jade-et-ebene": {
    "parentPairs": [
      [
        "volkorne-jade",
        "volkorne-ebene"
      ]
    ],
    "children": []
  },
  "volkorne-jade-et-amande": {
    "parentPairs": [
      [
        "volkorne-jade",
        "volkorne-amande"
      ]
    ],
    "children": []
  },
  "volkorne-jade-et-roux": {
    "parentPairs": [
      [
        "volkorne-jade",
        "volkorne-roux"
      ]
    ],
    "children": []
  },
  "volkorne-jade-et-ivoire": {
    "parentPairs": [
      [
        "volkorne-jade",
        "volkorne-ivoire"
      ]
    ],
    "children": []
  },
  "volkorne-jade-et-turquoise": {
    "parentPairs": [
      [
        "volkorne-jade",
        "volkorne-turquoise"
      ]
    ],
    "children": []
  },
  "volkorne-jade-et-prune": {
    "parentPairs": [
      [
        "volkorne-jade",
        "volkorne-prune"
      ]
    ],
    "children": []
  },
  "volkorne-jade-et-emeraude": {
    "parentPairs": [
      [
        "volkorne-jade",
        "volkorne-emeraude"
      ]
    ],
    "children": []
  },
  "volkorne-jade-et-dore": {
    "parentPairs": [
      [
        "volkorne-jade",
        "volkorne-dore"
      ]
    ],
    "children": []
  },
  "volkorne-jade-et-rubis": {
    "parentPairs": [
      [
        "volkorne-jade",
        "volkorne-rubis"
      ]
    ],
    "children": []
  },
  "volkorne-jade-et-saphir": {
    "parentPairs": [
      [
        "volkorne-jade",
        "volkorne-saphir"
      ]
    ],
    "children": []
  },
  "volkorne-jade-et-amethyste": {
    "parentPairs": [
      [
        "volkorne-jade",
        "volkorne-amethyste"
      ]
    ],
    "children": []
  },
  "volkorne-rubis-et-pourpre": {
    "parentPairs": [
      [
        "volkorne-rubis",
        "volkorne-pourpre"
      ]
    ],
    "children": []
  },
  "volkorne-rubis-et-orchidee": {
    "parentPairs": [
      [
        "volkorne-rubis",
        "volkorne-orchidee"
      ]
    ],
    "children": []
  },
  "volkorne-rubis-et-indigo": {
    "parentPairs": [
      [
        "volkorne-rubis",
        "volkorne-indigo"
      ]
    ],
    "children": []
  },
  "volkorne-rubis-et-ebene": {
    "parentPairs": [
      [
        "volkorne-rubis",
        "volkorne-ebene"
      ]
    ],
    "children": []
  },
  "volkorne-rubis-et-amande": {
    "parentPairs": [
      [
        "volkorne-rubis",
        "volkorne-amande"
      ]
    ],
    "children": []
  },
  "volkorne-rubis-et-roux": {
    "parentPairs": [
      [
        "volkorne-rubis",
        "volkorne-roux"
      ]
    ],
    "children": []
  },
  "volkorne-rubis-et-ivoire": {
    "parentPairs": [
      [
        "volkorne-rubis",
        "volkorne-ivoire"
      ]
    ],
    "children": []
  },
  "volkorne-rubis-et-turquoise": {
    "parentPairs": [
      [
        "volkorne-rubis",
        "volkorne-turquoise"
      ]
    ],
    "children": []
  },
  "volkorne-rubis-et-prune": {
    "parentPairs": [
      [
        "volkorne-rubis",
        "volkorne-prune"
      ]
    ],
    "children": []
  },
  "volkorne-rubis-et-emeraude": {
    "parentPairs": [
      [
        "volkorne-rubis",
        "volkorne-emeraude"
      ]
    ],
    "children": []
  },
  "volkorne-rubis-et-dore": {
    "parentPairs": [
      [
        "volkorne-rubis",
        "volkorne-dore"
      ]
    ],
    "children": []
  },
  "volkorne-rubis-et-saphir": {
    "parentPairs": [
      [
        "volkorne-rubis",
        "volkorne-saphir"
      ]
    ],
    "children": []
  },
  "volkorne-rubis-et-amethyste": {
    "parentPairs": [
      [
        "volkorne-rubis",
        "volkorne-amethyste"
      ]
    ],
    "children": []
  },
  "volkorne-saphir-et-pourpre": {
    "parentPairs": [
      [
        "volkorne-saphir",
        "volkorne-pourpre"
      ]
    ],
    "children": []
  },
  "volkorne-saphir-et-orchidee": {
    "parentPairs": [
      [
        "volkorne-saphir",
        "volkorne-orchidee"
      ]
    ],
    "children": []
  },
  "volkorne-saphir-et-indigo": {
    "parentPairs": [
      [
        "volkorne-saphir",
        "volkorne-indigo"
      ]
    ],
    "children": []
  },
  "volkorne-saphir-et-ebene": {
    "parentPairs": [
      [
        "volkorne-saphir",
        "volkorne-ebene"
      ]
    ],
    "children": []
  },
  "volkorne-saphir-et-amande": {
    "parentPairs": [
      [
        "volkorne-saphir",
        "volkorne-amande"
      ]
    ],
    "children": []
  },
  "volkorne-saphir-et-roux": {
    "parentPairs": [
      [
        "volkorne-saphir",
        "volkorne-roux"
      ]
    ],
    "children": []
  },
  "volkorne-saphir-et-ivoire": {
    "parentPairs": [
      [
        "volkorne-saphir",
        "volkorne-ivoire"
      ]
    ],
    "children": []
  },
  "volkorne-saphir-et-turquoise": {
    "parentPairs": [
      [
        "volkorne-saphir",
        "volkorne-turquoise"
      ]
    ],
    "children": []
  },
  "volkorne-saphir-et-prune": {
    "parentPairs": [
      [
        "volkorne-saphir",
        "volkorne-prune"
      ]
    ],
    "children": []
  },
  "volkorne-saphir-et-emeraude": {
    "parentPairs": [
      [
        "volkorne-saphir",
        "volkorne-emeraude"
      ]
    ],
    "children": []
  },
  "volkorne-saphir-et-dore": {
    "parentPairs": [
      [
        "volkorne-saphir",
        "volkorne-dore"
      ]
    ],
    "children": []
  },
  "volkorne-saphir-et-amethyste": {
    "parentPairs": [
      [
        "volkorne-saphir",
        "volkorne-amethyste"
      ]
    ],
    "children": []
  },
  "volkorne-amethyste-et-pourpre": {
    "parentPairs": [
      [
        "volkorne-amethyste",
        "volkorne-pourpre"
      ]
    ],
    "children": []
  },
  "volkorne-amethyste-et-orchidee": {
    "parentPairs": [
      [
        "volkorne-amethyste",
        "volkorne-orchidee"
      ]
    ],
    "children": []
  },
  "volkorne-amethyste-et-indigo": {
    "parentPairs": [
      [
        "volkorne-amethyste",
        "volkorne-indigo"
      ]
    ],
    "children": []
  },
  "volkorne-amethyste-et-ebene": {
    "parentPairs": [
      [
        "volkorne-amethyste",
        "volkorne-ebene"
      ]
    ],
    "children": []
  },
  "volkorne-amethyste-et-amande": {
    "parentPairs": [
      [
        "volkorne-amethyste",
        "volkorne-amande"
      ]
    ],
    "children": []
  },
  "volkorne-amethyste-et-roux": {
    "parentPairs": [
      [
        "volkorne-amethyste",
        "volkorne-roux"
      ]
    ],
    "children": []
  },
  "volkorne-amethyste-et-ivoire": {
    "parentPairs": [
      [
        "volkorne-amethyste",
        "volkorne-ivoire"
      ]
    ],
    "children": []
  },
  "volkorne-amethyste-et-turquoise": {
    "parentPairs": [
      [
        "volkorne-amethyste",
        "volkorne-turquoise"
      ]
    ],
    "children": []
  },
  "volkorne-amethyste-et-prune": {
    "parentPairs": [
      [
        "volkorne-amethyste",
        "volkorne-prune"
      ]
    ],
    "children": []
  },
  "volkorne-amethyste-et-emeraude": {
    "parentPairs": [
      [
        "volkorne-amethyste",
        "volkorne-emeraude"
      ]
    ],
    "children": []
  },
  "volkorne-amethyste-et-dore": {
    "parentPairs": [
      [
        "volkorne-amethyste",
        "volkorne-dore"
      ]
    ],
    "children": []
  }
}
