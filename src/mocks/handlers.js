import { rest } from "msw";

export const handlers = [
  rest.get("https://restcountries.com/v2/all", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Syria",
          numericCode: "00963",
          population: 12345,
          region: "Asia",
          capital: "Damascus",
          flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        },
        {
          name: "Lebanon",
          numericCode: "00961",
          population: 12345,
          region: "Asia",
          capital: "Bierute",
          flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        },
        {
          name: "Netherlands",
          numericCode: "0031",
          population: 12345,
          region: "Europa",
          capital: "Amsterdam",
          flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        },
      ])
    );
  }),
];
