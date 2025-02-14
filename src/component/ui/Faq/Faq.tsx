"use client";
import { useState } from "react";

const faqs = [
  {
    question: "আপনার LCD স্ক্রিন কি আসল নাকি লোকাল?",
    answer:
      "আমরা উভয় ধরনের LCD স্ক্রিন সরবরাহ করি - আসল (OEM) এবং উচ্চ-মানের আফটারমার্কেট স্ক্রিন। আপনি আপনার বাজেট ও প্রয়োজন অনুযায়ী বেছে নিতে পারেন।",
  },
  {
    question: "LCD স্ক্রিনের ওয়ারেন্টি কতদিনের?",
    answer:
      "আমাদের সকল LCD স্ক্রিনের সাথে ৬ মাসের ওয়ারেন্টি দেওয়া হয়, যা শুধুমাত্র উৎপাদনজনিত ত্রুটির জন্য প্রযোজ্য। ভাঙ্গা বা পানির সংস্পর্শে আসা স্ক্রিন ওয়ারেন্টির অন্তর্ভুক্ত নয়।",
  },
  {
    question: "আমি কি স্ক্রিন ফেরত দিতে পারবো বা পরিবর্তন করতে পারবো?",
    answer:
      "হ্যাঁ, আপনি যদি LCD স্ক্রিন ব্যবহার না করে মূল অবস্থায় রাখেন তবে ৭ দিনের মধ্যে ফেরত বা পরিবর্তন করতে পারবেন। বিস্তারিত জানতে আমাদের কাস্টমার সার্ভিসে যোগাযোগ করুন।",
  },
  {
    question: "কিভাবে নিশ্চিত হবো যে LCD স্ক্রিন আমার ফোনের সাথে মানানসই?",
    answer:
      "প্রত্যেক প্রোডাক্ট পেইজে কম্প্যাটিবল মডেলের নাম উল্লেখ করা থাকে। যদি নিশ্চিত না হন, তাহলে কেনার আগে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।",
  },
  {
    question: "ডেলিভারি পেতে কতদিন সময় লাগবে?",
    answer:
      "আমরা দ্রুত ডেলিভারি প্রদান করি। স্ট্যান্ডার্ড ডেলিভারি ৩-৫ কর্মদিবসের মধ্যে হয়, এবং এক্সপ্রেস ডেলিভারি ১-২ কর্মদিবসের মধ্যে সম্পন্ন হয়।",
  },
  {
    question: "আপনারা কি LCD স্ক্রিন ইনস্টলেশন সার্ভিস দেন?",
    answer:
      "বর্তমানে আমরা ইনস্টলেশন সার্ভিস প্রদান করি না, তবে আমরা একটি বিস্তারিত ইনস্টলেশন গাইড সরবরাহ করি যাতে আপনি নিজে প্রতিস্থাপন করতে পারেন।",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100 ">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800  text-center mb-8">
        FAQ Section
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md cursor-pointer"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {faq.question}
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
