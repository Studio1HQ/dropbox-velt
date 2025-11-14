"use client";
import {
  useVeltClient,
  VeltCommentsSidebar,
  VeltNotificationsTool,
  VeltPresence,
  VeltSidebarButton,
} from "@veltdev/react";

import { names, userIds, useUserStore } from "@/helper/userdb";
import { Rocket, Share, User } from "lucide-react";
import React, { useEffect, useMemo, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText, Share2, MoreHorizontal, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import useTheme, { ThemeToggleButton } from "@/hooks/use-theme";

export function TopBar() {
  const { theme } = useTheme();
  const { user, setUser } = useUserStore();
  const { client } = useVeltClient();
  const prevUserRef = useRef(user);
  const isInitializingRef = useRef(false); // Prevent overlapping initialization calls

  const predefinedUsers = useMemo(
    () =>
      userIds.map((uid, index) => {
        const avatarUrls = [
          "https://api.dicebear.com/7.x/pixel-art/svg?seed=Nany",
          "https://api.dicebear.com/7.x/pixel-art/svg?seed=Mary",
        ];
        return {
          uid: uid,
          displayName: names[index],
          email: `${names[index].toLowerCase()}@gmail.com`,
          photoUrl: avatarUrls[index],
        };
      }),
    []
  );

  // Initialize user from localStorage if none exists
  useEffect(() => {
    if (typeof window !== "undefined" && !user) {
      const storedUser = localStorage.getItem("user-storage");
      if (!storedUser) {
        setUser(predefinedUsers[0]);
      }
    }
  }, [user, setUser, predefinedUsers]);

  // Handle Velt client initialization, user identification, and document setting
  useEffect(() => {
    if (!client || !user || isInitializingRef.current) {
      console.log("Velt init skipped:", {
        client: !!client,
        user: !!user,
        initializing: isInitializingRef.current,
      });
      return;
    }

    const initializeVelt = async () => {
      isInitializingRef.current = true;
      try {
        // Detect user switch
        const isUserSwitch = prevUserRef.current?.uid !== user.uid;
        prevUserRef.current = user;

        console.log("Starting Velt init for user:", user.uid, { isUserSwitch });

        // Re-identify the user (handles initial and switches)
        const veltUser = {
          userId: user.uid,
          organizationId: "organization_id",
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoUrl,
        };
        await client.identify(veltUser);
        console.log("Velt user identified:", veltUser.userId);
        await client.setDocuments([
          {
            id: "drop-box-velt",
            metadata: { documentName: "drop-box-velt" },
          },
        ]);
        console.log("Velt documents set: drop-box-velt");
      } catch (error) {
        console.error("Error initializing Velt:", error);
      } finally {
        isInitializingRef.current = false;
      }
    };

    initializeVelt();
  }, [client, user]); // Re-run on client or user change
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3">
        <div className="flex items-center gap-3 min-w-0">
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
            <FileText className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2 min-w-0">
            <h1 className="text-base font-medium truncate">
              Project Documentation
            </h1>
            <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="hidden sm:flex h-8 text-sm gap-2"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <div className="flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2 h-8 bg-white  text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200  dark:border dark:border-white/30 dark:!bg-[#121212] dark:hover:!bg-gray-700"
                >
                  <Avatar className="w-5 h-5">
                    <AvatarImage
                      src={user?.photoUrl || "https://via.placeholder.com/100"}
                      alt={user?.displayName || "User"}
                    />
                    <AvatarFallback className="text-xs">
                      {user?.displayName}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm truncate max-w-[100px]">
                    {user?.displayName}
                  </span>
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-64 bg-white  text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200  dark:bg-[#121212] dark:border dark:border-white/30"
              >
                <DropdownMenuLabel>Select User</DropdownMenuLabel>
                <DropdownMenuSeparator className="dark:bg-white/40" />
                {predefinedUsers.map((Currentuser) => (
                  <DropdownMenuItem
                    key={Currentuser.uid}
                    onClick={() => setUser(Currentuser)}
                    className="flex items-center space-x-3 p-3 cursor-pointer hover:!bg-gray-100 hover:dark:!bg-[#121212] dark:hover:!bg-gray-700"
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src={Currentuser.photoUrl}
                        alt={Currentuser.displayName}
                      />
                      <AvatarFallback className="text-xs">
                        {Currentuser.displayName}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 dark:text-white/70">
                        {Currentuser.displayName}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-white/60">
                        {Currentuser.email}
                      </div>
                      <div className="text-xs text-gray-400 dark:text-white/50">
                        User
                      </div>
                    </div>
                    {user?.uid === Currentuser.uid && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    )}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center space-x-2 text-blue-600 hover:dark:bg-[#515881] ">
                  <User size={16} />
                  <span className="hover:dark:text-white/70">Manage Users</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="max-md:hidden">
              <VeltPresence />
            </div>
            <VeltNotificationsTool darkMode={theme === "dark"} />
          </div>
          <ThemeToggleButton />
          <VeltSidebarButton darkMode={theme === "dark"} />
          <VeltCommentsSidebar darkMode={theme === "dark"} />
        </div>
      </div>
    </header>
  );
}
