"use client";

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import {
  TiptapVeltComments,
  renderComments,
  addComment,
} from "@veltdev/tiptap-velt-comments";
import { useCommentAnnotations } from "@veltdev/react";
import { useEffect } from "react";

import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  MessageCircle,
  MessageSquare,
  AtSign,
  Plus,
} from "lucide-react";

const EDITOR_ID = "paper-document-editor";

export function PaperDocument() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TiptapVeltComments.configure({
        persistVeltMarks: false,
      }),
    ],
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text:
                "This document contains all the essential information and resources for our current project. Feel free to add comments, suggestions, or ask questions using the tools on the right.",
            },
          ],
        },
        {
          type: "heading",
          attrs: { level: 2 },
          content: [{ type: "text", text: "Overview" }],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text:
                "Our team is working on creating a comprehensive solution that addresses the key challenges in collaborative document editing and file sharing. This project aims to deliver a seamless experience for teams of all sizes.",
            },
          ],
        },
        {
          type: "heading",
          attrs: { level: 2 },
          content: [{ type: "text", text: "Key Features" }],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                { type: "paragraph", content: [{ type: "text", text: "Real-time collaboration with team members" }] },
              ],
            },
            {
              type: "listItem",
              content: [
                { type: "paragraph", content: [{ type: "text", text: "Inline comments and feedback" }] },
              ],
            },
            {
              type: "listItem",
              content: [
                { type: "paragraph", content: [{ type: "text", text: "Version history and rollback capabilities" }] },
              ],
            },
            {
              type: "listItem",
              content: [
                { type: "paragraph", content: [{ type: "text", text: "Secure sharing with granular permissions" }] },
              ],
            },
          ],
        },
        {
          type: "heading",
          attrs: { level: 2 },
          content: [{ type: "text", text: "Timeline" }],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text:
                "The project is divided into multiple phases, each with specific deliverables and milestones. We're currently in Phase 2, focusing on core functionality and user experience improvements."
            },
          ],
        },
        {
          type: "heading",
          attrs: { level: 2 },
          content: [{ type: "text", text: "Resources" }],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text:
                "Below you'll find all the files and documents related to this project. Click on any item to preview or download it."
            },
          ],
        },
      ],
    },
    autofocus: false,
    immediatelyRender: false,
  });

  const annotations = useCommentAnnotations();

  useEffect(() => {
    if (editor && annotations?.length) {
      renderComments({
        editor,
        editorId: EDITOR_ID,
        commentAnnotations: annotations,
      });
    }
  }, [editor, annotations]);

  const onAddComment = () => {
    if (!editor) return;
    addComment({ editor, editorId: EDITOR_ID });
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-primary text-primary-foreground text-xs">
            SJ
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Sarah Johnson</p>
          <p className="text-xs text-muted-foreground">Last edited 2 hours ago</p>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-semibold tracking-tight mb-8">
        Project Documentation
      </h1>

      {/* Bubble Menu */}
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 120 }}>
          <Button
            size="icon"
            onClick={onAddComment}
            className="h-9 w-9 rounded-full bg-black/80 hover:bg-black text-white shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
          </Button>
        </BubbleMenu>
      )}

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="prose prose-neutral dark:prose-invert"
      />

      <Separator className="my-10" />

      {/* Footer Toolbar */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onAddComment} className="gap-2">
          <MessageSquare className="h-4 w-4" />
          Comment
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <AtSign className="h-4 w-4" />
          Mention
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Add content
        </Button>
      </div>
    </div>
  );
}
