import { http, HttpResponse } from "msw"

import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period"

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", async () => {
  return HttpResponse.json([
    {
      date: "10/12",
      receipt: 54879,
    },
    {
      date: "11/12",
      receipt: 62487,
    },
    {
      date: "12/12",
      receipt: 11245,
    },
    {
      date: "13/12",
      receipt: 9854,
    },
    {
      date: "14/12",
      receipt: 78965,
    },
    {
      date: "15/12",
      receipt: 44877,
    },
    {
      date: "16/12",
      receipt: 23589,
    },
  ])
})
