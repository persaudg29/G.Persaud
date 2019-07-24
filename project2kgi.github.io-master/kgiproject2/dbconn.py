import psycopg2

#connect to an existing databse
conn = psycopg2.connect(user = "kgi",
                                  password = "kgi",
                                  host = "127.0.0.1",
                                  port = "5432",
                                  database = "500_cities")

#open a cursur to perform database operations
cur = conn.cursor()

# Query the databse and obtain data as Python objects
cur.execute("SELECT * FROM data")
cur.fetchall()

# Close communication with the database
cur.close()
conn.close()