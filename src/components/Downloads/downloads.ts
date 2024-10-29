
export interface AssetPackage {
    title: string;
    items: AssetItem[];
    changedAt: string;
    createdAt: string;
    size: string;
    downloads: AssetPackageDownload[];
    group: string;
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
      group: "marketing",
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
      group: "marketing",
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
      group: "marketing",
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
      group: "marketing",
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
    {
      title: "Produktentwicklungsprozess",
      group: "development",
      items: [
        {
          title: "Produktanforderungen Dokument",
          type: AssetType.PDF,
          size: "3.2 MB",
        },
        {
          title: "Prototyping-Bilder",
          type: AssetType.JPG,
          size: "1 MB",
        },
        {
          title: "Produktentwicklung Roadmap",
          type: AssetType.PDF,
          size: "2.7 MB",
        },
        {
          title: "Video zur Produktentstehung",
          type: AssetType.MP4,
          size: "150 MB",
        },
      ],
      changedAt: "2024-10-05T14:20:00Z",
      createdAt: "2024-09-01T10:45:00Z",
      size: "156.9 MB",
      downloads: [
        {
          username: "lauraklein",
          userImage: "https://randomuser.me/api/portraits/women/15.jpg",
          downloadedAt: "2024-10-06T09:00:00Z",
          downloadedItems: 4,
        },
        {
          username: "tobiaskoch",
          userImage: "https://randomuser.me/api/portraits/men/33.jpg",
          downloadedAt: "2024-10-07T12:15:00Z",
          downloadedItems: 3,
        },
      ],
    },
    {
      title: "Finanzplanung und Budgetierung",
      group: "finance",
      items: [
        {
          title: "Finanzbericht Q1",
          type: AssetType.PDF,
          size: "4 MB",
        },
        {
          title: "Budgetübersicht 2024",
          type: AssetType.PDF,
          size: "1.5 MB",
        },
        {
          title: "Finanzanalyse Diagramme",
          type: AssetType.PNG,
          size: "600 KB",
        },
      ],
      changedAt: "2024-10-18T10:00:00Z",
      createdAt: "2024-09-20T13:20:00Z",
      size: "6.1 MB",
      downloads: [
        {
          username: "mariameier",
          userImage: "https://randomuser.me/api/portraits/women/5.jpg",
          downloadedAt: "2024-10-19T08:30:00Z",
          downloadedItems: 3,
        },
        {
          username: "lukaspeters",
          userImage: "https://randomuser.me/api/portraits/men/7.jpg",
          downloadedAt: "2024-10-20T10:45:00Z",
          downloadedItems: 2,
        },
      ],
    },
    {
      title: "Kundenfeedback und Umfragen",
      group: "marketing",
      items: [
        {
          title: "Kundenzufriedenheitsumfrage Ergebnisse",
          type: AssetType.PDF,
          size: "2.3 MB",
        },
        {
          title: "Feedbackanalyse-Report",
          type: AssetType.PDF,
          size: "3 MB",
        },
        {
          title: "Umfrageergebnisse Diagramme",
          type: AssetType.PNG,
          size: "750 KB",
        },
      ],
      changedAt: "2024-09-22T11:00:00Z",
      createdAt: "2024-08-20T10:00:00Z",
      size: "6.05 MB",
      downloads: [
        {
          username: "katrinhuber",
          userImage: "https://randomuser.me/api/portraits/women/12.jpg",
          downloadedAt: "2024-09-23T09:30:00Z",
          downloadedItems: 3,
        },
        {
          username: "janmüller",
          userImage: "https://randomuser.me/api/portraits/men/15.jpg",
          downloadedAt: "2024-09-24T14:00:00Z",
          downloadedItems: 2,
        },
      ],
    },
    {
      title: "Projektmanagement Ressourcen",
      group: "leader",
      items: [
        {
          title: "Projektplan Vorlage",
          type: AssetType.PDF,
          size: "1.2 MB",
        },
        {
          title: "Zeitplan Diagramme",
          type: AssetType.PNG,
          size: "800 KB",
        },
        {
          title: "Ressourcenübersicht",
          type: AssetType.PDF,
          size: "2 MB",
        },
      ],
      changedAt: "2024-09-10T15:00:00Z",
      createdAt: "2024-08-01T12:00:00Z",
      size: "4 MB",
      downloads: [
        {
          username: "sebastianwolf",
          userImage: "https://randomuser.me/api/portraits/men/20.jpg",
          downloadedAt: "2024-09-11T08:15:00Z",
          downloadedItems: 3,
        },
        {
          username: "angelaschmidt",
          userImage: "https://randomuser.me/api/portraits/women/18.jpg",
          downloadedAt: "2024-09-12T10:45:00Z",
          downloadedItems: 2,
        },
      ],
    },
    {
      title: "Risikomanagement und Compliance",
      group: "leader",
      items: [
        {
          title: "Risikobewertungs-Checkliste",
          type: AssetType.PDF,
          size: "2.8 MB",
        },
        {
          title: "Compliance Richtlinien",
          type: AssetType.PDF,
          size: "1.5 MB",
        },
        {
          title: "Risikoanalyse Diagramme",
          type: AssetType.PNG,
          size: "950 KB",
        },
      ],
      changedAt: "2024-10-03T16:20:00Z",
      createdAt: "2024-09-15T10:00:00Z",
      size: "5.25 MB",
      downloads: [
        {
          username: "simonlehmann",
          userImage: "https://randomuser.me/api/portraits/men/31.jpg",
          downloadedAt: "2024-10-04T08:20:00Z",
          downloadedItems: 3,
        },
        {
          username: "kristinbraun",
          userImage: "https://randomuser.me/api/portraits/women/22.jpg",
          downloadedAt: "2024-10-05T12:30:00Z",
          downloadedItems: 2,
        },
      ],
    },
    {
      title: "Social Media Strategien",
      group: "marketing",
      items: [
        {
          title: "Social Media Content Plan",
          type: AssetType.PDF,
          size: "2 MB",
        },
        {
          title: "Strategie für Influencer-Marketing",
          type: AssetType.PDF,
          size: "1.3 MB",
        },
        {
          title: "Grafiken für Social Media",
          type: AssetType.JPG,
          size: "900 KB",
        },
        {
          title: "Anleitung zur Social Media Analyse",
          type: AssetType.PDF,
          size: "1.8 MB",
        },
      ],
      changedAt: "2024-09-28T09:00:00Z",
      createdAt: "2024-08-10T11:30:00Z",
      size: "6 MB",
      downloads: [
        {
          username: "janaberg",
          userImage: "https://randomuser.me/api/portraits/women/28.jpg",
          downloadedAt: "2024-09-29T12:00:00Z",
          downloadedItems: 4,
        },
        {
          username: "maximilianthiele",
          userImage: "https://randomuser.me/api/portraits/men/45.jpg",
          downloadedAt: "2024-09-30T14:15:00Z",
          downloadedItems: 3,
        },
      ],
    },
    {
      title: "Personalentwicklung und Training",
      group: "personal",
      items: [
        {
          title: "Schulungsplan für Mitarbeiter",
          type: AssetType.PDF,
          size: "1.5 MB",
        },
        {
          title: "Trainingsvideos",
          type: AssetType.MP4,
          size: "90 MB",
        },
        {
          title: "E-Learning Ressourcen",
          type: AssetType.PDF,
          size: "2 MB",
        },
        {
          title: "Feedbackbögen für Trainings",
          type: AssetType.PDF,
          size: "800 KB",
        },
      ],
      changedAt: "2024-09-20T11:00:00Z",
      createdAt: "2024-07-15T09:00:00Z",
      size: "94.3 MB",
      downloads: [
        {
          username: "manuelgötz",
          userImage: "https://randomuser.me/api/portraits/men/52.jpg",
          downloadedAt: "2024-09-21T10:00:00Z",
          downloadedItems: 4,
        },
        {
          username: "sarasteiner",
          userImage: "https://randomuser.me/api/portraits/women/34.jpg",
          downloadedAt: "2024-09-22T13:45:00Z",
          downloadedItems: 2,
        },
      ],
    },
    {
      title: "Produktlaunch und Markteinführung",
      group: "leader",
      items: [
        {
          title: "Markteinführungsplan",
          type: AssetType.PDF,
          size: "3 MB",
        },
        {
          title: "PR-Material für Produktlaunch",
          type: AssetType.JPG,
          size: "1 MB",
        },
        {
          title: "Launch-Event Video",
          type: AssetType.MP4,
          size: "180 MB",
        },
        {
          title: "Vertriebsmaterial für Neueinführung",
          type: AssetType.PDF,
          size: "2 MB",
        },
      ],
      changedAt: "2024-10-10T10:00:00Z",
      createdAt: "2024-09-01T08:30:00Z",
      size: "186 MB",
      downloads: [
        {
          username: "robertkeller",
          userImage: "https://randomuser.me/api/portraits/men/60.jpg",
          downloadedAt: "2024-10-11T09:15:00Z",
          downloadedItems: 4,
        },
        {
          username: "claudiabauer",
          userImage: "https://randomuser.me/api/portraits/women/42.jpg",
          downloadedAt: "2024-10-12T12:30:00Z",
          downloadedItems: 3,
        },
      ],
    },    
  ];
  