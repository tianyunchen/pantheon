CREATE USER mimir WITH PASSWORD 'pgpass';
CREATE DATABASE mimir;
GRANT ALL PRIVILEGES ON DATABASE mimir TO mimir;
CREATE DATABASE mimir_unit;
GRANT ALL PRIVILEGES ON DATABASE mimir_unit TO mimir;