type NetworkLoadingState = {
  state: "loading";
};
type NetworkFailedState = {
  state: "failed";
  code: number;
};
type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function logger(states: NetworkState) {
  switch (states.state) {
    case "loading":
      return "Loading...";
    case "failed":
      return `Error ${states.code} occurred`;
    case "success":
      return `Title: ${states.response.title}, Duration: ${states.response.duration}, Summary: ${states.response.summary}`;
  }
}
