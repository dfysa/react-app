import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>关于我们</h3>
          <p>我们致力于为企业提供创新的技术解决方案，助力企业数字化转型。</p>
          <div className="social-links">
            <a href="#" title="微信">
              🔥
            </a>
            <a href="#" title="微博">
              💫
            </a>
            <a href="#" title="LinkedIn">
              🌟
            </a>
            <a href="#" title="GitHub">
              ⭐
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>解决方案</h3>
          <a href="#">人工智能</a>
          <a href="#">云计算服务</a>
          <a href="#">大数据分析</a>
          <a href="#">物联网应用</a>
        </div>
        <div className="footer-section">
          <h3>技术支持</h3>
          <a href="#">帮助中心</a>
          <a href="#">开发文档</a>
          <a href="#">API接口</a>
          <a href="#">技术社区</a>
        </div>
        <div className="footer-section">
          <h3>联系我们</h3>
          <p>📧 Email: contact@example.com</p>
          <p>📞 电话: (123) 456-7890</p>
          <p>📍 地址: 中国上海市浦东新区</p>
          <p>🕙 工作时间: 周一至周五 9:00-18:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 创新科技. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
