var config = {
  style: "map/style.json",
  showMarkers: true,
  markerColor: "#3FB1CE",
  inset: true,
  legend: false,
  theme: "light",
  useCustomLayers: true,
  bookmarks: false,
  chapterReturn: true,
  title: "GIS Data Standardization in Humanitarian Space",
  logo: "images/kshitij.png",
  subtitle:
    "Data standardization plays a vital role in humanitarian efforts, enabling efficient coordination and accurate information sharing during crises. This story map highlights key standardization tools—HXL, CODs, and P-codes—and their impact on creating a unified data ecosystem to support rapid and reliable crisis response.",
  byline: "27 Nov , By Kshitij Raj Sharma",
  mobileview:
    '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">',
  footer: "Source: source citations, etc., Copyright 2024 @ Kshitij Raj Sharma",
  chapters: [
    {
      id: "introduction",
      alignment: "left",
      hidden: false,
      title: "Introduction",
      image: "images/why_data_meme.jpg",

      description:
        "Data standardization is essential in the humanitarian field, where <strong> rapid response</strong>, coordination, and information <strong>sharing</strong> are crucial. Humanitarian crises often involve multiple agencies working together to deliver aid, where each organization collects and shares data on population distribution, infrastructure, and resources. Without standardization, data incompatibility and misinterpretation can cause delays and errors in delivering aid to affected communities.",
      location: {
        center: [83.96851, 28.26689],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "hxl",
      alignment: "right",
      hidden: false,
      title: "Humanitarian Exchange Language (HXL)",
      image: "images/hxl_logo.png",
      // caption: "HXL Logo",
      website: "https://hxlstandard.org/",
      description:
        "<strong>Overview</strong><br>Humanitarian Exchange Language (HXL) is a simple standard for tagging and structuring datasets used by humanitarian organizations. HXL tags data attributes (like organization, location, and population) with a standardized vocabulary, ensuring consistent data formatting and simplifying data sharing and filtering. HXL's lightweight structure makes it easy to implement, even in resource-limited environments.<br><br><strong>Use Case</strong><br>Imagine a major flood displacing thousands of people across multiple regions. Various organizations need to share data on shelters, hospitals, and the displaced population. With HXL tags, datasets from different sources can be aligned quickly. For example:<br>#loc: Location of each shelter or hospital.<br>#org: Organization responsible for managing the facility.<br>#pop: Number of people affected or served.<br><br><strong>Map Content</strong><br>A map overlay shows HXL-tagged data representing key locations such as shelters and hospitals. When users click on a location, they can see HXL-tagged details (e.g., managing organization, capacity, and available resources).",
      location: {
        center: [35.243322, 38.963745],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "cods",
      alignment: "left",
      hidden: false,
      title: "Common Operational Datasets (CODs)",
      image: "images/cod_logo.png",
      // caption: "HXL Logo",
      website: "https://cod.unocha.org/",
      description:
        "<strong>Overview</strong><br>Common Operational Datasets (CODs) are essential, authoritative datasets curated to support humanitarian response. Managed by UN OCHA, CODs provide stable, standardized data on critical information like population distribution, administrative boundaries, infrastructure, and road networks. They are meticulously verified, making them a reliable foundation for operational planning.<br><br><strong>Use Case</strong><br>CODs are invaluable in a situation like an earthquake that disrupts a densely populated urban area. Humanitarian agencies need reliable data on administrative boundaries, population densities, and key infrastructure to prioritize resources and coordinate response efforts. CODs provide:<br>Population data to assess affected communities.<br>Administrative boundaries for coordination.<br>Road networks to optimize transportation of supplies.<br><br><strong>Map Content</strong><br>The map displays layers for population density, administrative boundaries, and main roads in a disaster-affected area. Users can interact with each layer to understand how CODs inform decisions on resource allocation, priority regions, and logistical routes.",
      location: {
        center: [38.963745, 35.243322],
        zoom: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "cods-layer",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "cods-layer",
          opacity: 0,
        },
      ],
    },
    {
      id: "pcodes",
      alignment: "right",
      hidden: false,
      title: "Place Codes (P-codes)",
      image: "images/pcode.png",
      // caption: "HXL Logo",
      website:
        "https://humanitarian.atlassian.net/wiki/spaces/imtoolbox/pages/222265609/P-codes",
      description:
        "<strong>Overview</strong><br>P-codes, or Place Codes, are unique identifiers for geographic locations, providing a way to reference specific places consistently across datasets. P-codes make it easy to cross-reference and unify data from multiple sources, helping aid organizations avoid duplication or confusion about location names, which may vary or have multiple spellings.<br><br><strong>Use Case</strong><br>After a cyclone, multiple agencies collect data on relief needs, shelter locations, and health facilities. P-codes allow these datasets to be easily combined and analyzed without confusion over place names. For example, data on shelters can be linked with population data by matching P-codes, enabling a comprehensive view of needs and available resources in each area.<br><br><strong>Map Content</strong><br>A P-code layer shows unique codes for each location (e.g., neighborhoods, shelters, health facilities). When clicking on a P-coded area, users can see linked data, such as population size, available shelters, and local health resources. This illustrates how P-codes help unify datasets for comprehensive planning.",
      location: {
        center: [-75.5, 20],
        zoom: 5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "pcodes-layer",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "pcodes-layer",
          opacity: 0,
        },
      ],
    },
    {
      id: "case-study",
      alignment: "left",
      hidden: false,
      title: "Case Study: Palesttine Humanitarian Response",
      // image:"images/",
      image: "images/hxl_method.png",
      // caption: "HXL Logo",
      website: "https://data.humdata.org/group/pse",
      description: "TBD",
      location: {
        center: [-75.5, 20],
        zoom: 5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "case-study-layer",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "case-study-layer",
          opacity: 0,
        },
      ],
    },
    {
      id: "other-efforts",
      alignment: "right",
      hidden: false,
      title: "Other Efforts",
      image: "images/cod.png",
      // caption: "HXL Logo",
      website:
        "https://humanitarian.atlassian.net/wiki/spaces/imtoolbox/pages/222265609/P-codes",
      description:
        "<strong>INSPIRE Directive (Infrastructure for Spatial Information in the European Community)</strong><br>Features: INSPIRE mandates standardized data themes and specifications (like administrative boundaries, hydrography, and land use), which are critical in large-scale, cross-border disaster scenarios.<br><br><strong>Humanitarian Profile Support Standard (HPSS)</strong><br>Features: HPSS outlines criteria for categories and sub-categories of populations, helping humanitarian organizations maintain consistent definitions and population counts.<br><br><strong>Sphere Standards for Humanitarian Response</strong><br>Features: Sphere provides standardized indicators and minimum data requirements to ensure humanitarian projects meet essential needs. By standardizing what data should be collected and measured, Sphere aids in data compatibility across humanitarian responses.<br><br><strong>UN Global Platform for Data Interoperability</strong><br>Features: The platform provides data interoperability resources, focusing on ethical data use, quality standards, and frameworks for combining data from non-traditional sources (e.g., private sector data).",
      location: {
        center: [0, 0],
        zoom: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
