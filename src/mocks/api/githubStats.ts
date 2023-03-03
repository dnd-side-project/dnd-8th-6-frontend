import { rest } from "msw";

import { githubStatsData } from "@/mocks/api/data/githubStatsData";

const handlers = [
  rest.get("/api/stats", (_, res, ctx) =>
    res(ctx.status(200), ctx.json(githubStatsData)),
  ),
];

export default handlers;
