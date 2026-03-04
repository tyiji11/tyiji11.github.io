const content = {
  zh: {
    lang: "zh-CN",
    name: "林知夏 | ZhiXia Lin",
    title: "HRBP / 人力资源经理 · HR Manager",
    summary:
      "8年人力资源全模块经验，擅长组织发展、人才盘点、招聘体系搭建与绩效优化。",
    contact: {
      phone: "电话 / Tel: 138-1234-5678",
      email: "邮箱 / Email: hr.lin@example.com",
      city: "城市 / City: 上海",
    },
    metricTitle: "HR 关键指标",
    metrics: ["年度招聘达成率 112%", "关键岗位到岗周期 -35%", "员工年度留存率 91%", "绩效面谈覆盖率 100%"],
    skillsTitle: "核心能力 / Core Skills",
    skills: [
      "组织发展与岗位体系设计（OD）",
      "招聘策略与雇主品牌建设（社招/校招）",
      "人才盘点与继任计划（9宫格）",
      "绩效管理与薪酬激励机制优化",
    ],
    eduTitle: "教育背景与证书 / Education & Certifications",
    educations: [
      "复旦大学 · 人力资源管理硕士（2014-2017）",
      "企业人力资源管理师（二级）",
      "DISC 认证讲师｜OKR 实践认证",
    ],
    strengthTitle: "个人资历亮点 / Professional Profile",
    strengths: [
      "8 年 HR 实战，覆盖招聘、OD、员工关系、绩效与培训全模块",
      "服务过互联网与电商高增长阶段，具备组织扩张与流程重塑经验",
      "擅长以业务目标驱动人才策略，重视数据化与业务伙伴协同",
    ],
    expTitle: "工作经历 / Work Experience",
    jobs: [
      {
        title: "2021.03 - 至今｜星澜科技｜高级 HRBP",
        desc: "支持研发与产品双序列（220人）；重构绩效面谈机制并建立人才盘点节奏，关键人才保留率提升 18%。",
      },
      {
        title: "2018.06 - 2021.02｜曜石电商｜招聘与组织发展经理",
        desc: "负责年均 160+ HC 的招聘交付，搭建结构化面试题库与面试官认证体系，Offer 接受率从 68% 提升至 82%。",
      },
      {
        title: "2017.03 - 2018.05｜远景咨询｜HR 专员",
        desc: "参与企业文化项目与培训运营，完成 30+ 场管理者培训执行，培训满意度长期保持在 95% 以上。",
      },
    ],
    resultTitle: "代表项目与成果 / Key Projects & Results",
    results: [
      "1) 校招雇主品牌升级：建立校企合作与雇主内容矩阵，校招生到岗率提升至 89%。",
      "2) 绩效体系迭代：引入季度 OKR 校准会，跨部门目标对齐效率提升 40%。",
      "3) 关键人才保留项目：建立高潜人才发展计划，核心岗位离职率下降 22%。",
    ],
    footer: "感谢阅读 · hr.lin@example.com",
  },
  en: {
    lang: "en",
    name: "ZhiXia Lin",
    title: "Senior HRBP / HR Manager",
    summary:
      "8 years of full-cycle HR experience in organizational development, talent review, recruitment system design, and performance optimization.",
    contact: {
      phone: "Tel: +86 138-1234-5678",
      email: "Email: hr.lin@example.com",
      city: "City: Shanghai",
    },
    metricTitle: "HR Highlights",
    metrics: [
      "Annual hiring target achievement: 112%",
      "Critical-role time-to-fill reduced by 35%",
      "Annual employee retention rate: 91%",
      "Performance review coverage: 100%",
    ],
    skillsTitle: "Core Skills",
    skills: [
      "Organization design and job architecture (OD)",
      "Recruitment strategy and employer branding",
      "Talent review and succession planning (9-box)",
      "Performance management and compensation optimization",
    ],
    eduTitle: "Education & Certifications",
    educations: [
      "Fudan University, M.Sc. in Human Resource Management (2014-2017)",
      "National Level-II Enterprise HR Manager Certification",
      "DISC Certified Trainer | OKR Practitioner Certification",
    ],
    strengthTitle: "Professional Profile",
    strengths: [
      "8 years of hands-on HR work across recruitment, OD, employee relations, performance, and L&D",
      "Experience supporting rapid-growth internet and e-commerce organizations",
      "Strong in aligning people strategy with business outcomes through data and partnership",
    ],
    expTitle: "Work Experience",
    jobs: [
      {
        title: "Mar 2021 - Present | Xinglan Tech | Senior HRBP",
        desc: "Supported Engineering and Product organizations (220 employees), rebuilt the performance conversation cadence, and improved critical talent retention by 18%.",
      },
      {
        title: "Jun 2018 - Feb 2021 | Obsidian Commerce | Recruitment & OD Manager",
        desc: "Delivered 160+ annual hires, built a structured interview and interviewer certification system, and raised offer acceptance from 68% to 82%.",
      },
      {
        title: "Mar 2017 - May 2018 | Vision Consulting | HR Specialist",
        desc: "Executed culture and training programs, delivered 30+ manager workshops, and maintained over 95% training satisfaction.",
      },
    ],
    resultTitle: "Key Projects & Results",
    results: [
      "1) Campus employer branding upgrade: built university partnerships and content matrix, increasing campus offer onboarding rate to 89%.",
      "2) Performance framework iteration: introduced quarterly OKR calibration, improving cross-team goal alignment efficiency by 40%.",
      "3) Critical talent retention program: launched a high-potential development track, reducing attrition in key roles by 22%.",
    ],
    footer: "Thank you for your time · hr.lin@example.com",
  },
};

