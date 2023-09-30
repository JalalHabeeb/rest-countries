import { rest } from "msw";

export const handlers = [
  rest.get("https://restcountries.com/v2/all", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Syrian Arab Republic",
          numericCode: "760",
          population: 17500657,
          region: "Asia",
          capital: "Damascus",
          flag: "https://flagcdn.com/sy.svg",
        },
        {
          name: "Lebanon",
          numericCode: "422",
          population: 6825442,
          region: "Asia",
          capital: "Beirut",
          flag: "https://flagcdn.com/lb.svg",
        },
        {
          name: "Netherlands",
          numericCode: "528",
          population: 17441139,
          region: "Europe",
          capital: "Amsterdam",
          flag: "https://flagcdn.com/nl.svg",
        },
      ])
    );
  }),
];
