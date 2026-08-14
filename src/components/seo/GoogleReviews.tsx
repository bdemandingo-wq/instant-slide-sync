const GoogleReviews = () => {
  return (
    <section className="py-16 bg-background" aria-label="Customer Reviews">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <a
            href="https://g.page/r/CffF6_KIHT4JEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-6 h-6"
              loading="lazy"
              width={24}
              height={24}
            />
            <span className="text-lg font-semibold text-foreground">See our reviews on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
