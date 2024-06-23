type TypeDetail = {
  property: string;
  value: string;
  messages: string[];
};

type TypeDetails = TypeDetail[];

export type TypeError = {
  errorType: string;
  message: string;
  details?: TypeDetails;
};