const nodes = {
  name: document.getElementById("name"),
  title: document.getElementById("title"),
  summary: document.getElementById("summary"),
  phone: document.getElementById("phone"),
  email: document.getElementById("email"),
  city: document.getElementById("city"),
  metricTitle: document.getElementById("metric-title"),
  metrics: document.getElementById("metrics"),
  skillsTitle: document.getElementById("skills-title"),
  skills: document.getElementById("skills-list"),
  eduTitle: document.getElementById("edu-title"),
  edu: document.getElementById("edu-list"),
  strengthTitle: document.getElementById("strength-title"),
  strengths: document.getElementById("strength-list"),
  expTitle: document.getElementById("exp-title"),
  jobs: document.getElementById("jobs"),
  resultTitle: document.getElementById("result-title"),
  results: document.getElementById("result-list"),
  footer: document.getElementById("footer"),
  langZh: document.getElementById("lang-zh"),
  langEn: document.getElementById("lang-en"),
};

function fillList(el, items) {
  el.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function fillJobs(el, jobs) {
  el.innerHTML = jobs
    .map(
      (job) =>
        `<article class="job"><h3 class="job-title">${job.title}</h3><p class="job-desc">${job.desc}</p></article>`,
    )
    .join("");
}

function setLang(langKey) {
  const data = content[langKey];

  document.documentElement.lang = data.lang;
  document.title = `${data.name} | HR`;

  nodes.name.textContent = data.name;
  nodes.title.textContent = data.title;
  nodes.summary.textContent = data.summary;

  nodes.phone.textContent = data.contact.phone;
  nodes.email.textContent = data.contact.email;
  nodes.city.textContent = data.contact.city;

  nodes.metricTitle.textContent = data.metricTitle;
  fillList(nodes.metrics, data.metrics);

  nodes.skillsTitle.textContent = data.skillsTitle;
  fillList(nodes.skills, data.skills);

  nodes.eduTitle.textContent = data.eduTitle;
  fillList(nodes.edu, data.educations);

  nodes.strengthTitle.textContent = data.strengthTitle;
  fillList(nodes.strengths, data.strengths);

  nodes.expTitle.textContent = data.expTitle;
  fillJobs(nodes.jobs, data.jobs);

  nodes.resultTitle.textContent = data.resultTitle;
  fillList(nodes.results, data.results);

  nodes.footer.textContent = data.footer;

  const isZh = langKey === "zh";
  nodes.langZh.classList.toggle("active", isZh);
  nodes.langEn.classList.toggle("active", !isZh);
  nodes.langZh.setAttribute("aria-selected", String(isZh));
  nodes.langEn.setAttribute("aria-selected", String(!isZh));
}

nodes.langZh.addEventListener("click", () => setLang("zh"));
nodes.langEn.addEventListener("click", () => setLang("en"));

setLang("zh");
