import sqlite3
import hashlib


DB_NAME = "RailBelgium.db"
conn = sqlite3.connect(DB_NAME)

cur = conn.cursor()

cur.execute("""

CREATE TABLE IF NOT EXISTS users(
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     username TEXT NOT NULL,
     email TEXT NOT NULL,
     password TEXT NOT NULL,
     user_logo BLOB NOT NULL,
    )
""")

conn.commit()