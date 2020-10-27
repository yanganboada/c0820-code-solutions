select "cu"."firstName",
        "cu"."lastName",
        sum("p"."amount") as "totalSpend"
  from "payments" as "p"
  join "customers" as "cu" using ("customerId")
  group by "cu"."customerId"
  order by sum("p"."amount") desc:
