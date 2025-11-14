# Drop Box Velt Example (Next.js)

A Dropbox-like document collaboration app built with Next.js, Tailwind CSS, Radix UI and [Velt](https://velt.dev), demonstrating real-time commenting and multi-user collaboration on documents.

---

## Features

- 📄 **Document Collaboration**: Collaborative document viewing and editing with real-time updates.

- 🧑‍🤝‍🧑 **Multi-User Support**: Switch between predefined users with avatars.

- 💬 **Real-Time Comments**: Add and view collaborative comments using Velt inline comments.

- 🌓 **Dark/Light Theme**: Toggle between dark and light modes.

- 📊 **Top Bar Navigation**: Header with document title, sharing options, and user management.

- 🔔 **Notifications**: In-app notifications powered by Velt.

- 🧩 **Reusable UI Components**: Built with shadcn/ui and Radix primitives.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)

- **UI**: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)

- **Collaboration**: [Velt](https://velt.dev/)

- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)

- **Icons**: [Lucide React](https://lucide.dev/)

- **Other**: [Radix UI](https://www.radix-ui.com/)

---

## Prerequisites

- **Node.js** (v16+ recommended)

- **npm** (v8+ recommended)

---

## Getting Started

1. Clone the repository

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory

   ```bash
   cd drop-box
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file with your Velt API key:

   ```
   NEXT_PUBLIC_VELT_ID=your_api_key_here
   ```

   > Note: You can get your API key from the [Velt Dashboard](https://app.velt.dev)

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
drop-box/

├── app/                 # Next.js app directory
│   ├── (app)/           # App layout and page components
├── components/          # React components
│   ├── ui/              # UI components (shadcn/ui)
├── helper/              # Users DB and state management
├── hooks/               # Custom hooks (theme provider)
├── lib/                 # Utility functions
```

## Velt Integration

This project uses Velt SDK v4.5.9 for real-time collaboration features:

### Core Features

- User presence and cursor tracking
- Comments and annotations
- Notifications
- Real-time updates

### Velt Components Used

- `VeltProvider`: Main provider component for Velt integration
- `VeltInlineCommentsSection`: Inline commenting system
- `VeltNotificationsTool`: Notification system
- `VeltCommentsSidebar`: Comments management sidebar
- `VeltPresence`: To show active users
- `VeltSidebarButton`: Button to toggle comments sidebar

### Configuration

The application uses the following Velt configurations:

- Document ID: "drop-box-velt"
- User authentication with predefined users (Nany, Mary)
- Custom comment bubble styling
- Dark/Light mode support

## Troubleshooting

### Common Issues

1. **Velt API Key Issues**

   - Ensure your API key is correctly set in `.env.local`
   - Verify the key is active in your Velt Dashboard

2. **Collaboration Features Not Working**

   - Check browser console for errors
   - Verify network connectivity
   - Ensure you're using a supported browser

3. **Build Issues**
   - Clear `.next` directory and node_modules
   - Run `npm install` again
   - Check Node.js version compatibility

## Documentation

### Velt Resources

- [Velt Documentation](https://docs.velt.dev/getting-started/introduction)
- [Velt API Reference](https://docs.velt.dev/api-reference)
- [Velt Dashboard](https://app.velt.dev)
- [Velt GitHub](https://github.com/veltdev)

### UI Components

- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

Feel free to submit issues and enhancement requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

