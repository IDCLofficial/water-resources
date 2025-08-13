# Ministry of Water Resources - Official Website

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Official website for the Ministry of Water Resources, built with Next.js, TypeScript, and Tailwind CSS. This platform serves as the digital presence for the ministry, providing information about water resources, news, events, and media.

## 🚀 Features

- **Modern & Responsive Design**: Built with a mobile-first approach
- **Content Management**: Integrated with Contentful for easy content updates
- **News & Events**: Dynamic listing and detailed pages for news and events
- **Media Gallery**: Showcase images and videos
- **Contact Information**: Easy access to ministry contacts

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **CMS**: [Contentful](https://www.contentful.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Prerequisites

- Node.js 18.0.0 or later
- npm or yarn
- Contentful account and space

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/IDCLofficial/water-resources.git
   cd water-resources
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   NEXT_PUBLIC_MINISTRY_ID=your_ministry_id_here
   # Add other Contentful environment variables as needed
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📝 Environment Variables

| Variable Name | Description | Required |
|--------------|-------------|----------|
| `NEXT_PUBLIC_MINISTRY_ID` | ID for the ministry in Contentful | Yes |
| `CONTENTFUL_SPACE_ID` | Your Contentful space ID | Yes |
| `CONTENTFUL_ACCESS_TOKEN` | Your Contentful access token | Yes |
| `NEXT_PUBLIC_BASE_URL` | Base URL of the application | No |

## 🏗️ Project Structure

```
src/
├── app/                    # App router pages and layouts
├── components/             # Reusable UI components
├── lib/                    # Utility functions and services
│   └── contentful/         # Contentful integration
├── public/                 # Static files
└── types/                  # TypeScript type definitions
```

## 🔧 Development

- **Run development server**
  ```bash
  npm run dev
  ```

- **Build for production**
  ```bash
  npm run build
  ```

- **Start production server**
  ```bash
  npm start
  ```

- **Lint code**
  ```bash
  npm run lint
  ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Contentful Documentation](https://www.contentful.com/developers/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

<div align="center">
  Made with ❤️ by the Ministry of Water Resources Team
</div>
