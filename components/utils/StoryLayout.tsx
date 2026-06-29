interface StoryLayoutProps {
  children: React.ReactNode;
}

export const StoryRow = ({ children }: StoryLayoutProps) => (
  <div className="flex gap-4 items-start">{children}</div>
);

export const StoryColumn = ({ children }: StoryLayoutProps) => (
  <div className="flex flex-col gap-4 items-start">{children}</div>
);
