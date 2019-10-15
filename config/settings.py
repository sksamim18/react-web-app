import os
import sqlalchemy
from dotenv import load_dotenv


load_dotenv(os.path.join(os.path.abspath('../'), '.env'))

DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USERNAME')
DB_USER_PASSWORD = os.getenv('DB_USER_PASSWORD')
DB_HOST = os.getenv('DB_HOST', 'localhost')
DB_PORT = os.getenv('DB_PORT', 5432)

connection_string = 'postgres://{}:{}@{}:{}/{}'

connection = sqlalchemy.create_engine(
    connection_string.format(DB_USERNAME, DB_USER_PASSWORD, DB_HOST, DB_PORT, DB_NAME))
