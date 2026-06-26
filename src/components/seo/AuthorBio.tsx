const AuthorBio = () => (
  <div className="mt-12 pt-8 border-t border-border">
    <div className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <span className="font-display text-lg font-bold text-primary">TW</span>
      </div>
      <div>
        <p className="font-semibold text-foreground mb-1">Written by the CLEAN COLLECTIVE Team</p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          The CLEAN COLLECTIVE cleaning experts have been serving South Florida since 2023. Our team of professional cleaners and home care specialists share tips, guides, and advice for keeping your home spotless year-round.
        </p>
      </div>
    </div>
  </div>
);

export default AuthorBio;
