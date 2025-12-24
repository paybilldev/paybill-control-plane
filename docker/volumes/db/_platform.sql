\set pguser `echo "$POSTGRES_USER"`

CREATE DATABASE _platform WITH OWNER :pguser;
