// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = ["About", "Dashboard", "Cases", "Skills", "Knowledge", "Timeline", "Contact"];

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const TYPING_WORDS = [
  "Securing Systems",
  "Analyzing Threats",
  "Defending Digital Assets",
  "Hunting Vulnerabilities",
];

export const HERO_STATS = [
  ["5+", "Tools Mastered"],
  ["2+", "Labs Completed"],
  ["2", "Certifications"],
  ["100%", "Committed"],
];

// ─── About terminal profile ───────────────────────────────────────────────────
export const PROFILE_FIELDS = [
  { k: "name",     v: "Victor Oluwadamilare Oguntoyinbo",   c: "text-green-400" },
  { k: "role",     v: "Cybersecurity Analyst",     c: "text-cyan-400"  },
  { k: "location", v: "Lagos State, Nigeria",                c: "text-gray-300"  },
  { k: "focus",    v: "Threat Detection & Incident Response",c: "text-green-400" },
  { k: "status",   v: "ACTIVELY SEEKING OPPORTUNITIES",      c: "text-yellow-400"},
];

// ─── Dashboard cards ──────────────────────────────────────────────────────────
export const DASH_CARDS = [
  {
    label: "THREAT ANALYSIS",
    color: "#ff4444",
    glow: "rgba(255,68,68,0.15)",
    desc: "Proactively identifying, categorizing, and triaging threats using OSINT and log analysis to map the attacker's intent before damage is done.",
    stat: "Active",
    statColor: "#ff4444",
    iconKey: "Alert",
  },
  {
    label: "NETWORK SECURITY",
    color: "#00f5ff",
    glow: "rgba(0,245,255,0.15)",
    desc: "Inspecting packet flows with Wireshark, detecting anomalies, and mapping network topology to identify exposure points and unauthorized channels.",
    stat: "Monitoring",
    statColor: "#00f5ff",
    iconKey: "Network",
  },
  {
    label: "INCIDENT RESPONSE",
    color: "#39ff14",
    glow: "rgba(57,255,20,0.15)",
    desc: "Following structured IR playbooks to contain, eradicate, and recover from security events while preserving evidence chains for forensic review.",
    stat: "Ready",
    statColor: "#39ff14",
    iconKey: "Shield",
  },
  {
    label: "VULNERABILITY ASSESSMENT",
    color: "#ffa500",
    glow: "rgba(255,165,0,0.15)",
    desc: "Using tools like Nmap and manual enumeration to discover weaknesses in systems, then documenting findings with severity ratings and remediation steps.",
    stat: "Scanning",
    statColor: "#ffa500",
    iconKey: "Bug",
  },
  {
    label: "OSINT INTELLIGENCE",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.15)",
    desc: "Leveraging open-source intelligence frameworks to trace digital footprints, investigate actors, and aggregate threat context from public data sources.",
    stat: "Active",
    statColor: "#a855f7",
    iconKey: "Eye",
  },
  {
    label: "SECURITY OPERATIONS",
    color: "#00f5ff",
    glow: "rgba(0,245,255,0.1)",
    desc: "Applying SIEM concepts, log correlation, and alert triage workflows to maintain security visibility across endpoints and network infrastructure.",
    stat: "Operational",
    statColor: "#00f5ff",
    iconKey: "Lock",
  },
];

export const DASH_STATUS_BAR = [
  ["SYSTEMS", "ALL NOMINAL", "#39ff14"],
  ["ALERTS",  "0 CRITICAL",  "#00f5ff"],
  ["UPTIME",  "99.9%",       "#39ff14"],
  ["MODE",    "DEFENSIVE",   "#ffa500"],
];

