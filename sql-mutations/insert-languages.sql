insert into "languages" ("name")
values ('HTML'), ('CSS'), ('JavaScript');

select * from "languages" where "name" in ('HTML', 'CSS', 'JavaScript');
