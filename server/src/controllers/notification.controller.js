const cron = require("node-cron");
const Notification = require("../models/notification.model");

cron.schedule("0 0 1 * *", async () => {
  const prevMonth = new Date();
  prevMonth.setMonth(prevMonth.getMonth() - 1);

  await Notification.deleteMany({ createdAt: { $lt: prevMonth } });
});
