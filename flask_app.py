from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/status')
def status():
    return jsonify({"status": "online", "version": "1.0.0"})

if __name__ == '__main__':
    app.run(debug=True)