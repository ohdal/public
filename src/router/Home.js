import MarketingHome from "../views/MarketingHome";

export default [
  {
    path: '/', redirect: '/marketing'
  },
  {
    path: '/marketing', name: 'MarketingHome', component: MarketingHome,
  }
]

