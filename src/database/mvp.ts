function hourToMS(hour: number) {
  return hour * 60 * 60 * 1000;
}

interface MVPSpawnInformation {
  slug: string;
  name: string;
  respawnTime: number;
}

export default class MVPDatabase {
  public static MVPList: Array<MVPSpawnInformation> = [
    {
      slug: "eddga",
      name: "Eddga",
      respawnTime: hourToMS(2)
    },
    {
      slug: "tao-gunka",
      name: "Tao Gunka",
      respawnTime: hourToMS(5)
    },
    {
      slug: "amon-ra",
      name: "Amon RA",
      respawnTime: hourToMS(1)
    },
    {
      slug: "dracula",
      name: "Dracula",
      respawnTime: hourToMS(1)
    },
    {
      slug: "golden-thief-bug",
      name: "Golden Thief Bug",
      respawnTime: hourToMS(1)
    },
    {
      slug: "phreeoni",
      name: "Phreeoni",
      respawnTime: hourToMS(2)
    }
  ];
}
