const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.get("/", (req, res) => {
  const data = {
    name: "گوشی موبایل تکنو مدل vflip ظرفیت 256 و رم 8",
    price: "29,799,000",
    rang: "رنگ:مشکی",

    features: [
      {
        label: "رزولوشن دوربین",
        value: "64 مگاپیکسل",
      },
      {
        label: "نسخه سیستم عامل",
        value: "androde13",
      },
      {
        label: "فناوری صفحه نمایش",
        value: "foldabel ltpo",
      },
      {
        label: "اندازه",
        value: "6.9",
      },
      {
        label: "فناوری صفحه نمایش",
        value: "foldabel ltpo",
      },
    ],
    digiclub: "150",

    colors: ["black", "perpule"],
    textbime: "بیمه",
    bime: {
      status: true,
      detail: {
        label: "بیمه تجهیزات دیجیتال - بیمه پارسیان و رساندن خدمات",
        text: "جزییات",
        price: "467/000 تومان",
      },
    },
    howtoprice: "فرایند قیمت گذاری ونظارت بر قیمت",

    garanti: "گارانتی 18 ماهه مدیا پردازش",

    buttontext: "افزودن به سبد",
    ersal: {
      text: "ارسال دیجی کالا",
      label: "ارسال امروز(فعلا در شهر تهران و کرج)",
    },
    cart: "در سبد خرید +500 نفر",
    Percent: "93.4",
    Satisfaction: "رضایت از کالا|عمرکرد عالی",
    digi: "دیجی کالا",
    customer: "فروشنده",
    Score: "3.7",
    emtiaz: "(امتیاز ۹ خریدار)",
    didgah: "28 دیدگاه .",
    porsesh: "26 پرسش.",
    Paragraph: "Tecno Phantom V Flip 256GB And 8GB RAM Mobile Phone",
    title: "تکنو/ گوشی موبایل تکنو",
  };
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
