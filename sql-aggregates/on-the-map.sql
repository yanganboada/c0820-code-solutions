select "co"."name" as "country",
        count ("ci".*) as "cityCount"
  from "cities" as "ci"
  join "countries" as "co" using ("countryId")
  group by "co"."name";
