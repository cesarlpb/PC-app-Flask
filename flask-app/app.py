from flask import Flask, jsonify
from flaskext.mysql import MySQL
from utils import *

app=Flask(__name__)

mysql = MySQL()

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'MySQL123/'
app.config['MYSQL_DATABASE_DB'] = 'test_pc_app'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql.init_app(app)

conn = mysql.connect()
cursor =conn.cursor()

table_name="test_pc_app_table"
table_definition = "(id INT AUTO_INCREMENT PRIMARY KEY, device VARCHAR(255), model VARCHAR(255), img_path VARCHAR(255), description VARCHAR(255), category VARCHAR(255), subcategory VARCHAR(255), brand VARCHAR(255), stock VARCHAR(255), status VARCHAR(255), ranking INT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
table_columns = f"(device, model, img_path, description, category, subcategory, brand, stock, status, ranking)"
table_values = f"(\"LAPTOP-{get_random_hash()}\",\"PC-model-{get_random_hash()}\",\"https://evatech.com.au/news/wp-content/uploads/2018/02/DSC_2592.jpg\",\"PC-{get_random_hash()} is a good PC\",\"PC-category\",\"PC-subcategory\",\"HP\",\"{get_random_int()}\",\"active\", 5)"

@app.route("/")
def init():
    cursor.execute(f"CREATE TABLE IF NOT EXISTS {table_name} {table_definition}")
    cursor.execute(f"INSERT INTO {table_name} {table_columns} VALUES {table_values}")
    return jsonify({'status': 200, 'data': f"Table {table_name} created.\nWelcome to the API"})

@app.route("/all")
def get_all():
    cursor.execute(f"SELECT * FROM {table_name}")
    data=cursor.fetchall()
    return jsonify({'status':200,'data':data})

@app.route("/get/<int:id>")
def get_one(id):
    cursor.execute(f"SELECT * FROM {table_name} WHERE id={id}")
    data=cursor.fetchall()
    return jsonify({'status':200,'data':data})

@app.route("/create", methods=["GET", "POST"])
def create():
    cursor.execute(f"INSERT INTO {table_name} {table_columns} VALUES {table_values}")
    return f"New record created with id {cursor.lastrowid}"

@app.route("/update/<int:id>", methods=["GET", "PUT"])
def update(id):
    cursor.execute(f"UPDATE {table_name} SET device=\"LAPTOP-456\" WHERE id={id}")
    return f"Record {id} updated"

@app.route("/delete/<int:id>", methods=["GET", "DELETE"])
def delete(id):
    cursor.execute(f"DELETE FROM {table_name} WHERE id={id}")
    return f"Record {id} deleted"

if __name__ == '__main__':
   app.run(host="0.0.0.0", port=5000, debug = True)
