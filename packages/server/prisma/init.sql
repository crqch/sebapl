-- Grant all privileges to sebapl_user on the sebapl_dev database
GRANT ALL PRIVILEGES ON DATABASE sebapl_dev TO sebapl_user;

-- Grant all privileges on the public schema
GRANT ALL PRIVILEGES ON SCHEMA public TO sebapl_user;

-- Grant all privileges on all tables in public schema (for existing tables)
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO sebapl_user;

-- Grant all privileges on all sequences in public schema (for auto-increment fields)
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO sebapl_user;

-- Grant all privileges on all functions in public schema
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO sebapl_user;

-- Set default privileges for future tables, sequences, and functions
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON TABLES TO sebapl_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON SEQUENCES TO sebapl_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON FUNCTIONS TO sebapl_user;