import React from "react";

const Features = () => {
  const features = [
    {
      title: "智能解决方案",
      description: "运用AI技术，为企业打造智能化业务流程",
      icon: "🤖",
    },
    {
      title: "云端技术",
      description: "提供灵活可扩展的云端解决方案",
      icon: "☁️",
    },
    {
      title: "数据分析",
      description: "深度挖掘数据价值，助力企业决策",
      icon: "📊",
    },
    {
      title: "安全防护",
      description: "全方位的安全防护体系，保护企业数据资产",
      icon: "🛡️",
    },
    {
      title: "技术创新",
      description: "持续创新研发，引领技术发展方向",
      icon: "💡",
    },
    {
      title: "专业服务",
      description: "24/7专业技术支持，快速响应需求",
      icon: "🎯",
    },
  ];
  return (
    <section className="features" id="features">
      <h2>我们的优势</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
