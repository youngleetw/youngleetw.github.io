export type TimelineItem = {
	title: string;
	datetime: string;
	detail?: string;
	category: "證照" | "競賽" | "參與" | "實習";
};

export const timelineItems: TimelineItem[] = [
	{
		category: "證照",
		title: "iPAS 資訊安全工程師-中級能力鑑定",
		datetime: "2025.10.01",
	},
	{
		category: "競賽",
		title: "神盾杯初賽 Aegis 2025",
		datetime: "2025.09.27",
		detail: "7th Team(Name: 在小小的實驗室裡挖阿挖阿挖)",
	},
	{
		category: "參與",
		title: "HITCON AI Freetalk 2025",
		datetime: "2025.09.12",
	},
	{
		category: "參與",
		title: "HITCON 2025",
		datetime: "2025.08.15 - 2025.08.16",
	},
	{
		category: "競賽",
		title: "WHYCTF 2025",
		datetime: "2025.08.09 - 2025.08.12",
		detail: "188/1806 Team(Name: NTUT_Is1ab)",
	},
	{
		category: "參與",
		title: "CraftCon Taiwan 2025",
		datetime: "2025.07.04",
	},
	{
		category: "參與",
		title: "114 年度教育體系資安攻防演練 - 攻擊手",
		datetime: "2025.07.01 - 2025.09.11",
	},
	{
		category: "證照",
		title: "Google Cybersecurity Certificate",
		datetime: "2025.06.26",
	},
	{
		category: "競賽",
		title: "AIS3 Pre-exam 2025",
		datetime: "2025.05.24 - 2025.05.26",
		detail: "44/344 Team(Name: Young_Lee)",
	},
	{
		category: "競賽",
		title: "MyFirst CTF 2025",
		datetime: "2025.05.24",
		detail: "4/80 Team 銀獎(Name: Young_Lee)",
	},
	{
		category: "參與",
		title: "2025 AIS3 Club 北區高中職程式安全黑客松工作坊 - 助教",
		datetime: "2025.05.03 - 2025.05.04",
	},
	{
		category: "競賽",
		title: "Dawg CTF 2025",
		datetime: "2025.04.18 - 2025.04.20",
		detail: "223/760 Team(Name: NTUT_Is1ab)",
	},
	{
		category: "競賽",
		title: "DEF CON CTF Qualifier 2025",
		datetime: "2025.04.12 - 2025.04.14",
		detail: "31/195 Team(Name: 星爆牛炒竹狐)",
	},
	{
		category: "競賽",
		title: "squ1rrel CTF 2025",
		datetime: "2025.04.05 - 2025.04.07",
		detail: "227/611 Team(Name: NTUT_Is1ab)",
	},
	{
		category: "競賽",
		title: "SwampCTF 2025",
		datetime: "2025.03.29 - 2025.03.31",
		detail: "219/751 Team(Name: NTUT_Is1ab)",
	},
	{
		category: "參與",
		title: "CyCraft C++ 讀書會 2025",
		datetime: "2025.03.22",
	},
	{
		category: "競賽",
		title: "Cyber Apocalypse CTF 2025: Tales from Eldoria",
		datetime: "2025.03.21 - 2025.03.26",
		detail: "715/8129 Team(Name: NTUT_Is1ab)",
	},
	{
		category: "參與",
		title: "DEVCORE CONFERENCE 2025",
		datetime: "2025.03.15",
	},
	{
		category: "參與",
		title: "SITCON 2025",
		datetime: "2025.03.08",
	},
	{
		category: "競賽",
		title: "PwnMe CTF Quals 2025",
		datetime: "2025.02.28-2025.03.02",
		detail: "349/955 Team(Name: NTUT_Is1ab)",
	},
	{
		category: "競賽",
		title: "TUCTF 2024",
		datetime: "2025.01.24-2025.01.26",
		detail: "153/485 Team(Name: NTUT_Is1ab)",
	},
	{
		category: "競賽",
		title: "x3CTF 2025 (feat. mvm)",
		datetime: "2025.01.24-2025.01.26",
		detail: "320/527 Team(Name: NTUT_Is1ab)",
	},
	{
		category: "競賽",
		title: "Srdnlen CTF 2025",
		datetime: "2025.01.18-2025.01.19",
		detail: "117/847 Team(Name: NTUT_Is1ab)",
	},
	{
		category: "競賽",
		title: "TSCCTF 2025",
		datetime: "2025.01.13-2025.01.16",
		detail: "37th Name: Young_Lee",
	},
	{
		category: "競賽",
		title: "Platypwn 2024",
		datetime: "2024.12.07-2024.12.08",
		detail: "195/328 Team(Name: NTUT_Is1ab)",
	},
	{
		category: "競賽",
		title: "CTF 種子培訓工作坊",
		datetime: "2024.11.23",
		detail: "金獎",
	},
	{
		category: "競賽",
		title: "N1CTF 2024",
		datetime: "2024.11.09",
		detail: "199/260",
	},
	{
		category: "競賽",
		title: "CGGC 2024",
		datetime: "2024.11.02-2024.11.03",
		detail: "19/64 Team(Name: CGGC一日遊)",
	},
	{
		category: "競賽",
		title: "2024 AEGIS 神盾盃",
		datetime: "2024.09.14",
		detail: "N/A",
	},
	{
		category: "證照",
		title: "iPAS 資訊安全工程師-初級能力鑑定",
		datetime: "2024.06.21",
	},
	{
		category: "參與",
		title: "HITCON Carnival 2023",
		datetime: "2023.11.14 - 2023.11.15",
	},
	{
		category: "實習",
		title: "凌群電腦股份有限公司",
		datetime: "2023.08 - 2024.06",
		detail: "弱點掃描、惡意攻擊流量模擬",
	},
];
