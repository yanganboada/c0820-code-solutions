select "a"."firstName",
        "a"."lastName"
  from "castMembers"
  join "actors" as "a" using ("actorId")
  join "films" as "f" using ("filmId")
  where "f"."title" = 'Jersey Sassy';
