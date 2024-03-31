export type ContextType = {
  name: string;
  value: string;
};

export type SlackMessageType = {
  title: string;
  contexts: ContextType[];
};
