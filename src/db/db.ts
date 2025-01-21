const dashboardData = {
  campaignOverview: {
    activeCampaigns: 65,
    pending: 56,
    canceled: 45,
    successRate: "75%",
    searchCampaign: "",
  },
  mailStatistics: {
    sent: 128,
    pending: 24,
    canceled: 30,
  },
  trafficEffectives: {
    paid: "70%",
    direct: "24%",
    organic: "12%",
  },
  engagementAnalytics: {
    platforms: ["Facebook", "Instagram", "YouTube"],
    data: [
      { month: "Jan", Facebook: 25000, Instagram: 20000, YouTube: 15000 },
      { month: "Feb", Facebook: 50000, Instagram: 40000, YouTube: 35000 },
      { month: "Mar", Facebook: 75000, Instagram: 60000, YouTube: 55000 },
      { month: "Apr", Facebook: 40000, Instagram: 35000, YouTube: 30000 },
      { month: "May", Facebook: 60000, Instagram: 55000, YouTube: 50000 },
      { month: "Jun", Facebook: 80000, Instagram: 75000, YouTube: 70000 },
    ],
  },
  impressions: [
    {
      adName: "GOCA #30",
      status: "Active",
      impressions: 245000,
      date: "Jan 24-10-2023",
    },
    {
      adName: "FACA #24",
      status: "Active",
      impressions: 558000,
      date: "Jan 24-10-2023",
    },
    {
      adName: "YOCA #20",
      status: "Active",
      impressions: 412000,
      date: "Jan 24-10-2023",
    },
  ],
  schedule: [
    {
      no: 1,
      type: "Social Ads",
      status: "Active",
      date: "01.12.23",
      action: "Edit/Delete",
    },
    {
      no: 2,
      type: "Email",
      status: "Pending",
      date: "01.12.23",
      action: "Edit/Delete",
    },
  ],
};

export default dashboardData;
