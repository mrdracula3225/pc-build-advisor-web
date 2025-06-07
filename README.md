# 🖥️ PC Build Advisor Web

[Live Demo](https://pc-build-advisor-web.onrender.com)

A web-based PC build recommendation tool that helps users find the best custom PC configurations based on their **budget**, **use case**, and **preferred platform** (Intel or AMD). This project is the enhanced version of my original Code in Place Python console app — now with an intuitive web interface and hosted online using **Render**.


## 🛠️ Tech Stack

- **Frontend**: HTML, CSS (with improvements), JavaScript
- **Backend**: Python (Flask)
- **Hosting**: Render
- **Version Control**: Git & GitHub


## ✨ Key Features

### 🎯 Core Functionality
- 🔍 **Smart Recommendations** - Input budget, use case (Gaming/Editing/Casual), and platform (Intel/AMD) to get tailored builds
- 💰 **Budget Optimization** - Algorithm finds the best parts combination without exceeding your specified budget
- ⚙️ **Platform Flexibility** - Choose between Intel or AMD ecosystems with compatible part selections

### 🖥️ User Experience
- 📱 **Mobile-Friendly Interface** - Clean, responsive design works on all devices
- 📊 **Budget Fit Indicator** - Visual feedback showing how well your build matches your budget
- 🎮 **Use-Case Profiles** - Specialized configurations for Gaming, Content Creation, or Everyday Use

### ⚙️ Technical Advantages
- 🐍 **Python-Powered** - Flask backend ensures fast, reliable recommendations
- 🌐 **Cloud Hosted** - Instant access via Render with 24/7 availability
- 🔄 **Easy Updates** - Modular architecture allows simple parts database updates

## 🌟 Future Roadmap
- [ ] Add part compatibility checking
- [ ] Add benchmark performance estimates
- [ ] User account system to save builds
- [ ] Automatic price updates from retailers
- [ ] Dark mode UI option


### 📸 Screenshots

Here’s how the PC Build Advisor Web looks in action:

#### 🔍 Home Page
![Home page](assests/homepage.png)


#### 🧮 Build Recommendation
![build](assests/build.png)



## 🚀 Installation & Usage

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mrdracula3225/pc-build-advisor-web.git
   cd pc-build-advisor-web

2. **(Optional) Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate

3. **Install dependencies:**
   ```bash
    pip install -r requirements.txt

4. **Run the application:**
   ```bash
    python app.py

5. **Open your browser and visit:**
   ```bash
    http://localhost:5000


✅ Deployed Version: https://pc-build-advisor-web.onrender.com


## 📂 Folder Structure

    ```pc-build-advisor-web/
    │
    ├── static/ # Static files like CSS, JS
    │ └── style.css # Main CSS file
    │
    ├── templates/ # HTML templates
    │ └── index.html # Main page
    │
    ├── app.py # Main Flask application
    ├── builds_data.py # Data logic for PC builds
    ├── requirements.txt # Project dependencies
    ├── README.md # Project documentation


## 🙋‍♂️ Author

Made with ❤️ by [Syed Nawaz](https://www.instagram.com/syednawaz_01/)

If you liked this project, feel free to connect or follow me on Instagram for more updates!


## 📝 License

This project is licensed under the [MIT License](LICENSE).  
Feel free to use, modify, and share it as per the terms of the license.


## 🤝 Contributing

Contributions are welcome!  
If you find any issues or want to add features, please open an issue or submit a pull request.

## 📫 Contact

Feel free to reach out on Instagram: [@syednawaz_01](https://www.instagram.com/syednawaz_01/)

## 🙏 Acknowledgments

- Thanks to the Code in Place program for the initial project inspiration.  
- Thanks to the open source community for tools and libraries used.
