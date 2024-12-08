# HealthyFood - Modern Food Ordering Platform

A modern, responsive food ordering web application built with React.js and Vite, featuring a beautiful UI powered by Tailwind CSS.

## 🚀 Features

- **Intuitive User Interface**: Clean and modern design for the best user experience
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **State Management**: Utilizes Redux Toolkit for efficient state management
- **Real-time Updates**: Instant feedback with React Hot Toast notifications
- **Dynamic Routing**: Smooth navigation with React Router DOM
- **Loading States**: Elegant loading indicators using React Spinners

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18.3.1
- **Build Tool**: Vite 6.0.1
- **Styling**: Tailwind CSS 3.4.16
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM 7.0.2
- **UI Components**: React Icons 5.4.0
- **Notifications**: React Hot Toast 2.4.1
- **Loading States**: React Spinners 0.15.0

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd HealthyFood
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
HealthyFood/
├── src/
│   ├── Pages/         # Page components
│   ├── Redux/         # Redux store and slices
│   ├── components/    # Reusable components
│   ├── data/         # Static data and constants
│   ├── assets/       # Images and static assets
│   ├── App.jsx       # Main application component
│   └── main.jsx      # Application entry point
├── public/           # Public assets
└── ...config files
```

## 🔒 Environment Variables

Create a `.env` file in the root directory with the following variables:
```env
VITE_API_URL=your_api_url_here
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Initial work - [Your Name]

## 🙏 Acknowledgments

- Vite.js team for the excellent build tool
- React.js community for the amazing ecosystem
- Tailwind CSS team for the utility-first CSS framework
