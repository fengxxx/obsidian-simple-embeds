export interface PluginSettings {
  replaceTwitterLinks: boolean;
  replaceYouTubeLinks: boolean;
  replaceInstagramLinks: boolean;
  replaceFlatIOLinks: boolean;

  keepLinksInPreview: boolean;
  embedPlacement: "above" | "below";
  disableAutomaticEmbeds: boolean;
}

export const DEFAULT_SETTINGS: PluginSettings = {
  replaceTwitterLinks: true,
  replaceYouTubeLinks: true,
  replaceInstagramLinks: true,
  replaceFlatIOLinks: true,

  keepLinksInPreview: false,
  embedPlacement: "above",
  disableAutomaticEmbeds: false,
};
