# Dropbox Paper Clone with Velt Collaboration

A **Dropbox Paper-inspired** document collaboration app built with **Next.js**, **TipTap Editor**, and [**Velt**](https://velt.dev), demonstrating real-time inline commenting and multi-user collaboration features.

## ✨ Features

- � **Rich Text Editing** — TipTap-powered editor with full formatting support
- 💬 **Inline Comments** — Select text and add contextual comments via bubble menu
- 🧑‍🤝‍🧑 **Multi-User Collaboration** — Switch between predefined users (Nany, Mary) with unique avatars
- � **Real-Time Presence** — See who else is viewing the document
- 🔔 **Notifications** — In-app notification system powered by Velt
- 📋 **Comments Sidebar** — Manage and review all document comments
- 🌓 **Dark/Light Theme** — Toggle between themes with persistent preference
- 🎨 **Modern UI** — Built with shadcn/ui components and Tailwind CSS

---

## 🛠 Tech Stack

| Category             | Technology                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Framework**        | [Next.js](https://nextjs.org/) 13.5 (App Router)                                                                        |
| **UI Library**       | [React](https://react.dev/) 18.2                                                                                        |
| **Editor**           | [TipTap](https://tiptap.dev/) 2.2                                                                                       |
| **Collaboration**    | [Velt SDK](https://velt.dev/) 4.5 + [TipTap Velt Comments](https://www.npmjs.com/package/@veltdev/tiptap-velt-comments) |
| **Styling**          | [Tailwind CSS](https://tailwindcss.com/) 3.3                                                                            |
| **UI Components**    | [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)                                              |
| **State Management** | [Zustand](https://zustand-demo.pmnd.rs/) 5.0                                                                            |
| **Icons**            | [Lucide React](https://lucide.dev/)                                                                                     |
| **Language**         | [TypeScript](https://www.typescriptlang.org/) 5.2                                                                       |

---

## 📋 Prerequisites

- **Node.js** v16 or higher
- **npm** v8 or higher (or yarn/pnpm)
- A **Velt API Key** — [Get one free](https://app.velt.dev)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd drop-box
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_VELT_ID=your_velt_api_key_here
```

> 💡 **Tip:** Get your API key from the [Velt Dashboard](https://app.velt.dev)

### 4. Start Development Server

```bash
npm run dev
```

### 5. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
drop-box/
├── app/
│   ├── (app)/
│   │   ├── layout.tsx       # App layout with VeltProvider & ThemeProvider
│   │   └── page.tsx         # Main page with TopBar and PaperDocument
│   ├── globals.css          # Global styles and Tailwind directives
│   └── layout.tsx           # Root layout with HTML structure
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── avatar.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── separator.tsx
│   ├── paper-document.tsx   # TipTap editor with Velt comments integration
│   └── top-bar.tsx          # Header with user switcher, presence, notifications
├── helper/
│   └── userdb.ts            # User store (Zustand) & predefined users
├── hooks/
│   └── use-theme.tsx        # Theme provider and toggle functionality
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── .env                     # Environment variables (Velt API key)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🔗 Velt Integration

This project demonstrates **Velt's TipTap integration** for adding collaborative comments to rich text documents.

### Velt Components Used

| Component               | Purpose                                                    |
| ----------------------- | ---------------------------------------------------------- |
| `VeltProvider`          | Main provider wrapping the app for Velt SDK initialization |
| `VeltPresence`          | Displays active users viewing the document                 |
| `VeltNotificationsTool` | Shows notification bell with comment updates               |
| `VeltSidebarButton`     | Toggle button for comments sidebar                         |
| `VeltCommentsSidebar`   | Sidebar panel showing all comments                         |

### TipTap Velt Plugin

The editor uses `@veltdev/tiptap-velt-comments` for inline comments:

```tsx
import {
  TiptapVeltComments,
  renderComments,
  addComment,
} from "@veltdev/tiptap-velt-comments";
import { useCommentAnnotations } from "@veltdev/react";

// In editor extensions
TiptapVeltComments.configure({ persistVeltMarks: false });

// Render existing comments
renderComments({ editor, editorId, commentAnnotations });

// Add new comment on selected text
addComment({ editor, editorId });
```

### Configuration

| Setting          | Value                              |
| ---------------- | ---------------------------------- |
| Document ID      | `drop-box-velt`                    |
| Organization ID  | `organization_id`                  |
| Predefined Users | Nany (`user001`), Mary (`user002`) |

---

## 🎯 How to Use

1. **Switch Users** — Click the user dropdown in the top bar to switch between Nany and Mary
2. **Add Comments** — Select text in the document, then click the comment icon in the bubble menu
3. **View Comments** — Click the sidebar button to see all comments
4. **Toggle Theme** — Use the theme toggle button to switch between light and dark modes
5. **View Presence** — See other active users' avatars in the top bar

## 📚 Documentation & Resources

### Velt

- [Velt Documentation](https://docs.velt.dev)
- [TipTap Integration Guide](https://docs.velt.dev/text-editor-setup/overview)
- [Velt API Reference](https://docs.velt.dev/api-reference/sdk/react)
- [Velt Dashboard](https://app.velt.dev)

### TipTap Editor

- [TipTap Documentation](https://tiptap.dev/docs)
- [TipTap Extensions](https://tiptap.dev/docs/extensions)

### UI Components

- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
