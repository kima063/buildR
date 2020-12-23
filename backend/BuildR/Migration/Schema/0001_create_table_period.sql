create Table period(
period_id serial not null  primary key,
c_id integer,
course_id varchar ,
duration_minute integer,
day_of_week varchar,
start_time varchar,
teachers_id integer,
t_name varchar,
room_id integer,
section varchar,
semester integer,
department varchar
);