// ─── Case Studies ─────────────────────────────────────────────────────────────
export const CASES = [
  {
    id: "CS-001",
    title: "Phishing Attack Simulation & Header Forensics",
    category: "Social Engineering",
    color: "#ff4444",
    problem:
      "A simulated phishing campaign was launched targeting corporate users with spoofed sender addresses and credential-harvesting landing pages.",
    action:
      "Investigated raw email headers, analyzed SPF/DKIM/DMARC records, traced the originating mail server IP, and examined the embedded HTML payload for credential-capture mechanisms.",
    tools: ["Wireshark", "MXToolbox", "VirusTotal", "Email Header Analyzer", "OSINT Framework"],
    result:
      "Identified the attack vector as a spoofed domain with failed DKIM. Documented prevention strategy including email gateway filtering rules and user awareness training protocols.",
    severity: "HIGH",
    status: "RESOLVED",
    notionUrl: "https://www.notion.so/Phishing-Attack-Simulation-Email-Investigation-3355f04dec658052a9ecc00db6a11ab5?source=copy_link",
  },
  {
    id: "CS-002",
    title: "Network Traffic Anomaly Investigation",
    category: "Network Forensics",
    color: "#00f5ff",
    problem:
      "Unusual outbound traffic spikes were detected on a simulated internal network, suggesting potential data exfiltration or C2 communication.",
    action:
      "Captured and analyzed packet-level data using Wireshark. Applied display filters to isolate suspicious flows, identified unusual port activity on 4444, and traced destination IPs.",
    tools: ["Wireshark", "Nmap", "Zeek (Bro)", "IP Geolocation", "WHOIS Lookup"],
    result:
      "Confirmed unauthorized communication to a known Metasploit handler IP. Documented indicators of compromise (IoCs) and proposed network segmentation remediation.",
    severity: "CRITICAL",
    status: "CONTAINED",
    notionUrl: "https://www.notion.so/Network-Traffic-Anomaly-Investigation-3355f04dec65802cbc0ddad4d2809ac1?source=copy_link",
  },
  {
    id: "CS-003",
    title: "Malware Behavior Analysis — Ransomware Sample",
    category: "Malware Analysis",
    color: "#39ff14",
    problem:
      "A ransomware-like sample was executed in a sandboxed environment to study file system behavior, encryption patterns, and persistence mechanisms.",
    action:
      "Monitored real-time process behavior using sandbox tools. Traced registry modifications, file encryption sequences, and network beacon attempts. Documented the kill chain.",
    tools: ["Any.run Sandbox", "Process Monitor", "Strings", "VirusTotal", "YARA Rules"],
    result:
      "Mapped full attack chain from initial execution to file encryption. Identified persistence via RunOnce registry key. Produced YARA signatures for detection.",
    severity: "HIGH",
    status: "ANALYZED",
    notionUrl: "https://www.notion.so/Malware-Behavior-Analysis-3355f04dec6580888014d937b1b2d063?source=copy_link",
  },
  {
    id: "CS-004",
    title: "System Vulnerability Assessment — Linux Web Server",
    category: "Vulnerability Management",
    color: "#ffa500",
    problem:
      "A simulated Linux web server was assessed for exploitable vulnerabilities as part of a penetration testing lab exercise.",
    action:
      "Performed network enumeration with Nmap, identified open ports (22, 80, 443, 3306). Ran version detection, identified an outdated Apache version with known CVEs.",
    tools: ["Nmap", "Nikto", "CVE Database", "Metasploit (research)", "OWASP ZAP"],
    result:
      "Identified 3 critical CVEs including CVE-2021-41773 (Apache path traversal). Produced a prioritized remediation report with patch recommendations and risk ratings.",
    severity: "CRITICAL",
    status: "REPORTED",
    notionUrl: "https://www.notion.so/System-Vulnerability-Assessment-3355f04dec6580ab9fb1e531aedfe8e3?source=copy_link",
  },
  {
    id: "CS-005",
    title: "OSINT Footprinting & Digital Exposure Report",
    category: "OSINT Intelligence",
    color: "#a855f7",
    problem:
      "Assessed the digital footprint of a fictional target organization to identify information leakage that could be leveraged in a social engineering or spear-phishing attack.",
    action:
      "Used OSINT frameworks to enumerate subdomains, email addresses, employee names, job titles, and exposed cloud assets. Mapped the attack surface without active scanning.",
    tools: ["theHarvester", "Shodan", "Google Dorks", "LinkedIn OSINT", "DNSDumpster"],
    result:
      "Discovered 12 exposed employee emails, 3 unprotected S3 buckets, and sensitive job postings revealing internal tech stack. Full exposure report produced.",
    severity: "MEDIUM",
    status: "DOCUMENTED",
    notionUrl: "https://www.notion.so/OSINT-Footprinting-Digital-Exposure-Report-3355f04dec65800288e8f363217f7d15?source=copy_link",
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILL_GROUPS = [
  {
    category: "Security Skills",
    color: "#00f5ff",
    items: [
      { name: "Threat Analysis",          level: 80 },
      { name: "Incident Response",        level: 75 },
      { name: "Vulnerability Assessment", level: 78 },
      { name: "OSINT Research",           level: 85 },
      { name: "Network Forensics",        level: 72 },
      { name: "Malware Analysis",         level: 65 },
    ],
  },
  {
    category: "Tools & Platforms",
    color: "#39ff14",
    items: [
      { name: "Wireshark",           level: 82 },
      { name: "Nmap",                level: 78 },
      { name: "theHarvester",        level: 80 },
      { name: "VirusTotal / Sandbox",level: 85 },
      { name: "SIEM (Basics)",       level: 60 },
      { name: "Burp Suite",          level: 55 },
    ],
  },
  {
    category: "IT Foundations",
    color: "#ffa500",
    items: [
      { name: "IT Support & Troubleshooting", level: 90 },
      { name: "Linux CLI",                    level: 75 },
      { name: "Networking (TCP/IP)",          level: 78 },
      { name: "Windows Administration",       level: 80 },
      { name: "Documentation & Reporting",    level: 88 },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    name: "Google Cybersecurity Certificate",
    issuer: "Google / Coursera",
    status: "IN VIEW",
    statusColor: "#ffa500",
    iconKey: "Shield",
    iconColor: "#00f5ff",
  },
  {
    name: "Google IT Support Professional",
    issuer: "Google / Coursera",
    status: "COMPLETED",
    statusColor: "#39ff14",
    iconKey: "Award",
    iconColor: "#39ff14",
  },
  {
    name: "Cybersecurity TS Academy",
    issuer: "TS Academy",
    status: "IN VIEW",
    statusColor: "#00f5ff",
    iconKey: "Eye",
    iconColor: "#00f5ff",
  },
  {
    name: "CCNP — Cisco Certified Network Professional",
    issuer: "Cisco",
    status: "IN VIEW",
    statusColor: "#a855f7",
    iconKey: "Network",
    iconColor: "#a855f7",
  },
];

// ─── Knowledge Hub ────────────────────────────────────────────────────────────
export const KNOWLEDGE_TOPICS = [
  {
    title: "What is Cybersecurity?",
    color: "#00f5ff",
    content:
      "Cybersecurity is the practice of protecting systems, networks, programs, and data from digital attacks, unauthorized access, damage, or disruption. It encompasses people, processes, and technology working in concert to defend against an ever-evolving threat landscape.",
  },
  {
    title: "Common Threats: Phishing",
    color: "#ff4444",
    content:
      "Phishing attacks use deceptive emails, messages, or websites to trick users into revealing credentials or installing malware. Spear phishing targets specific individuals using personalized information — often gathered through OSINT — making it far more dangerous than generic campaigns.",
  },
  {
    title: "Malware & Ransomware",
    color: "#ffa500",
    content:
      "Malware is any software designed to harm systems. Ransomware specifically encrypts victim data and demands payment for decryption keys. Modern ransomware groups operate as businesses, using affiliate models (RaaS), double-extortion tactics, and leak sites.",
  },
  {
    title: "The CIA Triad",
    color: "#39ff14",
    content:
      "The three pillars of information security: Confidentiality (ensuring data is accessible only to authorized parties), Integrity (ensuring data is accurate and unaltered), and Availability (ensuring systems and data are accessible when needed). Every security decision maps back to one or more of these principles.",
  },
  {
    title: "Network Security Fundamentals",
    color: "#a855f7",
    content:
      "Network security protects infrastructure from unauthorized access and attacks through firewalls, IDS/IPS, VLANs, encryption, and continuous monitoring. Understanding TCP/IP, DNS, and packet flow is foundational to detecting anomalies and tracing intrusions.",
  },
  {
    title: "Security Best Practices",
    color: "#00f5ff",
    content:
      "Core practices include: multi-factor authentication, the principle of least privilege, regular patching, network segmentation, encrypted communications, security awareness training, and having a tested incident response plan. Defense in depth means no single control is relied upon alone.",
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────
export const TIMELINE = [
  {
    year: "2020",
    label: "IT Support Foundation",
    desc: "Started in IT support — resolving hardware/software issues, managing user accounts, and building deep familiarity with Windows environments, networks, and real-world troubleshooting.",
    color: "#00f5ff",
  },
  {
    year: "2021",
    label: "Networking & Systems",
    desc: "Deepened knowledge in TCP/IP, DNS, DHCP, and network infrastructure. Began understanding how data flows through systems and where interception becomes possible.",
    color: "#39ff14",
  },
  {
    year: "2022",
    label: "Security Awareness",
    desc: "First exposure to cybersecurity concepts — studied common attack vectors, threat categories, and defense frameworks. Completed the Google IT Support Professional Certificate.",
    color: "#ffa500",
  },
  {
    year: "2023",
    label: "Hands-on Lab Work",
    desc: "Began practical lab exercises: network packet analysis with Wireshark, port scanning with Nmap, and OSINT reconnaissance. Simulated phishing campaigns and vulnerability assessments.",
    color: "#a855f7",
  },
  {
    year: "2024–26",
    label: "Cybersecurity Training",
    desc: "Enrolled in Google and TS Academy Cybersecuirity Program . Developed case studies across threat analysis, malware behavior, and incident response. Actively building portfolio and pursuing analyst roles. Still Learning and Updating my skills",
    color: "#00f5ff",
  },
];

// ─── Contact info ─────────────────────────────────────────────────────────────
export const CONTACT_INFO = [
  {
    iconKey: "Mail",
    label: "oguntoyinbo50@gmail.com",
    href: "mailto:oguntoyinbo50@gmail.com",
    color: "#00f5ff",
  },
  {
    iconKey: "Phone",
    label: "+234-8159730671",
    href: "tel:+2348159730671",
    color: "#39ff14",
  },
  {
    iconKey: "Linkedin",
    label: "linkedin.com/in/Oguntoyinbo-victor",
    href: "https://linkedin.com/in/Oguntoyinbo-victor",
    color: "#a855f7",
  },
  {
    iconKey: "Map",
    label: "Lagos State, Nigeria",
    href: null,
    color: "#ffa500",
  },
];
