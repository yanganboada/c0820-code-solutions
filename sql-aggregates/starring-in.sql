select "c"."name" as "category",
        count("f".*) as "movieCount"
  from "filmCategory"
  join "films" as "f" using ("filmId")
  join "castMembers" using ("filmId")
  join "actors" as "a" using ("actorId")
  join "categories" as "c" using ("categoryId")
  where "a"."firstName" = 'Lisa'
  and "a"."lastName" = 'Monroe'
  group by "c"."name";
