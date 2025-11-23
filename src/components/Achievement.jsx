import './Achievement.css';

const Achievement = () => (
  <section id="achievements">
    <h2 className="achievements-title">Achievements</h2>
    <div className="grid">
      <div className="achievement-card card-hover">
        <div className="achievement-icon trophy-icon">
          <i className="fas fa-trophy" aria-hidden="true"></i>
        </div>
        <div className="achievement-details">
          <h3>2nd Prize - Traffic Tech Ideathon 2025</h3>
          <p>
            Secured the <strong>2nd Prize</strong> in the <strong>Traffic Tech Ideathon 2025</strong>, organized by the Equal Opportunity Cell, CMR Institute of Technology, Bengaluru, held on 12<sup>th</sup> November 2025.
          </p>
        </div>
      </div>
      <div className="achievement-card leetcode-card card-hover">
        <div className="leetcode-icon">130+</div>
        <div className="achievement-details">
          <h3>LeetCode</h3>
          <p>Solved <strong>130+</strong> LeetCode problems, demonstrating strong problem-solving and algorithmic skills.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Achievement;
