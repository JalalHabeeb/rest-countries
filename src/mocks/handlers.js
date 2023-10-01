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
  rest.get("https://restcountries.com/v2/name/:name", (req, res, ctx) => {
    const { name } = req.params;
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: name,
          numericCode: "760",
          population: 17500657,
          region: "Asia",
          capital: "Damascus",
          flag: "https://flagcdn.com/sy.svg",
          nativeName: "سوريا",
          subregion: "Western Asia",
          topLevelDomain: [".sy"],
          currencies: [
            {
              code: "SYP",
              name: "Syrian pound",
              symbol: "£",
            },
          ],
          languages: [
            {
              iso639_1: "ar",
              iso639_2: "ara",
              name: "Arabic",
              nativeName: "العربية",
            },
          ],
          borders: ["IRQ", "ISR", "JOR", "LBN", "TUR"],
        },
      ])
    );
  }),
];
