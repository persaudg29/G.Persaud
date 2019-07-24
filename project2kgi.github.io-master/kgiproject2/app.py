import sqlite3
from flask import jsonify
import pandas as pd
import numpy as np
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('portfolios.html')

@app.route('/abseentism')
def abseentism ():
    return render_template('abseentism.html')

@app.route('/poverty')
def poverty():
    return render_template('poverty.html')

@app.route('/uninsured')
def uninsured():
    return render_template('uninsured.html')

@app.route('/childpoverty')
def childpoverty():
    return render_template('childpoverty.html')

@app.route('/metric')
def metric():
    return render_template('metric.html')

@app.route('/table')
def display_table():
    conn = sqlite3.connect('db/database.db')
    df1 = pd.read_sql_query("SELECT * FROM cities", conn)
    df1 = df1.iloc[0:24,:]
    return render_template("table.html", data=df1.to_html())


@app.route('/display_city_data')
def display_data():
    df = pd.read_csv("db/CHDB_data_city_all v6_0.csv")
    df_dict= df.to_dict('records')
    resp = jsonify(df_dict)
    return resp

if __name__ == "__main__":
    app.run(debug=True)



