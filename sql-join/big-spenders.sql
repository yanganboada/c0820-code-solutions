select "c"."firstName", "c"."lastName"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
  order by "p"."amount" desc
  limit 10;
