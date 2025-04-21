import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <span className="highlight-text">创新驱动未来</span>
        <span className="divider">|</span>
        <span>科技改变生活</span>
      </div>
      <div className="hero-content">
        <h1>打造智能化未来</h1>
        <p>利用前沿科技，为企业提供全方位的数字化转型解决方案</p>
        <div className="hero-buttons">
          <button className="primary-btn">开启创新之旅</button>
          <button className="secondary-btn">预约咨询</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/src/assets/hero-image.svg" alt="智能科技" />
      </div>
    </section>
  );
};

export default Hero;
