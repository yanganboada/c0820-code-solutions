select "f"."releaseYear",
        "c"."name" as "category"
  from "filmCategory"
  join "categories" as "c" using ("categoryId")
  join "films" as "f" using ("filmId")
  where "f"."title" = 'Boogie Amelie';
