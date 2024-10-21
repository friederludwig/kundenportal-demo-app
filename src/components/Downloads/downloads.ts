
export interface AssetPackage {
    title: string;
    items: AssetItem[];
    changedAt: string;
    createdAt: string;
    size: string;
    downloads: AssetPackageDownload[];
}

export interface AssetItem {
    title: string;
    type: AssetType;
    size: string;
}

export interface AssetPackageDownload {
    username: string;
    userImage: string;
    downloadedAt: string;
    downloadedItems: number;
}

export enum AssetType {
    PDF = "Pdf",
    JPG = "JPG",
    PNG = "PNG",
    MP4 = "MP4",
}

export const assetPackages: AssetPackage[] = [
    {
      title: "Marktanalyse und Zielgruppenbestimmung",
      items: [
        {
          title: "Detaillierte Marktanalyse",
          type: AssetType.PDF,
          size: "5 MB",
        },
        {
          title: "Zielgruppendefinition",
          type: AssetType.PDF,
          size: "1.2 MB",
        },
        {
          title: "Infografik: Marktübersicht",
          type: AssetType.PNG,
          size: "750 KB",
        },
        {
          title: "Präsentation zur Zielgruppenbestimmung",
          type: AssetType.MP4,
          size: "120 MB",
        },
      ],
      changedAt: "2024-10-12T10:30:00Z",
      createdAt: "2024-08-15T14:00:00Z",
      size: "126.95 MB",
      downloads: [
        {
          username: "Sandra Göring",
          userImage: "https://randomuser.me/api/portraits/women/13.jpg",
          downloadedAt: "2024-10-13T08:00:00Z",
          downloadedItems: 3,
        },
        {
          username: "Hannah Schmidt",
          userImage: "https://randomuser.me/api/portraits/women/2.jpg",
          downloadedAt: "2024-10-14T12:45:00Z",
          downloadedItems: 4,
        },
      ],
    },
    {
      title: "Vertriebs- und Marketingstrategie",
      items: [
        {
          title: "Strategieplan für Vertriebsoptimierung",
          type: AssetType.PDF,
          size: "3 MB",
        },
        {
          title: "Werbekampagnenplan",
          type: AssetType.PDF,
          size: "1.5 MB",
        },
        {
          title: "Banner und Social Media Grafik",
          type: AssetType.JPG,
          size: "800 KB",
        },
        {
          title: "Werbespot Rohschnitt",
          type: AssetType.MP4,
          size: "200 MB",
        },
      ],
      changedAt: "2024-09-25T16:00:00Z",
      createdAt: "2024-07-30T10:00:00Z",
      size: "205.3 MB",
      downloads: [
        {
          username: "Ralf Heidtmann",
          userImage: "https://randomuser.me/api/portraits/men/13.jpg",
          downloadedAt: "2024-09-26T09:00:00Z",
          downloadedItems: 2,
        },
        {
          username: "Lisa Kaiser",
          userImage: "https://randomuser.me/api/portraits/women/26.jpg",
          downloadedAt: "2024-09-27T11:00:00Z",
          downloadedItems: 4,
        },
        {
            username: "Sarah Schmidt",
            userImage: "https://randomuser.me/api/portraits/women/56.jpg",
            downloadedAt: "2024-09-27T11:00:00Z",
            downloadedItems: 1,
          },
      ],
    },
    {
      title: "Wettbewerbsanalyse und Benchmarking",
      items: [
        {
          title: "Wettbewerbsbericht",
          type: AssetType.PDF,
          size: "4.5 MB",
        },
        {
          title: "Benchmarking-Diagramme",
          type: AssetType.PNG,
          size: "900 KB",
        },
        {
          title: "Markttrends Präsentation",
          type: AssetType.PDF,
          size: "2 MB",
        },
        {
          title: "Videoanalyse des Wettbewerbs",
          type: AssetType.MP4,
          size: "180 MB",
        },
      ],
      changedAt: "2024-10-01T15:45:00Z",
      createdAt: "2024-08-10T09:30:00Z",
      size: "187.4 MB",
      downloads: [
        {
          username: "peterschmidt",
          userImage: "https://randomuser.me/api/portraits/women/13.jpg",
          downloadedAt: "2024-10-02T07:30:00Z",
          downloadedItems: 4,
        },
        {
          username: "annaklein",
          userImage: "https://randomuser.me/api/portraits/women/13.jpg",
          downloadedAt: "2024-10-03T09:15:00Z",
          downloadedItems: 3,
        },
      ],
    },
    {
      title: "Markenbildung und Corporate Identity",
      items: [
        {
          title: "Leitfaden zur Markenbildung",
          type: AssetType.PDF,
          size: "2.5 MB",
        },
        {
          title: "Corporate Identity Grafikvorlagen",
          type: AssetType.JPG,
          size: "1 MB",
        },
        {
          title: "Styleguide für visuelle Kommunikation",
          type: AssetType.PDF,
          size: "1.8 MB",
        },
      ],
      changedAt: "2024-09-15T13:30:00Z",
      createdAt: "2024-07-01T10:00:00Z",
      size: "225.3 MB",
      downloads: [
        {
          username: "frankbauer",
          userImage: "https://randomuser.me/api/portraits/women/13.jpg",
          downloadedAt: "2024-09-16T14:00:00Z",
          downloadedItems: 4,
        },
        {
          username: "lisamüller",
          userImage: "https://randomuser.me/api/portraits/women/13.jpg",
          downloadedAt: "2024-09-17T10:00:00Z",
          downloadedItems: 3,
        },
      ],
    },
  ];
  