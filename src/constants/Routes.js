import ContactUs from "../UserPanel/pages/Contactus/ContactUs";
import HelpingIncomeHistory from "../UserPanel/pages/HelpingIncomeHistory/HelpingIncomeHistory";
import MyInvestment from "../UserPanel/pages/MyInvestment/MyInvestment";
import WithdrawalHistory from "../UserPanel/pages/Payout/WithdrawalHistory";
import ForgotPassword from "../UserPanel/pages/Register/ForgotPassword";
import MyDownlines from "../UserPanel/pages/downline/MyDownline";
import MyGenology from "../UserPanel/pages/downline/MyGenology";

export const Routers = {
  webiste: "/",
  Login: "/login",
  Register: "/register",
  ProductDetails: "/product/:id",
  AllProducts: "all-products",
  ForgotPassword: "/forgot-password",

  About: "/about",
  Contact: "/contact",
  Services: "/services",

  Cart: "/cart",
  Checkout: "/checkout",
  UserPanel: "/user-dashboard",
  MyProfile: "/user-dashboard/myprofile",
  changePassword: "/user-dashboard/changepassword",
  MatchingIncomeHistory: "/user-dashboard/matching-income-history",
  WithdrawalHistory: "/user-dashboard/withdrawal-history",
  LevelIncome: "/user-dashboard/level-income-history",
  // RankHistory: "/user-dashboard/rank-history",
  // BonnzaRank: "/user-dashboard/bonnza-rank",
  InvestmentHistory: "/user-dashboard/investment-history",
  Payout: "/user-dashboard/payout",
  Epin: "/user-dashboard/e-pin",
  Member: "/user-dashboard/members",
  OrderHistory: "/user-dashboard/order-history",
  Coupon: "/user-dashboard/coupon",
  ContactUs: "/user-dashboard/contactus",
  MyDownlines: "/user-dashboard/mydownline",
  MyGenology: "/user-dashboard/mygenology",
  MyInvestment: "/user-dashboard/myinvestment",
  Kyc: "/user-dashboard/kyc",


  
SelfIncentive: "/user-dashboard/self-incentive",
SponsorIncentive: "/user-dashboard/sponsor-incentive",
SelfPerformance: "/user-dashboard/self-performance",
SponsorPerformance: "/user-dashboard/sponsor-performance",

RoyalStar: "/user-dashboard/royal-star-income",
RoyalReferral: "/user-dashboard/royal-referral-income",

//income pages
RainbowIncome: "/user-dashboard/rainbow-income",
ForeverIncome: "/user-dashboard/forever-income",
RoyalClubIncome: "/user-dashboard/royal-club-income",
FieldOfficerIncome: "/user-dashboard/field-officer-income",
UserRankIncome: "/user-dashboard/user-rank-income",

// ========helping plans============?
AllHelpingPlans: "/user-dashboard/helping-plans",
HelpingIncomeHistory: "/user-dashboard/income-history",
HelpingReferral: "/user-dashboard/helping-referral",

  AdminPanel: "/admin-panel",


};
