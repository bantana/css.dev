import "./Demo.css";

export default function Demo() {
  return (
    <div className="demo">
      <header className="page-header">
        <h1>Franklin Running Club</h1>
      </header>
      <div className="container">
        <main className="main">
          <h2>Come join us!</h2>
          <p>
            The <b>Franklin Running Club</b> meets at 6:00pm every Thursday at
            the town square. Runs are three to five miles, at your own pace.
          </p>
          <p>
            Join us while we train for the{" "}
            <a href="/st-patricks">St. Patrick's Day 5k</a>. Don't forget to
            wear green!
          </p>
        </main>
        <aside className="social-links">
          <a href="/mastodon" className="button-link">
            follow us on Mastodon
          </a>
          <a href="/facebook" className="button-link">
            like us on Facebook
          </a>
          <a href="/sponsors" className="sponsor-link">
            Become a sponsor
          </a>
        </aside>
      </div>
    </div>
  );
}
