from flask import Flask, render_template, request, jsonify
from builds_data import builds

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.json
    budget = int(data["budget"])
    use_case_choice = data["use_case"]
    platform_choice = data.get("platform")  # Optional for Casual Use

    # Map choices to categories
    use_cases = {"1": "Gaming", "2": "Video Editing", "3": "Casual Use"}
    use_case = use_cases.get(use_case_choice)

    if not use_case:
        return jsonify({"error": "Invalid use case choice"}), 400

    # Find recommended build
    recommended_build = None
    if use_case in ["Gaming", "Video Editing"]:
        platforms = {"1": "Intel", "2": "AMD"}
        platform = platforms.get(platform_choice)
        if not platform:
            return jsonify({"error": "Invalid platform choice"}), 400
        
        options = builds[use_case][platform]
        for option in options:
            if budget >= option["max_budget"]:
                recommended_build = option["build"]
        if recommended_build is None:
            recommended_build = options[0]["build"]
    else:
        options = builds["Casual Use"]
        for option in options:
            if budget >= option["max_budget"]:
                recommended_build = option["build"]
        if recommended_build is None:
            recommended_build = options[0]["build"]

    return jsonify(recommended_build)

if __name__ == "__main__":
    app.run(debug=True)