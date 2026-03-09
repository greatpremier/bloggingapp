import React from 'react';
import ArticleCard from './ArticleCard';

const MainContent = () => {
  const posts = [
    {
      author: 'Alex Rivera',
      authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMy9q1_XhyrDkmKurZvLiBRjd27DEEq_JCG_IyNAH5OGEeguX8oatdhn55T1aCrEtHQ9uvXWYDU1pmrPsTNM62_0gq2iF29GLKsqWb-n43SZklPoTDgRXShxpYiojgEH3dqx0S_LMP8ufX3jvFMJcdV6GBX5pwPINLLZd2RLL4RFL8_3lN4BNilXg1f2K-j2wMk3Jp3MLHTXReEF_e15knH3eyOFtEVpv9ajIIojbSqAYbRng95_FhaRbYRp-3M6m-RQhI8FXjkcU',
      time: '2 hours ago',
      category: 'Technology',
      title: 'The Future of Decentralized Web and Web3',
      description: 'Exploring how Web3 is changing the internet landscape for creators and developers worldwide. We dive into dApps, governance, and the shift away from centralized data siloes...',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4NVx8tlPMldebLVUeu4xFV7Ub_7SKSpY38_JYGegvjwiAQDxkkQwMp9rKW5Bkz9SJJBCWYBf75PNMwZ9b5hJYYf0mMbcjBi1hUAyKEAWJTXZn4VDy9gF2mZ_y7w8NjPLQ4mPXUns5UnfYr-hj8CeLU7tJvGj3X-_hgnghUPFK3Eaok5w_00Zov3_vK09jXDntvm_Vmu03xfWSjcdBWLuS1XYLiHG9RcjamJbNR3jPNamDnIN_rnC8Ltsw8MAID9XXiu7LcFacqns',
      likes: '1.2k',
      comments: '84',
    },
    {
      author: 'Sarah Chen',
      authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6UfuWdADswNCZ-XMs6p-pPfJ2YtOnKD0pa9ERUMpLiia1s3y8SPBu99sa_C51kFBLiE-paCazieABZOBTsgAj2kiFgEiVPLVBfI9ARMJIb1QOstty_eL2djgb-wyUcHuBSQ0K0Vv1EHdsGD55cM_ugdK4nQePrpvBrrT4028YqMXThdgIitfpFElfHwqDq8lJPj0bXVGWU2BO8jkb6Q02vnLUB3jHwfJBJNtCURfK3WR-y2vOBrAEujiqz_W68ULL6mClWf0oZP0',
      time: '5 hours ago',
      category: 'Lifestyle',
      title: 'Minimalist Living in a Digital Age',
      description: 'How to find balance and focus by reducing digital clutter and embracing essentialism. Learn the three key habits for digital detoxing without losing touch.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvwHDN4Al6GYrJSrGMzUg3guJYYKwQNUtuNJG7vzHpxMg6HJnz1Ta9k-T-w8bVbEu-7eHFEpVW_9tDoWzrV3q2-IuK3i0YMZ-FbhfTgZiUsfovpBKLkRSmquQXnWjDON5zXv-Yuyuf971p11qVlzbBuzekTkt2UaanRkz1Dy-NrgPvYRbO84LEMwHEplZnA5BV-r5Y-0lG2A_qCyDpeGK07yWB8ITubNoocOMvT2a8vwHRwdBQ2qFI-2uBPt2no2xfBArGIBIanBk',
      likes: '856',
      comments: '42',
    },
  ];

  return (
    <section className="flex flex-1 flex-col gap-6">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
        <div className="flex gap-4">
          <div className="h-10 w-10 shrink-0 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwSWV2_OPBzYSl4UGE149qp0_eU2npRgYlgXhvEPJ5EI7Mm4kke2rrxdNTz4e6xqjUA_F7QPN5C9ndDFL-ePaQI57IUsRdDKs_zNatlbjePO4ys3-RaLCdH3Zit5kDDqeM8VEjUM0GjfqyUssRBwEl-KIgoUhmB986cgTC2OdZDYVfQZE0cI3WRbgZVX2AaF-2cG29h3s76MkwgY3vEJ6kQvgkp5zRCCSPM2S0tbIRWn-aR2yA-gWFxWwdT4VMCe1gNNY26dm4kUY')" }}></div>
          <button className="flex-1 rounded-full bg-slate-100 dark:bg-slate-800 px-5 text-left text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            What's on your mind?
          </button>
        </div>
      </div>
      {posts.map((post, index) => (
        <ArticleCard key={index} post={post} />
      ))}
    </section>
  );
};

export default MainContent;
