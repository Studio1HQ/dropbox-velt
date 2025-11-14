"use client";

import { MessageSquare, AtSign, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { VeltInlineCommentsSection } from "@veltdev/react";
import useTheme from "@/hooks/use-theme";

export function PaperDocument() {
    const { theme } = useTheme();
  
  return (
    <div className="max-w-3xl mx-auto py-8 px-6">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
              SJ
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-foreground">Sarah Johnson</p>
            <p className="text-xs text-muted-foreground">
              Last edited 2 hours ago
            </p>
          </div>
        </div>

        <h1 className="text-4xl font-semibold mb-6 text-foreground dark:text-foreground-dark">
          Project Documentation
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground dark:text-muted-foreground-dark leading-relaxed mb-6">
            This document contains all the essential information and resources
            for our current project. Feel free to add comments, suggestions, or
            ask questions using the tools on the right.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground dark:text-foreground-dark">
            Overview
          </h2>
          <p className="text-base leading-relaxed mb-4 text-foreground dark:text-foreground-dark">
            Our team is working on creating a comprehensive solution that
            addresses the key challenges in collaborative document editing and
            file sharing. This project aims to deliver a seamless experience for
            teams of all sizes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground dark:text-foreground-dark">
            Key Features
          </h2>
          <ul className="space-y-2 mb-6">
            <li className="text-base leading-relaxed text-foreground dark:text-foreground-dark">
              Real-time collaboration with team members
            </li>
            <li className="text-base leading-relaxed text-foreground dark:text-foreground-dark">
              Inline comments and feedback
            </li>
            <li className="text-base leading-relaxed text-foreground dark:text-foreground-dark">
              Version history and rollback capabilities
            </li>
            <li className="text-base leading-relaxed text-foreground dark:text-foreground-dark">
              Secure sharing with granular permissions
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground dark:text-foreground-dark">
            Timeline
          </h2>
          <p className="text-base leading-relaxed mb-4 text-foreground dark:text-foreground-dark">
            The project is divided into multiple phases, each with specific
            deliverables and milestones. We&apos;re currently in Phase 2, focusing on
            core functionality and user experience improvements.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground dark:text-foreground-dark">
            Team Members
          </h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {["SJ", "MT", "AK", "LP"].map((initials) => (
              <div key={initials} className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground dark:text-foreground-dark">
            Resources
          </h2>
          <p className="text-base leading-relaxed mb-4 text-foreground dark:text-foreground-dark">
            Below you&apos;ll find all the files and documents related to this
            project. Click on any item to preview or download it.
          </p>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="gap-2">
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
        <section id="container-id" className="my-2">

          <VeltInlineCommentsSection
            targetElementId="container-id"
            shadowDom={false}
            dialogVariant="dialog-variant"
            variant="inline-section-variant"
darkMode={theme === "dark"}          />
        </section>
    </div>
  );
}
